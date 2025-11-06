/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemarkFrontmatterEvents {
      title: String
      facebookLink: String
      type: String
      dayOfWeek: String
      dayNumber: String
      month: String
      from: String
      to: String
    }
  `

  createTypes(typeDefs)
}
