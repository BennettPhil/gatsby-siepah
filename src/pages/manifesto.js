import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Manifesto extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout showHeader={false} title={siteTitle}>
        <SEO title="Manifesto" />
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-red-500 font-semibold tracking-wide uppercase">
              Software is Easy, People are Hard
            </p>
            <h1 className="mt-2 mb-12 text-4xl uppercase text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              Small Team Lead Manifesto
            </h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <blockquote>
              Leading a small team isn’t sexy. It’s just hard! I will always
              remember to:
            </blockquote>
            <h2>1.Push People, a little, then some more. </h2>
            <p className="text-xl text-gray-500 leading-8">
              Despite being the darling of motivational management speakers, the
              comfort zone is the death of growth. Pushing your team a little
              bit outside their comfort zone will reward them in the long run.
            </p>
            <h2>2. Create an environment of safety.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Most people don’t like pain of any form. Give your team space they
              can try and fail without significant pain, and it will give them
              space to grow.
            </p>
            <h2>3. Manage my relationships.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Work relationships are a fantastic tool but also a dangerous
              weapon. Be careful to balance your work relationships to allow
              your team to be fun and functional. However, be cautious of
              letting emotions interfere with your decisions.
            </p>
            <h2>4. Get great at giving feedback.</h2>
            <p className="text-xl text-gray-500 leading-8">
              If you want to see growth in yourself and others, then regular,
              honest, factual and timely feedback is essential. Get great at
              giving feedback.
            </p>
            <h2>5. Manage expectations.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Being able to set, review and meet expectations is the key to
              successful delivery. Without everyone being on the same page, you
              are destined to fail.
            </p>
            <h2>6. Your team will be mimic me, I will lead by example.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Your team will look up to you, and copy your strongest traits,
              good and bad. Keep in mind how you act and hold yourself to the
              same standards you expect from your team.
            </p>
            <h2>7. Arseholes are arseholes, however talented they are.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Arseholes are toxic. You should never tolerate toxic behaviour,
              under any circumstance. Deal with it in a timely, fair, factual
              manner.
            </p>
            <h2>8. Consider my biases.</h2>
            <p className="text-xl text-gray-500 leading-8">
              Everyone has biases. You will have formulated options of people
              and situations over your career. Developing stereotypes is hard to
              avoid. However, be aware of your own biases; make sure they don’t
              impact your choices and actions.
            </p>
            <h2>9. Balance my team.</h2>
            <p className="text-xl text-gray-500 leading-8">
              If your team consists of straight, white, middle-aged men, you
              will build great products for straight, white, middle-aged men.
              The more balanced your team is, the more balanced your product.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Manifesto

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
