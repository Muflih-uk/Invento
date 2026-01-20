"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactBackground from "./contact/ContactBackground";
import ContactAddress from "./contact/ContactAddress";
import ContactHeader from "./contact/ContactHeader";
import SocialLinks from "./contact/SocialLinks";
import ContactInfo from "./contact/ContactInfo";
import NavigationLinks from "./contact/NavigationLinks";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const leftNavLinks = [
  { text: "The team", href: "#" },
  { text: "Events", href: "#" },
  { text: "FAQ", href: "#" },
  { text: "Contact", href: "#" },
];

const rightNavLinks = [
  { text: "The team", href: "#" },
  { text: "Events", href: "#" },
  { text: "FAQ", href: "#" },
  { text: "Contact", href: "#" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for animated elements
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const bottomImageRef = useRef<HTMLImageElement>(null);
  const addressRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const socialLinksRefs = useRef<(HTMLAnchorElement | null)[]>(new Array(4).fill(null));
  const emailRef = useRef<HTMLParagraphElement>(null);
  const phoneRef = useRef<HTMLParagraphElement>(null);
  const leftNavTitleRef = useRef<HTMLParagraphElement>(null);
  const leftNavLinksRefs = useRef<(HTMLAnchorElement | null)[]>(new Array(4).fill(null));
  const rightNavTitleRef = useRef<HTMLParagraphElement>(null);
  const rightNavLinksRefs = useRef<(HTMLAnchorElement | null)[]>(new Array(4).fill(null));

  useEffect(() => {
    const section = sectionRef.current;
    const spacer = spacerRef.current;
    const container = containerRef.current;
    const bg = bgRef.current;
    const logo = logoRef.current;
    const bottomImg = bottomImageRef.current;
    const address = addressRef.current;
    const header = headerRef.current;
    const email = emailRef.current;
    const phone = phoneRef.current;
    const leftNavTitle = leftNavTitleRef.current;
    const rightNavTitle = rightNavTitleRef.current;

    if (!section || !spacer || !container) return;

    const ctx = gsap.context(() => {
      // Initial states with transforms - only set if elements exist
      if (bg) gsap.set(bg, { opacity: 1 });
      if (logo) gsap.set(logo, { opacity: 0, x: 300 });
      if (bottomImg) gsap.set(bottomImg, { opacity: 0, y: 200 });
      if (address) gsap.set(address, { opacity: 0, x: 300 });
      if (header) gsap.set(header, { opacity: 0, y: -150 });
      if (email) gsap.set(email, { opacity: 0, y: 50 });
      if (phone) gsap.set(phone, { opacity: 0, y: 50 });
      if (leftNavTitle) gsap.set(leftNavTitle, { opacity: 0, x: 300 });
      if (rightNavTitle) gsap.set(rightNavTitle, { opacity: 0, x: 300 });
      
      // Set initial states for social links
      socialLinksRefs.current.forEach((link) => {
        if (link) gsap.set(link, { opacity: 0, y: -150 });
      });
      
      // Set initial states for navigation links
      leftNavLinksRefs.current.forEach((link) => {
        if (link) gsap.set(link, { opacity: 0, x: 300 });
      });
      rightNavLinksRefs.current.forEach((link) => {
        if (link) gsap.set(link, { opacity: 0, x: 300 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacer,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          invalidateOnRefresh: true,
          onEnter: () => setIsVisible(true),
          onLeaveBack: () => setIsVisible(false),
        },
      });

      // Background appears immediately
      if (bg) tl.to(bg, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0);

      // Hold background-only for 1 second worth of scroll
      tl.to({}, { duration: 1 });

      // Logo slides in from right
      if (logo) tl.to(logo, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<");

      // Bottom image slides up
      if (bottomImg) tl.to(bottomImg, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");

      // Address slides in from right
      if (address) tl.to(address, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");

      // Header slides down
      if (header) tl.to(header, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");

      // Social links slide down with stagger
      socialLinksRefs.current.forEach((link, index) => {
        if (link) {
          if (index === 0) {
            tl.to(link, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");
          } else {
            tl.to(link, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, `+=${index * 0.1}`);
          }
        }
      });

      // Email and phone slide up
      if (email) tl.to(email, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");
      if (phone) tl.to(phone, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "<+=0.1");

      // Left nav title slides in
      if (leftNavTitle) tl.to(leftNavTitle, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");

      // Left nav links slide in with stagger
      leftNavLinksRefs.current.forEach((link, index) => {
        if (link) {
          if (index === 0) {
            tl.to(link, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");
          } else {
            tl.to(link, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, `+=${index * 0.1}`);
          }
        }
      });

      // Right nav title slides in
      if (rightNavTitle) tl.to(rightNavTitle, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");

      // Right nav links slide in with stagger
      rightNavLinksRefs.current.forEach((link, index) => {
        if (link) {
          if (index === 0) {
            tl.to(link, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2");
          } else {
            tl.to(link, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }, `+=${index * 0.1}`);
          }
        }
      });

      // Hold for viewing
      tl.to({}, { duration: 1.5 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={spacerRef} className="relative w-full h-[400vh] pointer-events-none" />

      <section
        ref={sectionRef}
        className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-white z-40"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div ref={containerRef} className="absolute w-full h-full">
          <ContactBackground 
            sectionRef={sectionRef} 
            showElements={isVisible}
            bgRef={bgRef}
            logoRef={logoRef}
            bottomImageRef={bottomImageRef}
          />
          <ContactAddress 
            showElements={isVisible}
            addressRef={addressRef}
          />
          <ContactHeader 
            showElements={isVisible}
            headerRef={headerRef}
          />
          <SocialLinks 
            showElements={isVisible}
            socialLinksRefs={socialLinksRefs}
          />
          <ContactInfo 
            showElements={isVisible}
            emailRef={emailRef}
            phoneRef={phoneRef}
          />
          <NavigationLinks
            showElements={isVisible}
            title="About us"
            titleRight="400px"
            titleTop="250px"
            links={leftNavLinks}
            linksRight="440px"
            linksTop="320"
            titleRef={leftNavTitleRef}
            linksRefs={leftNavLinksRefs}
          />
          <NavigationLinks
            showElements={isVisible}
            title="Useful links"
            titleRight="180px"
            titleTop="250px"
            links={rightNavLinks}
            linksRight="200px"
            linksTop="320"
            titleRef={rightNavTitleRef}
            linksRefs={rightNavLinksRefs}
          />
        </div>
      </section>
    </>
  );
}

