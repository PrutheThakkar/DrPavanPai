import React, { useEffect } from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout-new"
import InsideBanner from "../components/Inside-Banner";
import AppointmentForm from "../components/AppointmentForm";

const ExpertisePage = ({ data }) => {
  const pageData = data?.allWpPage?.nodes?.[0]?.expertisePage
  const expertiseList = data?.allWpExpertise?.edges?.slice().reverse() || []

    // body class
    useEffect(() => {
      document.body.classList.add("inside-page");
      return () => document.body.classList.remove("inside-page");
    }, []);

  return (
    <Layout>
    <InsideBanner
          desktopImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
          mobileImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
          alt="FAQ page banner"
          width={1440}
          height={500}
        />

    <section className="Contact-Section" id="ContactForm">
      <h2>Enquiry Form</h2>
          <div className="container">
            <AppointmentForm />
          </div>
        </section>

    </Layout>
  )
}

export default ExpertisePage

