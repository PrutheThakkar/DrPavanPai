import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initHomeAnimation = () => {
  if (typeof window === "undefined") return;
  if (typeof document === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  const heroTl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  heroTl.fromTo(
    ".hero-section .left h1",
    {
      y: 70,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );

  heroTl.fromTo(
    ".hero-section .left p",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    },
    "-=0.55"
  );

  heroTl.fromTo(
    ".hero-section .btn-wrap",
    {
      y: 30,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
    },
    "-=0.45"
  );

  heroTl.fromTo(
    ".hero-section .brain-wrapper",
    {
      scale: 1.25,
      opacity: 0,
      rotate: 4,
      filter: "blur(10px)",
    },
    {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration: 1.3,
      ease: "power2.out",
    },
    "-=0.85"
  );

  gsap.fromTo(
    ".about-section .left .img",
    {
      clipPath: "inset(0 100% 0 0)",
    },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".about-section .left .img img",
    {
      scale: 1.18,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".about-section .right > *",
    {
      y: 45,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.16,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 72%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".Clinical-Focus .left h2, .Clinical-Focus .left > .about-para",
    {
      y: 45,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".Clinical-Focus",
        start: "top 75%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".Clinical-Focus ul li",
    {
      y: 45,
      opacity: 0,
      scale: 0.94,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".Clinical-Focus ul",
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".Clinical-Focus ul li .img-wrap img",
    {
      scale: 0.75,
      rotate: -6,
    },
    {
      scale: 1,
      rotate: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".Clinical-Focus ul",
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".patient-choose .Patients-Choose .left > .about-para",
    {
      y: 45,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".patient-choose",
        start: "top 75%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".patient-choose .Patients-Choose ul li",
    {
      x: -45,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".patient-choose .Patients-Choose ul",
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    ".patient-choose .Patients-Choose ul li .img-wrap img",
    {
      scale: 0.7,
      rotate: 8,
    },
    {
      scale: 1,
      rotate: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "back.out(1.6)",
      scrollTrigger: {
        trigger: ".patient-choose .Patients-Choose ul",
        start: "top 80%",
        once: true,
      },
    }
  );

  ScrollTrigger.refresh();
};