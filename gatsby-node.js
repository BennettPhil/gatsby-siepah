const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const RSS = require(`rss`)
const fs = require(`fs-extra`)

const PAGINATION_OFFSET = 2

const wrapper = promise => {
  return promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })
}

const pluckCategories = edges => {
  return Object.keys(
    edges.reduce((acc, value) => {
      value.node.fields.categories.forEach(category => {
        if (!acc[category]) {
          acc[category] = category
        }
      })

      return acc
    }, {})
  )
}

const groupByCategory = edges => {
  return edges.reduce((acc, value) => {
    value.node.fields.categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(value)
    })
    return acc
  }, {})
}

const createCategoryPages = (createPage, edges) => {
  const categories = pluckCategories(edges)

  const posts = groupByCategory(edges)

  Object.keys(posts).forEach(category => {
    createPaginatedPages(
      createPage,
      posts[category],
      `/category/${category
        .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
        .filter(Boolean)
        .map(x => x.toLowerCase())
        .join("-")}`,
      { categories, activeCategory: category }
    )
  })
}

const createBlog = (createPage, edges) => {
  const categories = pluckCategories(edges)

  createPaginatedPages(createPage, edges, "/blog", { categories })
}

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                categories
              }
              frontmatter {
                title
                date
                description
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  // createBlog(actions.createPage, result.data.allMdx.edges)
  createCategoryPages(actions.createPage, result.data.allMdx.edges)

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `categories`,
      node,
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      name: "id",
      node,
      value: node.id,
    })
  }
}

exports.onPostBuild = async ({ graphql }, siteMetadata) => {
  const siteMeta = await graphql(`
    query PostBuild {
      site {
        siteMetadata {
          podcastOptions {
            title
            subtitle
            description
            summary
            podcastType
            siteUrl
            imageUrl
            feedUrl
            language
            copyright
            authorName
            ownerName
            ownerEmail
            managingEditor
            webMaster
            explicit
            publicationDate
            category1
            subCategory1
            category2
            category3
            timeToLive
            outputPath
          }
          author
          social {
            twitter
          }
        }
      }
    }
  `)
  const podcastOptions = siteMeta.data.site.siteMetadata.podcastOptions

  const feedOptions = {
    title: podcastOptions.title,
    description: podcastOptions.description,
    site_url: podcastOptions.siteUrl,
    feed_url: podcastOptions.feedUrl,
    image_url: podcastOptions.imageUrl,
    language: podcastOptions.language,
    copyright: podcastOptions.copyright,
    docs: `https://help.apple.com/itc/podcasts_connect/#/itcb54353390`,
    author: podcastOptions.authorName,
    managingEditor: podcastOptions.managingEditor,
    webMaster: podcastOptions.webMaster,
    categories: [
      podcastOptions.category1,
      podcastOptions.category2,
      podcastOptions.category3,
    ],
    pubDate: podcastOptions.publicationDate,
    ttl: podcastOptions.timeToLive,
    generator: `https://github.com/miller-productions/gatsby-plugin-podcast-feed-mdx`,
    custom_namespaces: {
      itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
      googleplay: "http://www.google.com/schemas/play-podcasts/1.0",
    },
    custom_elements: [
      {
        "itunes:title": podcastOptions.title,
      },
      {
        "itunes:subtitle": podcastOptions.subtitle,
      },
      {
        "itunes:summary": podcastOptions.summary,
      },
      {
        "itunes:type": podcastOptions.podcastType,
      },
      {
        "itunes:explicit": podcastOptions.explicit,
      },
      {
        "itunes:author": podcastOptions.authorName,
      },
      {
        "itunes:owner": [
          {
            "itunes:name": podcastOptions.ownerName,
          },
          {
            "itunes:email": podcastOptions.ownerEmail,
          },
        ],
      },
      {
        "itunes:image": {
          _attr: {
            href: podcastOptions.imageUrl,
          },
        },
      },
      {
        "itunes:category": [
          {
            _attr: {
              text: podcastOptions.category1,
            },
          },
        ],
      },
      {
        "itunes:category": [
          {
            _attr: {
              text: podcastOptions.category2,
            },
          },
        ],
      },
      {
        "itunes:category": [
          {
            _attr: {
              text: podcastOptions.category3,
            },
          },
        ],
      },
      {
        "googleplay:author": podcastOptions.authorName,
      },
      {
        "googleplay:description": podcastOptions.summary,
      },
      {
        "googleplay:explicit": podcastOptions.explicit,
      },
    ],
  } // create the rss feed

  const feed = new RSS(feedOptions) // get the options for the episodes

  const result = await wrapper(
    graphql(`
      query {
        podcastEpisodes: allMdx(
          filter: {
            frontmatter: {
              status: { eq: "published" }
              type: { eq: "podcast-episode" }
            }
          }
        ) {
          edges {
            node {
              excerpt
              id
              frontmatter {
                title
                slug
                guid
                subtitle
                url
                season
                episodeNumber
                episodeType
                publicationDate
                author
                size
                duration
                explicit
                categories
              }
            }
          }
        }
      }
    `)
  )
  const episodes = result.data.podcastEpisodes.edges // for each episode

  episodes.forEach(edge => {
    // gather the options
    const { excerpt } = edge.node
    const {
      title,
      slug,
      guid,
      subtitle,
      url,
      season,
      episodeNumber,
      episodeType,
      publicationDate,
      author,
      size,
      duration,
      explicit,
      categories,
    } = edge.node.frontmatter // add an episode item to the feed using the options

    feed.item({
      guid,
      title,
      date: publicationDate,
      description: excerpt,
      url: podcastOptions.siteUrl + slug,
      categories,
      author: author,
      custom_elements: [
        {
          "itunes:title": title,
        },
        {
          "itunes:subtitle": subtitle,
        },
        season && {
          "itunes:season": season,
        },
        episodeNumber && {
          "itunes:episode": episodeNumber,
        },
        {
          "itunes:duration": duration,
        },
        {
          "itunes:episodeType": episodeType,
        },
        {
          "itunes:explicit": explicit,
        },
        {
          "itunes:summary": excerpt,
        },
        {
          "itunes:author": author,
        },
        {
          "itunes:image": {
            _attr: {
              href: feedOptions.image_url,
            },
          },
        },
        {
          "googleplay:description": excerpt,
        },
        {
          "googleplay:explicit": explicit,
        },
      ],
      enclosure: {
        url,
        size,
        type: "audio/mpeg",
      },
    })
  }) // write the rss out to a file

  const publicPath = `./public`
  const outputPath = path.join(publicPath, podcastOptions.outputPath)
  const outputDir = path.dirname(outputPath)

  if (!(await fs.exists(outputDir))) {
    await fs.mkdirp(outputDir)
  }

  await fs.writeFile(outputPath, feed.xml())
}
