import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          facebookImage={
            post.frontmatter.featuredImage.childImageSharp.fixed.src
          }
        />
        <article>
          <header className="container mx-auto px-0 py-12 sm:px-0 lg:px-8 mt-8 max-w-screen-xl sm:mt-12 md:mt-10 xl:mt-12">
            <Link
              to={
                `/category/` +
                post.frontmatter.category
                  .match(
                    /[A-Z]{2,}(?=[A-Z][a-z0-9]*|\\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g
                  )
                  .filter(Boolean)
                  .map(x => x.toLowerCase())
                  .join("-")
              }
              className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base hover:underline"
            >
              {post.frontmatter.category}
            </Link>
            <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.description && (
              <div className="mt-3 text-base text-gray-500 max-w-2xl sm:mt-5 sm:text-xl lg:text-lg xl:text-xl ">
                {post.frontmatter.description}
              </div>
            )}
            <p className="text-sm leading-loose mb-8 text-gray-900">
              {post.frontmatter.date}
            </p>
          </header>
          <div className="prose my-3 mb-10 text-base text-gray-900 max-w-2xl mx-auto">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>

          <hr className="h-px mb-8 max-w-2xl mx-auto" />
          <footer className="max-w-2xl mx-auto">
            <Bio />
          </footer>
        </article>

        <nav>
          <ul className="flex flex-wrap justify-between mb-8 max-w-2xl mx-auto">
            <li>
              {previous && (
                <Link
                  className="text-red-600"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className="text-red-600" to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        category
        featuredImage {
          childImageSharp {
            fixed(width: 1200, height: 630, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
