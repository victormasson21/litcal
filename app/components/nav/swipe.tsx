"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { NavLinks } from "./nav";

const SWIPE_THRESHOLD = 100;

export const SwipeNavigation = ({ links }: { links: NavLinks }) => {
  const router = useRouter();
  const { left, right } = links;

  useEffect(() => {
    const getTarget = (distanceX: number, distanceY: number): string => {
      if (Math.abs(distanceX) < Math.abs(distanceY)) return "";
      if (distanceX > SWIPE_THRESHOLD) return left.url;
      if (distanceX < -SWIPE_THRESHOLD) return right.url;
      return "";
    };

    let start = { x: 0, y: 0 };
    const onTouchStart = (event: TouchEvent) => {
      const { clientX, clientY } = event.touches[0];
      start = { x: clientX, y: clientY };
    };
    const onTouchEnd = (event: TouchEvent) => {
      const { clientX, clientY } = event.changedTouches[0];
      const target = getTarget(clientX - start.x, clientY - start.y);
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
