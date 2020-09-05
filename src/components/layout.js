import React from "react"
import Header from "./header"
import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { showHeader, children, featuredPost } = this.props
    let header

    if (showHeader) {
      header = <Header featuredPost={featuredPost}></Header>
    } else {
      header = false
    }
    return (
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <Nav></Nav>
        {header}
        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          {children}
        </main>
        <footer className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          © 2019 - {new Date().getFullYear()}{" "}
          <a
            className="text-red-600"
            href="https://www.twitter.com/phil_bennett"
          >
            Phil Bennett
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
