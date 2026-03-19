
/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Pavan Pai`,
    description: `Gatsby + WordPress (WPGraphQL) site`,
    author: `@Pavan Pai`,
    siteUrl:
      process.env.GATSBY_WEBSITE_URL ||
      "https://drpavanpai.studiosentientdemo.com/",
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
          "https://drpavanpai.studiosentientdemo.com/graphql",
      },
    },
  ],
}


// https://pruthe.app.n8n.cloud/webhook-test/e804e415-42cd-45f4-8d91-6bd2adc1b6ad