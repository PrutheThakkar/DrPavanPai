// src/pages/specialist.js

import React, { useState, useCallback, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import InsideBanner from "../components/Inside-Banner"
import Layout from "../components/Layout-new"
import SeoMeta from "../components/SeoMeta"
import { pageSeo } from "../data/seo"

const DESKTOP_COLS = 3
const MOBILE_COLS = 2

const getCols = () =>
  typeof window !== "undefined" && window.innerWidth <= 768
    ? MOBILE_COLS
    : DESKTOP_COLS

const getSafeId = (value = "") =>
  value
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

// ── Specialty Card ──
const SpecCard = ({ img, alt, label, index, isActive, onClick }) => (
  <article
    className={`sp-card${isActive ? " sp-card--active" : ""}`}
    style={{ animationDelay: `${0.04 + index * 0.07}s` }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onClick()
      }
    }}
  >
    <div className="sp-card__img-wrap">
      {img && <img src={img} alt={alt || label} loading="lazy" />}

      <div className="sp-card__overlay">
        <span className="sp-card__overlay-icon">{isActive ? "✕" : "+"}</span>
      </div>
    </div>

    <h3 className="sp-card__label">{label}</h3>
  </article>
)

// ── Detail Panel ──
const DetailPanel = ({ card, onClose, panelRef }) => (
  <div className="sp-detail-row" ref={panelRef}>
    <div className="sp-detail">
      <div className="sp-detail__inner">
        <button
          className="sp-detail__close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        {card?.categoryImage?.node?.mediaItemUrl && (
          <div className="sp-detail__img">
            <img
              src={card.categoryImage.node.mediaItemUrl}
              alt={card.categoryImage.node.altText || card.categoryTitle}
              loading="lazy"
            />
          </div>
        )}

        <div className="sp-detail__body">
          <h3 className="sp-detail__title">{card?.categoryTitle}</h3>

          {card?.categoryContent && (
            <p className="sp-detail__text">{card.categoryContent}</p>
          )}
        </div>
      </div>
    </div>
  </div>
)

// ── Main Page ──
const SpecialistPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null)
  const [activeCard, setActiveCard] = useState(null)
  const [cols, setCols] = useState(getCols)
  const panelRef = useRef(null)

  useEffect(() => {
    document.body.classList.add("inside-page")

    return () => {
      document.body.classList.remove("inside-page")
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      const next = getCols()

      setCols(prev => {
        if (prev !== next) {
          setActiveCard(null)
        }

        return next
      })
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const tabs =
    data?.allWpSpecialty?.edges?.map(({ node }) => ({
      id: getSafeId(node.title),
      label: node.title,
      cards: node.specialties?.categoryContent || [],
    })) || []

  const activeId = activeTab || tabs[0]?.id || ""
  const activeTabData = tabs.find(tab => tab.id === activeId) || tabs[0]

  const handleTabClick = useCallback(tabId => {
    setActiveTab(tabId)
    setActiveCard(null)
  }, [])

  const handleCardClick = useCallback((tabId, idx) => {
    setActiveCard(prev =>
      prev?.tabId === tabId && prev?.idx === idx ? null : { tabId, idx }
    )
  }, [])

  const handleClose = useCallback(() => {
    setActiveCard(null)
  }, [])

  return (
    <Layout>
      <>
        <InsideBanner
          desktopImage="https://app.drpavanpai.com/wp-content/uploads/2026/06/inside-header-img.webp"
          mobileImage="https://app.drpavanpai.com/wp-content/uploads/2026/06/inside-header-img.webp"
          alt="Specialties page banner"
          width={1440}
          height={500}
        />

        <section className="specialties-section" id="Areas-of-Clinical-focus">
          <div className="container">
            <h2>Expertise &amp; Specialties</h2>

            <p>
              Clear insights into neurological conditions and advanced treatment
              options
            </p>

            <div className="tab-section">
              {/* Desktop Tab Bar */}
              <nav
                className="sp-tab-timeline"
                role="tablist"
                aria-label="Specialty categories"
              >
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    className={`sp-tab-pill${
                      activeId === tab.id ? " active" : ""
                    }`}
                    aria-selected={activeId === tab.id}
                    aria-controls={`sp-tab-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Dropdown */}
              <div className="sp-mobile-tab-dropdown">
                <label
                  htmlFor="specialty-mobile-select"
                  className="sp-mobile-dropdown-label"
                >
                  Select Specialty
                </label>

                <div className="sp-mobile-select-wrap">
                  <select
                    id="specialty-mobile-select"
                    value={activeId}
                    onChange={e => handleTabClick(e.target.value)}
                    aria-label="Select specialty category"
                  >
                    {tabs.map(tab => (
                      <option key={tab.id} value={tab.id}>
                        {tab.label}
                      </option>
                    ))}
                  </select>

                  <span className="sp-mobile-select-arrow">⌄</span>
                </div>
              </div>

              {/* Active Panel */}
              <div
                key={activeId}
                className="sp-tab-panel active"
                id={`sp-tab-${activeId}`}
                role="tabpanel"
              >
                {activeTabData?.cards?.map((card, idx) => {
                  const isActive =
                    activeCard?.tabId === activeId && activeCard?.idx === idx

                  const lastIdx = (activeTabData?.cards?.length || 0) - 1

                  const rowEnd = activeCard
                    ? Math.ceil((activeCard.idx + 1) / cols) * cols - 1
                    : null

                  const injectAfter = activeCard
                    ? Math.min(rowEnd, lastIdx)
                    : null

                  return (
                    <React.Fragment key={card.categoryTitle || idx}>
                      <SpecCard
                        img={card.categoryImage?.node?.mediaItemUrl}
                        alt={
                          card.categoryImage?.node?.altText ||
                          card.categoryTitle
                        }
                        label={card.categoryTitle}
                        index={idx}
                        isActive={isActive}
                        onClick={() => handleCardClick(activeId, idx)}
                      />

                      {activeCard?.tabId === activeId &&
                        idx === injectAfter && (
                          <DetailPanel
                            card={activeTabData.cards[activeCard.idx]}
                            onClose={handleClose}
                            panelRef={panelRef}
                          />
                        )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}

export default SpecialistPage

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
`

export const Head = () => <SeoMeta {...pageSeo.specialties} />
