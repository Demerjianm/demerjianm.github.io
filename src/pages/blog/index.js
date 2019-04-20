import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'
import { formatPostDate, formatReadingTime } from '../../utils/helpers'
import Signup from '../../components/Signup.js'

const Servicess = props => {
  const servicess = props.data.allMarkdownRemark.edges
  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Articles</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {servicess.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-7 mb-1"
            >
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={'blog/' + edge.node.id}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <small>
                    {formatPostDate(edge.node.frontmatter.date, 'en')}
                    {` • ${formatReadingTime(edge.node.timeToRead)}`}
                  </small>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
            //   <article key={node.fields.slug}>
            //   <header>
            //     <h3
            //       style={{
            //         fontFamily: 'Montserrat, sans-serif',
            //         fontSize: rhythm(1),
            //         marginBottom: rhythm(1 / 4),
            //       }}
            //     >
            //       <Link
            //         style={{ boxShadow: 'none' }}
            //         to={'blog/' + edge.node.id}
            //         rel="bookmark"
            //       >
            //         {edge.node.frontmatter.title}
            //       </Link>
            //     </h3>
            //     <small>
            //       {formatPostDate(edge.node.frontmatter.date, 'en')}
            //       {` • ${formatReadingTime(edge.node.timeToRead)}`}
            //     </small>
            //   </header>
            //   {/* <p
            //     dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
            //   /> */}
            // </article>
          ))}
        </div>
        <div
          style={{
            margin: '90px 0 40px 0'
            // fontFamily: systemFont
          }}
        >
          <Signup />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ServicesQuer {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Servicess
