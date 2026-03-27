import React from "react";
import Header from "./Header-new";
import Footer from "./Footer";

import "../css/common.css";
import "../css/home.css";
import "../css/inside.css";
import "../css/specialities.css";
import "../css/faq.css";
import "../css/contact.css";
import "../css/blog.css";
import "../css/uifixer.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;


