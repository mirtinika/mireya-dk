import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Wrapper from './wrapper'
import styles from './footer.module.css'

export default ({ data }) => (
  <div className={styles.footer}>
    <Wrapper>
      <div className={styles.content}>
        <StaticQuery
          query={graphql`
            query FooterQuery {
              allContentfulFooter {
                edges {
                  node {
                    resources {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const [footer] = data.allContentfulFooter.edges
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: footer.node.resources.childMarkdownRemark.html,
                }}
              />
            )
          }}
        />
      </div>
    </Wrapper>
  </div>
)
