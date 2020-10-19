import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Wrapper from './wrapper'
import styles from './footer.module.css'

export default ({ data }) => (
  <div className={styles.footer}>
    <Wrapper>
      <div>
        <StaticQuery
          query={graphql`
            query FooterQuery {
              allContentfulFooter {
                edges {
                  node {
                    buildWith
                  }
                }
              }
            }
          `}
          render={(data) => {
            const [footer] = data.allContentfulFooter.edges
            return footer.node.buildWith.map((item) => <p>{item}</p>)
          }}
        />
      </div>
    </Wrapper>
  </div>
)
