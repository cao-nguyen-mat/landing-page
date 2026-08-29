/*
 * CAO NGUYÊN MẬT — "Mùa Hoa Trắng" Editorial Journal theme
 * IntersectionObserver hook powering the slow "reveal like turning a page"
 * entrance animation (.reveal / .reveal-img classes in index.css).
 */
import { useEffect, useRef } from "react";

export function useRevealAll<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.querySelectorAll<HTMLElement>(".reveal, .reveal-img").forEach((el) => {
        el.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            window.setTimeout(() => el.classList.add("reveal-visible"), delay);
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    root.querySelectorAll(".reveal, .reveal-img").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
