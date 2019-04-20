import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const SignupApp = props => (
  <div className="call">
    <div className="call-box-top">
      {/* <div className="call-phone">
        <strong>Phone: </strong>
        {props.data.site.siteMetadata.contact.phone}
      </div> */}
      <div className="call-email">
        <h4>Try it for free and let us know </h4>
        {/* <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a> */}
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="https://dev.basepayroll.com/signup" className="button">
          Signup
        </a>
      </div>
    )}
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <SignupApp button={props.button} data={data} />}
  />
)
