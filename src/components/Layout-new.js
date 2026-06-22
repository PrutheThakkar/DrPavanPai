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

const Layout = ({ children, showPreloader = false }) => {
  const [isLoaded, setIsLoaded] = useState(!showPreloader);
  const [hidePreloader, setHidePreloader] = useState(!showPreloader);

  useEffect(() => {
    if (!showPreloader) return;
    if (typeof window === "undefined") return;

    let isFinished = false;

    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;

      setTimeout(() => {
        setIsLoaded(true);

        setTimeout(() => {
          setHidePreloader(true);

          document.body.classList.add("preloader-finished");
          window.dispatchEvent(new Event("preloaderFinished"));
        }, 700);
      }, 1200);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 4500);

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