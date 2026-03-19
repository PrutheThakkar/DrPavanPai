// src/pages/specialist.js

import React, { useState, useCallback, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import InsideBanner from "../components/Inside-Banner";
import Layout from "../components/Layout";

const DESKTOP_COLS = 3;
const MOBILE_COLS = 2;

const getCols = () =>
  typeof window !== "undefined" && window.innerWidth <= 768
    ? MOBILE_COLS
    : DESKTOP_COLS;

// ── Specialty Card ──
const SpecCard = ({ img, alt, label, index, isActive, onClick }) => (
  <article
    className={`sp-card${isActive ? " sp-card--active" : ""}`}
    style={{ animationDelay: `${0.04 + index * 0.07}s` }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
  >
    <div className="sp-card__img-wrap">
      <img src={img} alt={alt} loading="lazy" />
      <div className="sp-card__overlay">
        <span className="sp-card__overlay-icon">{isActive ? "✕" : "+"}</span>
      </div>
    </div>
    <h3 className="sp-card__label">{label}</h3>
  </article>
);

// ── Detail Panel ──
const DetailPanel = ({ card, onClose, panelRef }) => (
  <div className="sp-detail-row" ref={panelRef}>
    <div className="sp-detail">
      <div className="sp-detail__inner">
        <button
          className="sp-detail__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="sp-detail__img">
          <img
            src={card.categoryImage?.node?.mediaItemUrl}
            alt={card.categoryImage?.node?.altText || card.categoryTitle}
          />
        </div>
        <div className="sp-detail__body">
          <h3 className="sp-detail__title">{card.categoryTitle}</h3>
          <p className="sp-detail__text">{card.categoryContent}</p>
        </div>
      </div>
    </div>
  </div>
);

// ── Main Page ──
const SpecialistPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeCard, setActiveCard] = useState(null); // { tabId, idx }
  const [cols, setCols] = useState(getCols);
  const panelRef = useRef(null);

  // body class
  useEffect(() => {
    document.body.classList.add("inside-page");
    return () => document.body.classList.remove("inside-page");
  }, []);

  // update cols on resize
  useEffect(() => {
    const onResize = () => {
      const next = getCols();
      setCols((prev) => {
        if (prev !== next) { setActiveCard(null); }
        return next;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
    setActiveCard(null);
  }, []);

  const handleCardClick = useCallback((tabId, idx) => {
    setActiveCard((prev) =>
      prev?.tabId === tabId && prev?.idx === idx ? null : { tabId, idx }
    );
  }, []);

  const handleClose = useCallback(() => setActiveCard(null), []);

  // Build tabs
  const tabs = data?.allWpSpecialty?.edges?.map(({ node }) => ({
    id: node.title,
    label: node.title,
    cards: node.specialties?.categoryContent || [],
  })) || [];

  const activeId = activeTab ?? tabs[0]?.id;
  const activeTabData = tabs.find((t) => t.id === activeId);

  return (
    <Layout>
      {/* ── Inside Banner ── */}
      <InsideBanner
        desktopImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
        mobileImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
        alt="Specialties page banner"
        width={1440}
        height={500}
      />

      {/* ── Specialties Tabs Section ── */}
      <section className="specialties-section" id="Areas-of-Clinical-focus">
        <div className="container">
          <h2>Expertise & Specialties</h2>
          <p>Clear insights into neurological conditions and advanced treatment options</p>
          <div className="tab-section">

            {/* Tab Bar */}
            <nav className="sp-tab-bar" role="tablist" aria-label="Specialty categories">
              {tabs.map((tab) => (
                <h3
                  key={tab.id}
                  role="tab"
                  className={`sp-tab-btn${activeId === tab.id ? " active" : ""}`}
                  aria-selected={activeId === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </h3>
              ))}
            </nav>

            {/* Active Panel */}
            <div
              key={activeId}
              className="sp-tab-panel active"
              id={`sp-tab-${activeId}`}
              role="tabpanel"
            >
              {activeTabData?.cards.map((card, idx) => {
                const isActive =
                  activeCard?.tabId === activeId && activeCard?.idx === idx;

                // which index to inject detail panel after
                const lastIdx = (activeTabData?.cards.length ?? 0) - 1;
                const rowEnd = activeCard
                  ? Math.ceil((activeCard.idx + 1) / cols) * cols - 1
                  : null;
                const injectAfter = activeCard
                  ? Math.min(rowEnd, lastIdx)
                  : null;

                return (
                  <React.Fragment key={card.categoryTitle || idx}>
                    <SpecCard
                      img={card.categoryImage?.node?.mediaItemUrl}
                      alt={card.categoryImage?.node?.altText || card.categoryTitle}
                      label={card.categoryTitle}
                      index={idx}
                      isActive={isActive}
                      onClick={() => handleCardClick(activeId, idx)}
                    />

                    {/* Inject detail panel after the correct row */}
                    {activeCard?.tabId === activeId &&
                      idx === injectAfter && (
                        <DetailPanel
                          card={activeTabData.cards[activeCard.idx]}
                          onClose={handleClose}
                          panelRef={panelRef}
                        />
                      )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── Styles ── */}


    </Layout>
  );
};

export default SpecialistPage;

// ── GraphQL Query ──
export const query = graphql`
  query SpecialistPageQuery {
    allWpSpecialty(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          specialties {
            categoryContent {
              categoryContent
              categoryTitle
              categoryImage {
                node {
                  altText
                  mediaItemUrl
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>Specialties | Dr. Pavan Pai</title>
    <meta
      name="description"
      content="Explore Dr. Pavan Pai's neurology specialties including General Neurology, Stroke, Movement Disorders, and Neuroimmunology."
    />
  </>
);