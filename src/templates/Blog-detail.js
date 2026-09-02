import React, { useEffect } from "react"
import { graphql } from "gatsby"
import InsideBanner from "../components/Inside-Banner"
import Layout from "../components/Layout-new"
import "../css/blog.css"
import SeoMeta from "../components/SeoMeta"
import { getBlogSeo } from "../data/seo"

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      slug
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }

    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
      }
    }
  }
`

const normalizeSlug = (slug = "") => {
  return slug
    .toString()
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .pop()
}

// Optional exact slug mapping
// Add actual blog slugs here later if needed
const blogBannerImages = {
  // example:
  // "stroke-treatment": {
  //   desktop: "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_3_banner-new-desk.webp",
  //   mobile: "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_3_banner-new-desk.webp",
  // },
}

// Automatic banner order
const blogBannerList = [
  {
    desktop:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_3_banner-new-desk.webp",
    mobile:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_3_banner-new-desk.webp",
  },
  {
    desktop:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_2_banner-new-desk.webp",
    mobile:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_2_banner-new-desk.webp",
  },
  {
    desktop:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_1_banner-new-desk.webp",
    mobile:
      "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_1_banner-new-desk.webp",
  },
]

const BlogDetail = ({ data }) => {
  const post = data?.wpPost
  const img = post?.featuredImage?.node
  const allPosts = data?.allWpPost?.nodes || []

  useEffect(() => {
    document.body.classList.add("inside-page")
    return () => document.body.classList.remove("inside-page")
  }, [])

  if (!post) return null

  const fallbackBanner =
    "https://app.drpavanpai.com/wp-content/uploads/2026/03/inside-banner.jpg"

  const currentSlug = normalizeSlug(post.slug)

  const currentPostIndex = allPosts.findIndex(
    item => normalizeSlug(item.slug) === currentSlug
  )

  const exactSlugBanner = blogBannerImages[currentSlug]

  const orderBanner =
    currentPostIndex >= 0
      ? blogBannerList[currentPostIndex % blogBannerList.length]
      : null

  const selectedBanner = exactSlugBanner || orderBanner

  const desktopBanner =
    selectedBanner?.desktop || img?.mediaItemUrl || fallbackBanner

  const mobileBanner =
    selectedBanner?.mobile ||
    selectedBanner?.desktop ||
    img?.mediaItemUrl ||
    fallbackBanner

  return (
    <Layout>
      <InsideBanner
        desktopImage={desktopBanner}
        mobileImage={mobileBanner}
        alt={img?.altText || post.title || "Blog page banner"}
        width={1440}
        height={500}
      />

      <section>
        <div className="detail-wrapper">
          <div className="detail-hero">
            <div className="container">
              <div className="detail-hero__content">
                <h2 className="detail-hero__title">{post.title}</h2>

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

export const Head = ({ data }) => {
  const post = data?.wpPost
  if (!post) return null
  const seo = getBlogSeo({
    title: post.title,
    slug: post.slug,
    description: post.content,
    image: post.featuredImage?.node?.mediaItemUrl,
  })
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seo.title,
    description: seo.description,
    url: seo.canonical,
    image: seo.image,
    author: { "@type": "Person", name: "Dr. Pavan Pai" },
  }
  return <SeoMeta {...seo} schema={schema} />
}
