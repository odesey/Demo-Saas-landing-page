"use client";
import { useEffect, useRef, Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
      <ReactLenis
        root
        options={{ lerp: 0.05, wheelMultiplier: 1.5 }}
        ref={lenisRef}
      >
        {children}
      </ReactLenis>
    </Suspense>
  );
};

export default SmoothScroll;
