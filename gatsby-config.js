require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Dr. Pavan Pai`,
    description: `Neurologist and neurointervention specialist in Mira Road offering neurological, stroke and neurointerventional care.`,
    author: `Dr. Pavan Pai`,
    siteUrl: process.env.GATSBY_WEBSITE_URL || "https://drpavanpai.com/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.GATSBY_WPGRAPHQL_URL ||
          "https://app.drpavanpai.com/graphql",
        develop: {
          hardCacheMediaFiles: true, // ← cache images, stop re-fetching
          hardCacheData: false,
          nodeUpdateInterval: 300000, // ← only check for WP changes every 5 mins (default is 5000ms = 5 sec)
        },
        production: {
          hardCacheMediaFiles: false,
        },
      },
    },
  ],
}
