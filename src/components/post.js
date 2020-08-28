import React from 'react'
import Image from "gatsby-image"

class Post extends React.Component {
  render () {
    const { post } = this.props

    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <Image className="h-48 w-full object-cover" fluid={featuredImgFluid} alt={post.frontmatter.title}/>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm leading-5 font-medium text-red-500">
              <a href={post.fields.slug} className="hover:underline">
                Latest Post
              </a>
            </p>
            <a href={post.fields.slug} className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {post.frontmatter.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {post.excerpt}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div>
              <p className="text-sm leading-5 font-medium text-gray-900">
                <a href="/about" className="hover:underline">
                  Phil Bennett
                </a>
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <time dateTime="2020-03-16">
                  {post.frontmatter.date}
                </time>
                <span className="mx-1">
                  &middot;
                </span>
                <span>
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
