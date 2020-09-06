import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const Blog = ({ data: { site, allMdx }, pageContext: { activeCategory } }) => {
  let posts

  if (activeCategory) {
    posts = allMdx.edges.filter(post =>
      post.node.frontmatter.categories.includes(activeCategory)
    )
  } else {
    posts = allMdx.edges
  }

  return (
    <Layout title={site.siteMetadata.title} showHeader={false}>
      <SEO title={activeCategory ? activeCategory : "All Posts"} />
      <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
        {activeCategory ? activeCategory : "All Posts"}
      </h1>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {posts.map(({ node: post }) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 450, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            slug
            categories
            category
          }
        }
      }
    }
  }
`
