// src/pages/faq.js

import React, { useEffect } from "react";
import { graphql } from "gatsby";
import InsideBanner from "../components/Inside-Banner";
import Layout from "../components/Layout-new";

// ── Single FAQ Item ──
const FaqItem = ({ question, answer }) => (
  <li className="faq-item faq-item--open">
    <div className="faq-question">
      <span>{question}</span>
    </div>
    <div className="faq-answer">
      <p>{answer}</p>
    </div>
  </li>
);

// ── Main Page ──
const FaqPage = ({ data }) => {

  // body class
  useEffect(() => {
    document.body.classList.add("inside-page");
    return () => document.body.classList.remove("inside-page");
  }, []);

  // Flatten all FAQ items from all edges
  const faqs = data?.allWpFaq?.edges?.flatMap(({ node }) =>
    node.faqPage?.faqSection || []
  ) || [];

  return (
    <Layout>
      <>
        {/* ── Inside Banner ── */}
        <InsideBanner
          desktopImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
          mobileImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
          alt="FAQ page banner"
          width={1440}
          height={500}
        />

        {/* ── FAQ Section ── */}
        <section className="faq-section">
          <div className="container">

            <div className="faq-header">
              <h2 className="faq-heading">Frequently Asked Questions</h2>
              <p>Answers to help you feel informed and confident</p>
            </div>

            {faqs.length > 0 ? (
              <ul className="faq-list">
                {faqs.map((faq, idx) => (
                  <FaqItem
                    key={faq.question || idx}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </ul>
            ) : (
              <p className="faq-empty">No FAQs found.</p>
            )}

          </div>
        </section>
      </>
    </Layout>
  );
};

export default FaqPage;

// ── GraphQL Query ──
export const query = graphql`
  query FaqPageQuery {
    allWpFaq {
      edges {
        node {
          faqPage {
            faqSection {
              question
              answer
            }
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>FAQ | Dr. Pavan Pai</title>
    <meta
      name="description"
      content="Frequently asked questions about neurology care, treatments, and consultations with Dr. Pavan Pai."
    />
  </>
);