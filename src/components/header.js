import React from "react"
import Post from "./post"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    const { featuredPost } = this.props

    return (
      <div className="relative bg-white">
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="mt-4 mb-8 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Software is Easy,
                <br className="hidden md:inline" />
                <span className="text-red-600"> People are Hard</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                The hardest part of leading teams in the tech industry is not
                the software, but the getting the best out of the people who
                write it. Software is Easy, People are Hard is a blog and
                podcast about the human aspect of leadership in the tech
                industry.
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Categories:
                  <Link
                    className="text-red-500 underline"
                    to="/categoy/push-people-a-little-then-some-more"
                  >
                    Push people a little, then some more
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/cateogry/create-an-environment-of-safety"
                  >
                    Create an environment of safety
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/manage-your-relationships"
                  >
                    Manage your relationships
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/get-great-at-giving-feedback"
                  >
                    Get great at giving feedback
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/manage-expectations"
                  >
                    Manage expectations
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/your-team-will-mimic-you-lead-by-example"
                  >
                    Your team will mimic you, lead by example
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/arseholes-are-arseholes-however-talented-they-are"
                  >
                    Arseholes are arseholes, however talented they are
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/consider-your-biases"
                  >
                    Consider your biases
                  </Link>
                  ,&nbsp;
                  <Link
                    className="text-red-500 underline"
                    to="/category/balance-your-team"
                  >
                    Balance your team
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                <Post post={featuredPost}></Post>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Header
