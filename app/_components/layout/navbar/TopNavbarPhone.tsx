"use client";
import { AnimatePresence } from "framer-motion";
import PhoneNavbarNavigation from "./PhoneNavbarNavigation";
import { useState } from "react";

const TopNavbarPhone = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-end px-8 pt-8 md:hidden">
      <button
        name="burger-menu"
        className="z-50 flex flex-col gap-[6px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`h-[3px] w-8 rounded-full bg-white duration-300 ${
            isOpen ? "translate-y-[9px] -rotate-45" : "translate-y-0 rotate-0"
          }`}
        ></span>
        <span
          className={`h-[3px] w-6 rounded-full bg-white duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-[3px] rounded-full bg-white duration-300 ${
            isOpen
              ? "w-8 -translate-y-[9px] rotate-45"
              : "w-4 translate-y-0 rotate-0"
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && <PhoneNavbarNavigation setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};
export default TopNavbarPhone;
