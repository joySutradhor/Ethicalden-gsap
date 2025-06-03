"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import SmoothScroll from "@/components/hooks/smooth-scroll";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import TransitionOverlay from "@/components/PageTransition/TransitionOverlay";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    const isFromHome = prevPath === "/";
    const isToHome = pathname === "/";
    const shouldSkip = isFromHome || isToHome;

    if (!shouldSkip) {
      setShowTransition(true);
      const timer = setTimeout(() => {
        setShowTransition(false);
        setPrevPath(pathname);
      }, 2000); 

      return () => clearTimeout(timer);
    } else {
      setPrevPath(pathname); 
    }
  }, [pathname]);

  return (
    <>
      {showTransition && <TransitionOverlay />}
      <CustomCursor />
      <SmoothScroll />
      {children}
    </>
  );
}
