import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const CategoryItem = (postsByCategory, category) => {
  return (
    <div>
      <h1>
        {postsByCategory.length} post
        {postsByCategory.length === 1 ? "" : "s"} categoryged with {category}
      </h1>

      <ul>
        {postsByCategory.map(({ id, fields, excerpt }) => {
          return (
            <li key={id}>
              <h1>
                <Link to={fields.slug}>{fields.title}</Link>
              </h1>
              <p>{excerpt}</p>
            </li>
          )
        })}
      </ul>

      <hr />

      <Link to="/categories">All Categories</Link>
    </div>
  )
}

const CategoryList = postsByCategories => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {Object.keys(postsByCategories).map(key => (
          <li key={key}>
            <Link to={`/categories/${key}`}>{key}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Categories({ data: { site }, pageContext }) {
  return (
    <Layout title={site.siteMetadata.title} showHeader={false}>
      {pageContext.category ? (
        <CategoryItem {...pageContext} />
      ) : (
        <CategoryList {...pageContext} />
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
