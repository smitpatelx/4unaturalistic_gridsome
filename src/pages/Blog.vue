<template>
    <Layout>
        <div class="py-6 flex flex-wrap mx-auto container">
          <div class="flex flex-wrap w-full">
            <div class="w-full md:w-1/2 xl:w-1/3 p-4" v-for="{node} in loadedPosts" :key="node.id">
                <div class="shadow-none hover:shadow-lg rounded-lg bg-white flex flex-wrap border border-gray-200 hover:border-transparent" style="transition: box-shadow 0.7s;">
                  <a :href="node.path" class="w-full flex flex-wrap">
                    <g-image quality="25" :src="node.featuredMedia.sourceUrl" :alt="node.featuredMedia.altText" class="rounded-t-lg object-cover h-40 w-full"/>
                  </a>
                  <div class="py-4 px-6">
                    <h1 class="font-semibold text-xl text-gray-800" v-html="node.title"></h1>
                    <div class="font-normal text-base text-gray-600 py-2" v-html="$options.filters.excerptF(node.excerpt, 15)">
                    </div>
                    <div class="pt-3 w-full flex flex-wrap justify-between items-center">
                      <p class="font-normal text-base leading-tight text-gray-600">By - <span class="capitalize text-gray-800">{{node.author.name}}</span></p>
                      <g-link class="text-xl focus:outline-none text-teal-600 focus:text-teal-500 hover:text-teal-500 border-b border-transparent hover:border-teal-400" :to="node.path">Read More</g-link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <ClientOnly class="w-full flex flex-wrap">
            <infinite-loading @infinite="infiniteHandler" spinner="spiral" class="w-full flex flex-wrap justify-center content-center items-center py-8 text-center">
              <p slot="no-more" class="w-full text-teal-600 font-light text-center text-xl">
                You've scrolled through all the posts
              </p>
              <p slot="no-results" class="w-full text-teal-600 font-light text-center text-xl">
                Sorry, no posts yet
              </p>
            </infinite-loading>
			    </ClientOnly>
        </div>
    </Layout>
</template>

<page-query>
query Home($page: Int) {
    allWordPressPost(page: $page, perPage: 9) @paginate {
    pageInfo {
      totalPages,
      currentPage,
    },
    edges {
      node {
        date,
        id,
        title,
        path,
        excerpt,
        dateGmt,
        categories {
          id,
          title,
        },
        author {
          name,
        },
        featuredMedia{
          sourceUrl,
          altText
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo(){
    return{
      title: "Blog",
    }
  },
  data(){
    return{
      loadedPosts: [],
      currentPage: 1
    }
  },
  filters:{
    excerptF(sentence,words=10){
      var result = sentence;
      var resultArray = result.split(" ");
      if(resultArray.length > words){
      resultArray = resultArray.slice(0, words);
      result = resultArray.join(" ") + " …";
      }
      return result;
    }
  },
  created() {
		this.loadedPosts.push(...this.$page.allWordPressPost.edges)
	},
  methods:{
    async infiniteHandler($state) {
			if (this.currentPage + 1 > this.$page.allWordPressPost.pageInfo.totalPages) {
				$state.complete()
			} else {
				const { data } = await this.$fetch(
					`/blog/${this.currentPage + 1}`
				)
				if (data.allWordPressPost.edges.length) {
					this.currentPage = data.allWordPressPost.pageInfo.currentPage
					this.loadedPosts.push(...data.allWordPressPost.edges)
					$state.loaded()
				} else {
					$state.complete()
				}
			}
		}
  }
}
</script>