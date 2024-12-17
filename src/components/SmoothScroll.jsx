"use client";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lenis = useLenis();

  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time);
  //   }

  //   const rafId = requestAnimationFrame(update);

  //   return () => cancelAnimationFrame(rafId);
  // }, [pathname, searchParams, lenis]);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, wheelMultiplier: 1.5 }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
