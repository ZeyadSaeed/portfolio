"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import HamburgerMenu from "./HamburgerMenu";

const PhoneNavbarNavigation = dynamic(() => import("./PhoneNavbarNavigation"), {
  ssr: false,
});

const TopNavbarPhone = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-end px-8 pt-8 md:hidden">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <AnimatePresence>
        {isOpen && <PhoneNavbarNavigation setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};
export default TopNavbarPhone;
