// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config
const collections = [
  {
    query: `{
      allContentfulPosts {
        edges {
          node {
            id
            postSlug
            path
            postTitle
            publishDate
            postDescription
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allContentfulPosts.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME, // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.postTitle,
        slug: item.postSlug,
        excerpt: item.postDescription,
        modified: String(item.publishDate),
      }
    }, // optional
    matchFields: ['excerpt', 'title'], // Array<String> required with PartialUpdates
  },
];

module.exports = {
  siteName: '4unaturalistic',
  siteUrl: '4unaturalistic.com',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE, // required
        accessToken: process.env.CONTENTFUL_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: 'gridsome-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: [],
        config: {
          '/blog/**': {
            changefreq: 'daily',
            priority: 1,
            lastmod: '2020-11-01',
          },
          '/': {
            changefreq: 'daily',
            priority: 1,
            lastmod: '2020-11-01',
          },
          '/blog': {
            changefreq: 'daily',
            priority: 1,
            lastmod: '2020-11-01',
          },
          '/tag/**': {
            changefreq: 'daily',
            priority: 1,
            lastmod: '2020-11-01',
          }
        }
      }
    }
  ],
  templates: {
    ContentfulPosts: [
      {
        path:'/blog/:postSlug',
        component: './src/templates/WordPressPost.vue'
      }
    ],
    ContentfulCategory: [
      {
        path:'/tag/:name',
        component: './src/templates/WordPressCategory.vue'
      }
    ]
  },
  // configureWebpack(config) {
  // },
  chainWebpack(config){
    const environment = process.env.NODE_ENV;
    config.mode(environment)
  }
}
