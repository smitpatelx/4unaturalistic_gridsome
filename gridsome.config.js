// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// const collections = [
//   {
//     query: `{
//       allWordPressPost {
//         edges {
//           node {
//             date
//             id
//             title
//             path
//             excerpt
//             content
//             slug
//           }
//         }
//       }
//     }`,
//     transformer: ({ data }) => data.allWordPressPost.edges.map(({ node }) => node),
//     indexName: process.env.ALGOLIA_INDEX_NAME, // Algolia index name
//     itemFormatter: (item) => {
//       return {
//         objectID: item.id,
//         title: item.title,
//         slug: item.slug,
//         excerpt: item.excerpt,
//         modified: String(item.date)
//       }
//     }, // optional
//     matchFields: ['content', 'title'], // Array<String> required with PartialUpdates
//   },
// ];

module.exports = {
  siteName: '4unaturalistic',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'cmiz5oo8pq96', // required
        accessToken: 'UZR8G7KMUeczj-ln5tWcFWw1a9SHDFRPlUJX3WXf78g', // required
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
    // {
    //   use: `gridsome-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     collections,
    //     chunkSize: 10000, // default: 1000
    //     enablePartialUpdates: true, // default: false
    //   },
    // },
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
        path:'/tag/:slug',
        component: './src/templates/WordPressCategory.vue'
      }
    ]
  },
  chainWebpack(config){
    // config.mode('development')
  }
}
