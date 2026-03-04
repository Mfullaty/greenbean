"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapFadeUp(
  options: { delay?: number; duration?: number; stagger?: number; start?: string } = {}
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(".gsap-fade-up");
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 0.8,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [options.delay, options.duration, options.stagger, options.start]);

  return ref;
}

export function useGsapScaleIn(
  options: { delay?: number; duration?: number; stagger?: number } = {}
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(".gsap-scale-in");
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(elements, {
        scale: 1,
        opacity: 1,
        duration: options.duration ?? 0.7,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0.12,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [options.delay, options.duration, options.stagger]);

  return ref;
}

export function useGsapSlideIn(
  options: { delay?: number; duration?: number; stagger?: number } = {}
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const leftEls = ref.current.querySelectorAll(".gsap-slide-left");
    const rightEls = ref.current.querySelectorAll(".gsap-slide-right");

    const ctx = gsap.context(() => {
      if (leftEls.length) {
        gsap.to(leftEls, {
          x: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          delay: options.delay ?? 0,
          stagger: options.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (rightEls.length) {
        gsap.to(rightEls, {
          x: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          delay: options.delay ?? 0.1,
          stagger: options.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [options.delay, options.duration, options.stagger]);

  return ref;
}

// Hero-specific stagger animation
export function useGsapHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-stats",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
