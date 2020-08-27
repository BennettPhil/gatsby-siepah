import React from "react"
import { Link } from "gatsby"
import Header from './header'
import Nav from './nav'

class Layout extends React.Component {
  render() {
    const { location, title, children, featuredPost } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Header featuredPost={featuredPost}></Header>
      )
    } else {
      header = (
        <h3 className="text-2xl font-sans font-black mt-0">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <Nav></Nav>
        {header}
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">{children}</main>
        <footer className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          © 2019 - {new Date().getFullYear()} <a className="text-red-600" href="https://www.twitter.com/phil_bennett">Phil Bennett</a>
        </footer>
      </div>
    )
  }
}

export default Layout
