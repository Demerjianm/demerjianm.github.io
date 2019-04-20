import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'
import linkedinIcon from '../../../static/features/linkedin.svg'
import emailIcon from '../../../static/features/email.svg'
import githubIcon from '../../../static/features/github.svg'
const Team = props => {
  const teams = props.data.allMarkdownRemark.edges
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Team</h1>
              <p>Our team of wizards.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => {
            return (
              <div
                key={edge.node.frontmatter.path}
                className="col-12 col-md-6 mb-1"
              >
                <div className="team card-two">
                  <div className="card-header">
                    <div className="card-header-left">
                      {edge.node.frontmatter.image && (
                        <div className="card-image">
                          <img
                            alt={edge.node.frontmatter.title}
                            className="img-fluid mb-2"
                            src={edge.node.frontmatter.image}
                          />
                        </div>
                      )}
                    </div>
                    <div className="card-right">
                      <h2 className="card-title">
                        {edge.node.frontmatter.title}
                      </h2>
                      <ul className="card-meta">
                        <li>
                          <strong>{edge.node.frontmatter.jobtitle}</strong>
                        </li>
                      </ul>

                      {edge.node.frontmatter.linkedinurl && (
                        <a
                          style={{ maxWidth: '35px' }}
                          target="_blank"
                          href={edge.node.frontmatter.linkedinurl}
                        >
                          <img
                            style={{ maxWidth: '35px' }}
                            src={linkedinIcon}
                            alt="linkedin icon"
                            height="20px"
                          />
                        </a>
                      )}
                      {edge.node.frontmatter.email && (
                        <a
                          style={{ maxWidth: '35px' }}
                          href={edge.node.frontmatter.email}
                          target="_blank"
                        >
                          <img
                            style={{ maxWidth: '35px', marginLeft: '-10px' }}
                            src={emailIcon}
                            alt="email icon"
                            height="20px"
                          />
                        </a>
                      )}
                      {edge.node.frontmatter.github && (
                        <a
                          style={{ maxWidth: '35px' }}
                          href={edge.node.frontmatter.github}
                          target="_blank"
                        >
                          <img
                            style={{ maxWidth: '35px', marginLeft: '-10px' }}
                            src={githubIcon}
                            alt="email icon"
                            height="20px"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    className="team-content"
                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            email
            github
          }
        }
      }
    }
  }
`

export default Team
