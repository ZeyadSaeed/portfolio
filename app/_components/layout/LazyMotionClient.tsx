"use client";
import { domAnimation, LazyMotion } from "framer-motion";

const LazyMotionClient = ({ children }: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
export default LazyMotionClient;
