import { m } from "framer-motion";
import Link from "next/link";
import { socialMediaLinks } from "./socialMediaLinks";
import { useDimensions } from "@hooks/useDimensions";
import { useRef } from "react";
import { NAV_LINKS } from "./navLinks";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 49px) 42px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 49px) 42px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const PhoneNavbarNavigation = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <m.div
      initial="closed"
      animate="open"
      exit="closed"
      custom={height}
      ref={containerRef}
      className="fixed inset-0 flex justify-center items-center flex-col z-40"
    >
      <m.div className="absolute inset-0 bg-black" variants={sidebar} />

      <nav className="text-center text-3xl">
        <m.ul variants={containerVariants} className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <m.li
              onClick={() => setIsOpen(false)}
              key={link.pathname}
              variants={childrenVariants}
              className="relative"
            >
              <Link
                key={link.pathname}
                className="hover:text-cyan duration-200"
                aria-label={link.pathname}
                href={link.pathname}
              >
                {link.name}
              </Link>
            </m.li>
          ))}

          <div className="flex gap-6 mt-5">
            {socialMediaLinks.map((link) => (
              <m.li
                key={link.label}
                variants={childrenVariants}
                className="relative"
              >
                <Link href={link.url} target="_blank" aria-label={link.label}>
                  {link.icon(30)}
                </Link>
              </m.li>
            ))}
          </div>
        </m.ul>
      </nav>
    </m.div>
  );
};

export default PhoneNavbarNavigation;
