import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../layouts/index'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import Signup from '../components/Signup.js'
const Service = props => {
  const { data } = props
  const { previous, next } = props.pageContext

  const { title, date } = data.markdownRemark.frontmatter
  const { html, timeToRead } = data.markdownRemark
  return (
    <Layout bodyClass="page-service">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <h1 className="title">{title}</h1>
                <p
                  style={{
                    // ...scale(-1 / 5),
                    display: 'block'
                    // marginBottom: rhythm(1),
                    // marginTop: rhythm(-4 / 5)
                  }}
                >
                  {formatPostDate(date, 'en')}
                  {` • ${formatReadingTime(timeToRead)}`}
                </p>

                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
              <div
                style={{
                  margin: '90px 0 40px 0'
                  // fontFamily: systemFont
                }}
              >
                <Signup />
              </div>
              {/* <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif'
                  // marginTop: rhythm(0.25)
                }}
              >
                <Link
                  style={{
                    boxShadow: 'none',
                    textDecoration: 'none'
                  }}
                  to={'/'}
                >
                  Baseline
                </Link>
              </h3> */}
              <nav>
                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={`blog/${previous.node.id}`} rel="prev">
                        ← {previous.node.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={`blog/${next.node.id}`} rel="next">
                        {next.node.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
      html
    }
  }
`

export default Service
