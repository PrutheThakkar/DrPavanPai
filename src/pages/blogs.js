import React, { useEffect } from "react";
import { graphql, Link } from "gatsby"
import InsideBanner from "../components/Inside-Banner";
import Layout from "../components/Layout-new";
import "../css/blog.css"

export const query = graphql`
  query MyQuery {
    allWpPost {
      nodes {
        title
        slug
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
`

const BlogListing = ({ data }) => {
  const posts = data.allWpPost.nodes

  useEffect(() => {
    document.body.classList.add("inside-page");
    return () => document.body.classList.remove("inside-page");
  }, []);

  return (
    <Layout>
      {/* ── Inside Banner ── */}
      <InsideBanner
        desktopImage="https://app.drpavanpai.com/wp-content/uploads/2026/03/inside-banner.jpg"
        mobileImage="https://app.drpavanpai.com/wp-content/uploads/2026/03/inside-banner.jpg"
        alt="Blog page banner"
        width={1440}
        height={500}
      />

      <section className="blog-section">
        <div className="blog-section__inner container">

          {/* Section Heading */}
          <div className="blog-section__header">
            <h1 className="blog-section__title">Blogs</h1>
            <p className="blog-section__subtitle">
              Insights on neurological health and advances in care
            </p>
          </div>

          {/* Cards Grid */}
          <div className="blog-grid">
            {posts.map((post) => {
              const img = post.featuredImage?.node

              return (
                <div key={post.slug} className="blog-card">
                  <div className="blog-card__image-wrap">
                    {img ? (
                      <img
                        src={img.mediaItemUrl}
                        alt={img.altText || post.title}
                        className="blog-card__image"
                      />
                    ) : (
                      <div className="blog-card__image-placeholder" />
                    )}
                  </div>

                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{post.title}</h3>
                     <div class="btn-wrap">
                    <Link to={`/blog/${post.slug}`} className="btn">
                      Read More
                    </Link>
                  </div>
                  </div>

              
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default BlogListing