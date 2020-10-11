import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Layout location={this.props.location}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query WorkIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject(sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          title
          slug
          technologies
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: FILL, quality:100) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
