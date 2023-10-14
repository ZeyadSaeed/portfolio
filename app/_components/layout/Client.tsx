"use client";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { PropsWithChildren, ReactNode, useContext, useRef } from "react";
import { AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Client({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <m.div key={pathname} initial="hidden" animate="visible" exit="exit">
        <FrozenRouter>{children}</FrozenRouter>
      </m.div>
    </AnimatePresence>
  );
}
