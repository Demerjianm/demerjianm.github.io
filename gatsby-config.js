const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    title: 'Basepayroll',
    description: 'Baseline Payroll Site',
    contact: {
      email: 'info@baselinesoftware.io'
    },
    menuLinks: [
      {
        name: 'Features',
        link: '/features'
      },
      {
        name: 'Team',
        link: '/team'
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
}
