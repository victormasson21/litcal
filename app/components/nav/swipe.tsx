"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { NavLinks } from "./nav";

const SWIPE_THRESHOLD = 100;

export const SwipeNavigation = ({ links }: { links: NavLinks }) => {
  const router = useRouter();
  const { left, right } = links;

  useEffect(() => {
    const getTarget = (distance: number): string => {
      if (distance > SWIPE_THRESHOLD) return left.url;
      if (distance < -SWIPE_THRESHOLD) return right.url;
      return "";
    };

    let startX = 0;
    const onTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const target = getTarget(event.changedTouches[0].clientX - startX);
      if (target) router.push(target);
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [router, left.url, right.url]);

  return null;
};
