import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

class Post extends React.Component {
  render() {
    const { post } = this.props

    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <Image
            className="w-full object-cover"
            fluid={featuredImgFluid}
            alt={post.frontmatter.title}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            {post.frontmatter.category && (
              <p className="text-md leading-5 font-medium text-red-600">
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
                  className="hover:underline"
                >
                  {post.frontmatter.category}
                </Link>
              </p>
            )}
            <Link to={post.fields.slug} className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {post.frontmatter.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {post.frontmatter.description}
              </p>
            </Link>
          </div>
          <div className="mt-6 flex items-center">
            <div>
              <p className="text-sm leading-5 font-medium text-gray-900">
                <Link to="/about" className="hover:underline">
                  Phil Bennett
                </Link>
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <time dateTime="2020-03-16">{post.frontmatter.date}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
