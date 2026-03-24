import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import InsideBanner from "../components/Inside-Banner";
import Layout from "../components/Layout-new";
import "../css/blog.css"

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`

const BlogDetail = ({ data }) => {
  const post = data.wpPost
  const img = post.featuredImage?.node

  useEffect(() => {
    document.body.classList.add("inside-page");
    return () => document.body.classList.remove("inside-page");
  }, []);

  return (
    <Layout>
      {/* ── Inside Banner ── */}
      <InsideBanner
        desktopImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
        mobileImage="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/inside-banner.jpg"
        alt="Blog page banner"
        width={1440}
        height={500}
      />

      <section>
        <div className="detail-wrapper">
          {/* Hero */}
          <div className="detail-hero">
            <div className="container">
              {/* {img && (
            <div className="detail-hero__image-wrap">
              <img
                src={img.mediaItemUrl}
                alt={img.altText || post.title}
                className="detail-hero__image"
              />
              <div className="detail-hero__image-overlay" />
            </div>
          )} */}
              <div className="detail-hero__content">
                <h1 className="detail-hero__title">{post.title}</h1>
                <div
                  className="detail-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogDetail