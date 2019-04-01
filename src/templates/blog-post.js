import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../layouts/index'
import { formatPostDate, formatReadingTime } from '../utils/helpers'

const Service = props => {
  console.log(props)
  const { data } = props
  const { previous, next } = props.pageContext
  console.log(previous, next)
  const { title, date } = data.markdownRemark.frontmatter
  const { html, timeToRead } = data.markdownRemark
  return (
    <Layout bodyClass="page-service">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-6">
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
