/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
const cleanNbsp = () => {
  if (typeof document === "undefined") return

  document.querySelectorAll("a, span, h1, h2, h3, h4, p, li").forEach((el) => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      el.textContent = el.textContent.replace(/\u00A0/g, " ").trim()
    }
  })
}

export const onInitialClientRender = () => {
  cleanNbsp()
}

export const onRouteUpdate = () => {
  cleanNbsp()
}