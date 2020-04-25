// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

const collections = [
  {
    query: `{
      allWordPressPost {
        edges {
          node {
            date
            id
            title
            path
            excerpt
            content
            slug
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allWordPressPost.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME, // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        modified: String(item.date)
      }
    }, // optional
    matchFields: ['content', 'title'], // Array<String> required with PartialUpdates
  },
];

module.exports = {
  siteName: '4unaturalistic',
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        // baseUrl: 'http://wp01.test/index.php', // required
        baseUrl: 'https://app.4unaturalistic.com/index.php',
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        splitPostsIntoFragments: false, // default false
        downloadRemoteImagesFromPosts: false, // default false
        downloadRemoteFeaturedImages: false, // default false
        downloadACFImages: false, // default false
        // routes: {
        //   post: '/blog/:slug',
        //   post_tag: '/tag/:slug',
        // },
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
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
  ],
  templates: {
    WordPressPost: [
      {
        path:'/blog/:slug',
        component: './src/templates/WordPressPost.vue'
      }
    ],
    WordPressCategory: [
      {
        path:'/tag/:slug',
        component: './src/templates/WordPressCategory.vue'
      }
    ]
  },
  chainWebpack(config){
    // config.mode('development')
  }
}
