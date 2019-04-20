const path = require('path')

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            features: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/features/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            blog: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/blog/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.features.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })

        result.data.blog.edges.forEach((post, index) => {
          const allPosts = result.data.blog.edges
          const node = post.node

          const previous =
            index === allPosts.length ? null : allPosts[index + 1]
          const next = index === 0 ? null : allPosts[index - 1]

          const component = path.resolve('src/templates/blog-post.js')
          createPage({
            path: `blog/${node.id}`,
            component,
            context: {
              id: node.id,
              previous,
              next
            }
          })
        })

        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/testimonial.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })
        resolve()
      })
    )
  })
}
