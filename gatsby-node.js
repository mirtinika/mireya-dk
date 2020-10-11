const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workPost = path.resolve('./src/templates/work-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProject.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/work/${post.node.slug}/`,
            component: workPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
