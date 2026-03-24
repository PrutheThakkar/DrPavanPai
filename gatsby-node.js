const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogDetailTemplate = path.resolve("src/templates/Blog-detail.js")

  result.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: blogDetailTemplate,
      context: {
        slug: post.slug,
      },
    })
  })
}