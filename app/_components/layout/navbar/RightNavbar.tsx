"use client";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./navLinks";
import {
  handleNavigateWithKeys,
  handleNavigateWithScroll,
  handleNavigation,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
} from "@lib/handleNavigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const RightNavbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [touchStatus, setTouchStatus] = useState({
    isPulling: false,
    startPoint: 0,
    currentPoint: 0,
  });

  // Handle navigation on the phone
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      handleTouchStart(e, setTouchStatus);
    };

    const onTouchMove = (e: TouchEvent) => {
      handleTouchMove(e, setTouchStatus);
    };

    const onTouchEnd = () => {
      handleTouchEnd(touchStatus, setTouchStatus, push);
    };

    // Handle navigation on phone
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [touchStatus, push]);

  // Handle Navigation on the desktop
  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      handleNavigateWithKeys(e, push);
    };

    const onWheel = (e: WheelEvent) => {
      handleNavigateWithScroll(e, push);
    };

    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("wheel", onWheel);

    return () => {
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("wheel", onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleArrowNavigation(e: MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name as "UP" | "DOWN";

    handleNavigation(name, push);
  }

  return (
    <nav className="navigationContainer fixed right-2 top-1/2 z-[1000] hidden -translate-y-1/2 select-none flex-col items-center justify-center gap-2 md:right-6 md:flex">
      <button
        name="UP"
        aria-label="Previous Section"
        className="opacity-50 hover:opacity-100 disabled:opacity-30 relative hover-description after:content-['Previous']"
        disabled={pathname === "/"}
        onClick={(e) => handleArrowNavigation(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.1}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      {NAV_LINKS.map((link) => (
        <div
          key={link.pathname}
          data-name={link.name}
          className="flex hover-description after:right-[200%] after:content-[attr(data-name)] relative"
        >
          <Link
            aria-label={link.pathname}
            href={link.pathname}
            className={`relative h-[0.875rem] w-[0.875rem] overflow-hidden rounded-full duration-500 ${
              link.pathname === pathname
                ? "bg-white"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        </div>
      ))}

      <button
        name="DOWN"
        aria-label="Next Section"
        className={`opacity-50 hover:opacity-100 disabled:opacity-30 relative hover-description after:content-['Next']`}
        disabled={NAV_LINKS[NAV_LINKS.length - 1].pathname === pathname}
        onClick={(e) => handleArrowNavigation(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.1}
          stroke="white"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </nav>
  );
};
export default RightNavbar;
