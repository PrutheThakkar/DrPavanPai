import React from "react"

const SITE_URL = "https://drpavanpai.com"
const DEFAULT_IMAGE =
  "https://app.drpavanpai.com/wp-content/uploads/2026/06/blog_banner-new.webp"

const absoluteUrl = (value, fallback = SITE_URL) => {
  if (!value) return fallback
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`
}

const SeoMeta = ({
  title,
  description,
  canonical,
  keywords = [],
  image,
  type = "website",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  schema,
  children,
}) => {
  const canonicalUrl = absoluteUrl(canonical)
  const imageUrl = absoluteUrl(image, DEFAULT_IMAGE)
  const keywordContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordContent ? (
        <meta name="keywords" content={keywordContent} />
      ) : null}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Dr. Pavan Pai" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
      {children}
    </>
  )
}

export default SeoMeta
