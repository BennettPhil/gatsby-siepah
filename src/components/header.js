import React from 'react'
import Post from './post'

class Header extends React.Component {
  render() {
    const { featuredPost } = this.props

    return (
      <div className="relative bg-white">
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="mt-4 mb-8 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1
                className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                Software is Easy,
                <br className="hidden md:inline"/>
                <span className="text-red-600"> People are Hard</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                The hardest part of leading teams in the tech industry is not the software, but the getting the best out
                of the people who write it. Software is Easy, People are Hard is a blog and podcast about the human
                aspect of leadership in the tech industry.
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Sign up to get notified of new blog posts and podcast episodes.
                </p>
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <input aria-label="Email"
                         className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                         placeholder="Enter your email"/>
                  <button type="submit"
                          className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm leading-5 text-gray-500">
                  We care about the protection of your data. Read our
                  <a href="/" className="font-medium text-gray-900 underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
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