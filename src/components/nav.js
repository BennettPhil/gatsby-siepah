import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import {useState} from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const data = useStaticQuery(graphql`
    query NavQuery {
      icon: file(absolutePath: { regex: "/icon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
    <>
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" aria-label="Home">
              <Image
                className="mr-4 mb-0"
                fluid={data.icon.childImageSharp.fluid}
                alt="Software is Easy, People are Hard"
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 z-20 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu" aria-label="Main menu" aria-haspopup="true"
              onClick={toggleMenu}>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10">
            <a href="/"
               className="font-medium text-gray-500 hover:text-red-500 transition duration-150 ease-in-out">Home</a>
            <a href="/manifesto"
               className="ml-10 font-medium text-gray-500 hover:text-red-500 transition duration-150 ease-in-out">Manifesto</a>
            <a href="/about"
               className="ml-10 font-medium text-gray-500 hover:text-red-500 transition duration-150 ease-in-out">About
              Me</a>
            <a href="/posts"
               className="ml-10 font-medium text-gray-500 hover:text-red-500 transition duration-150 ease-in-out">Blog</a>
            <a href="/podcast"
               className="ml-10 font-medium text-gray-500 hover:text-red-500 transition duration-150 ease-in-out">Podcast</a>
          </div>
        </div>
        <div className="hidden md:block text-right">
      <span className="inline-flex rounded-md shadow-md">
        <span className="inline-flex rounded-md shadow-xs">
          <a href="/"
             className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red transition duration-150 ease-in-out">
            Log in
          </a>
        </span>
      </span>
        </div>
      </nav>
      <div className={isMenuOpen ? "opacity-100 scale-100 absolute top-0 inset-x-0 z-40 p-2 transition transform origin-top-right md:hidden": "opacity-0 scale-95 absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"}>
      <div className="rounded-lg shadow-md">
        <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu"
             aria-orientation="vertical" aria-labelledby="main-menu">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <a href="/" aria-label="Home">
                <Image
                  className="mr-4 mb-0"
                  fluid={data.icon.childImageSharp.fluid}
                  alt="Software is Easy, People are Hard"
                />
              </a>
            </div>
            <div className="-mr-2">
              <button type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu" onClick={toggleMenu}>
                <svg className="h-6 w-6" stroke="currentColor" fill="none"
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            <a href="/"
               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
               role="menuitem">Home</a>
            <a href="/manifesto"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
               role="menuitem">Manifesto</a>
            <a href="/about"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
               role="menuitem">About Me</a>
            <a href="/posts"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
               role="menuitem">Blog</a>
            <a href="/podcast"
               className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
               role="menuitem">Podcast</a>
          </div>
          <div>
            <a href="/"
               className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out"
               role="menuitem">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Nav