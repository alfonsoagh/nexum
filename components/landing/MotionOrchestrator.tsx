"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionOrchestrator() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!nodes.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    nodes.forEach((node, index) => {
      node.classList.remove("is-visible");
      const delay = Number(node.dataset.revealDelay ?? index * 35);
      node.style.setProperty("--reveal-delay", `${Math.min(delay, 420)}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
