module.exports = {
  siteMetadata: {
    title: `Software is Easy, People are Hard`,
    author: `Phil Bennett`,
    description: `A blog and podcast about the human aspects of tech leadership.`,
    siteUrl: `https://softwareiseasypeoplearehard.netlify.app/`,
    social: {
      twitter: `phil_bennett`,
    },
    podcastOptions: {
      title: `Software is Easy, People Are Hard`,
      subtitle: `People management in the tech industry.`,
      description: `A blogcast about the people site of tech leadership.`,
      summary: `Software is Easy, People are Hard is a blogcast focusing on the people aspects of tech leadership. Every episode focuses on a topic related to getting the best out of your self, or your team. Including topics like empathetic leadership, expectation management and comfort zone.`,
      podcastType: `episodic`,
      siteUrl: `https://www.softwareiseasypeoplearehard.com`,
      imageUrl: `https://www.softwareiseasypeoplearehard.com/podcast.jpg`,
      feedUrl: `https://www.softwareiseasypeoplearehard.com/feed/podcast.xml`,
      language: `en`,
      copyright: `Copyright © 2020 Philip Bennett`,
      authorName: `Phil Bennett`,
      ownerName: `Phil Bennett`,
      ownerEmail: `me@phil.is`,
      managingEditor: `me@phil.is`,
      webMaster: `me@phil.is`,
      explicit: `no`,
      publicationDate: `Aug 28, 2020 10:00:00 GMT`,
      category1: `Business`,
      subCategory1: `Management`,
      category2: `Business`,
      category3: `Technology`,
      timeToLive: `60`,
      outputPath: `podcast.xml`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-99251003-2`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software is Easy, People are Hard`,
        short_name: `SIEPAH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF3B41`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
