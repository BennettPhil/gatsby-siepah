import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout showHeader={false} title={siteTitle}>
        <SEO title="About Me" />
        <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
          About Me
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="relative pb-3 lg:pb-0">
                  <Image
                    fluid={data.avatar.childImageSharp.fluid}
                    alt="Phil Bennett"
                    className="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                  />
                </div>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg leading-7 text-gray-500 mb-5">
                Hi! I’m Phil Bennett.
              </p>
            </div>
            <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                I’m an Engineering Manager at{" "}
                <a href="https://klarna.com" className="text-red-500">
                  Klarna
                </a>{" "}
                who still (just about) maintains the ability to fire up a coding
                environment and create a pull request.
              </p>
              <p>
                I don’t have any fancy titles, and I don’t have a list of
                big-name companies with ‘ex’ in front of them on my twitter
                profile. I have a{" "}
                <a href="https://github.com/BennettPhil">GitHub</a> full of side
                hustles that will never see the light of day — ranging from an
                Artificial Intelligence chatbot game to a website that bothered
                people into voting in the recent UK General elections.{" "}
              </p>
              <p>
                What I do have is nearly 20 years of experience in what I see as
                the most complicated part of Software Engineering; dealing with
                people.
              </p>
              <p>
                It’s tough to find guidance on being a middle manager in
                software development. It’s not sexy. No one writes books about
                it. So I wanted to share my thoughts and opinions in a raw
                format and maybe see if I can wrangle them into some cohesive
                articles.{" "}
              </p>
              <p>
                If you have anything, you want to feedback about the content of
                this blog, or have anything else you want to talk to be about,
                the best way to contact me on twitter{" "}
                <a href="https://twitter.com/phil_bennett">@phil_bennett</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 450, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
