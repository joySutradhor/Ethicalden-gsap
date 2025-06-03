"use client";

import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import SmoothScroll from "@/components/hooks/smooth-scroll";
import PageTransition from "./PageTransition/PageTransition";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [transitionTrigger, setTransitionTrigger] = useState(false);

  useEffect(() => {
    setTransitionTrigger(true);
    const timeout = setTimeout(() => setTransitionTrigger(false), 2000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <PageTransition trigger={transitionTrigger} />
      <CustomCursor />
      <SmoothScroll />
      {children}
    </>
  );
}
