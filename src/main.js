// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import InfiniteLoading from 'vue-infinite-loading'
import VueSanitize from "vue-sanitize";
import InstantSearch from 'vue-instantsearch';
// import VueInstantSearch, { createInstantSearch } from 'vue-instantsearch'
// import algoliasearch from 'algoliasearch/lite';
import '~/assets/tailwind.css';
import '~/../static/fonts/stylesheet.css';

// const searchClient = algoliasearch(
//   'I6O2MBJ6PH',
//   '870717e0966a526aa440693d00a8bdf2'
// );

// export async function createApp( {
//     beforeApp = () => {},
//     afterApp = () => {}
//   } = {}) {

//   const router = createRouter();

//   // provide access to all components
//   Vue.use(VueInstantSearch);
  
//   const { instantsearch, rootMixin } = createInstantSearch({
//     searchClient,
//     indexName: 'posts'
//   });

//   const app = new Vue({
//     // provide access to the instance
//     mixins: [rootMixin],
//     router,
//     render: h => h(App)
//   });

//   const result = {
//     app,
//     router,
//     // provide access to the instance from afterApp
//     instantsearch
//   };

//   await afterApp(result);

//   return result;

// }


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(InfiniteLoading, InstantSearch);
  Vue.use(VueSanitize);
}
