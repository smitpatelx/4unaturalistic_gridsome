// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '4unaturalistic',
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'http://wp01.test/index.php', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: false, // default false
        downloadRemoteFeaturedImages: false, // default false
        downloadACFImages: false, // default false
        routes: {
          post: '/blog/:slug',
          post_tag: '/tag/:slug'
        },
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
    }
  ],
  templates: {
    WordPressPost: [
      {
        path:'/blog/:slug',
        component: './src/templates/SinglePost.vue'
      }
    ],
  }
}
