import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const ogImage = data.site.siteMetadata.ogImage
    const posts = data.allMdx.edges

    return (
      <Layout showHeader={true} title={siteTitle} featuredPost={posts[0].node}>
        <SEO
          title="Software is Easy, People are Hard"
          facebookImage={ogImage}
        />
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {posts.slice(1, 7).map(({ node }) => {
            return <Post key={node.fields.slug} post={node}></Post>
          })}
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        ogImage
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 7) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 450, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
