import React, { useEffect, useState } from "react";
import Header from "./Header-new";
import Footer from "./Footer";
import logo from "../images/logo-new-1-new.svg";

import "../css/common.css";
import "../css/home.css";
import "../css/inside.css";
import "../css/specialities.css";
import "../css/faq.css";
import "../css/contact.css";
import "../css/blog.css";
import "../css/about.css";
import "../css/uifixer.css";
import "../css/ui-updated.css";

const cleanNbspInPage = () => {
  if (typeof document === "undefined") return;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;

        if (!parent) return NodeFilter.FILTER_REJECT;

        const blockedTags = [
          "SCRIPT",
          "STYLE",
          "NOSCRIPT",
          "TEXTAREA",
          "INPUT",
          "CODE",
          "PRE",
        ];

        if (blockedTags.includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const oldValue = node.nodeValue;

    const newValue = oldValue
      .replace(/\u00A0/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&#160;/g, " ")
      .replace(/\s{2,}/g, " ");

    if (oldValue !== newValue) {
      node.nodeValue = newValue;
    }
  });
};

const Layout = ({ children, showPreloader = false }) => {
  const [isLoaded, setIsLoaded] = useState(!showPreloader);
  const [hidePreloader, setHidePreloader] = useState(!showPreloader);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cleanTimer;

    const scheduleClean = () => {
      clearTimeout(cleanTimer);

      cleanTimer = setTimeout(() => {
        cleanNbspInPage();
      }, 120);
    };

    scheduleClean();

    const observer = new MutationObserver(() => {
      scheduleClean();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    window.addEventListener("preloaderFinished", scheduleClean);

    return () => {
      clearTimeout(cleanTimer);
      observer.disconnect();
      window.removeEventListener("preloaderFinished", scheduleClean);
    };
  }, []);

  useEffect(() => {
    if (!showPreloader) {
      document.body.classList.add("preloader-finished");
      return;
    }

    if (typeof window === "undefined") return;

    let isFinished = false;

    document.body.classList.remove("preloader-finished");

    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;

      setTimeout(() => {
        setIsLoaded(true);

        setTimeout(() => {
          setHidePreloader(true);

          document.body.classList.add("preloader-finished");
          window.dispatchEvent(new Event("preloaderFinished"));
        }, 600);
      }, 700);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 2500);

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(fallbackTimer);
    };
  }, [showPreloader]);

  return (
    <>
      {showPreloader && !hidePreloader && (
        <div className={`site-preloader ${isLoaded ? "is-loaded" : ""}`}>
          <div className="preloader-bg-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preloader-inner">
            <div className="preloader-logo-wrap">
              <img src={logo} alt="Dr. Pavan Pai" className="preloader-logo" />

              <span className="orbit-dot dot-1"></span>
              <span className="orbit-dot dot-2"></span>
              <span className="orbit-dot dot-3"></span>
              <span className="orbit-dot dot-4"></span>
            </div>

            <div className="preloader-text">Loading care with precision</div>

            <div className="preloader-line">
              <span></span>
            </div>
          </div>
        </div>
      )}

      <div className={`site-wrapper ${isLoaded ? "site-loaded" : ""}`}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;