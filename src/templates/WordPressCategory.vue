<template>
    <Layout>
        <div class="py-6 flex flex-wrap mx-auto container">
          <div class="flex flex-wrap w-full justify-center items-center">
            <span class="text-xl md:text-4xl font-normal text-teal-600 w-full text-center">
              <span class="text-gray-600 pr-3">#</span>
              {{$page.category.title}}
            </span>
          </div>
          <!-- Filters @start -->
          <div class="w-full flex flex-wrap-reverse md:flex-wrap justify-between items-center py-6">
            <div class="flex flex-wrap flex-row items-center justify-start my-2 leading-tight">
              <select v-model="categorySelected" @change="categoryChanged()" class="focus:outline-none focus:shadow-outline text-lg px-4 py-2 mx-2 text-white bg-teal-500 rounded shadow-lg hover:shadow-xl flex justify-center items-center">
                <option v-for="({node}) in $page.allWordPressCategory.edges" :key="node.id" :value="node.slug">{{node.title}}  ({{node.count}})</option>
              </select>
            </div>
            <div class="flex flex-wrap flex-row items-center justify-end my-2">
              <button @click="sortByDateF" type="button" class="focus:outline-none focus:shadow-outline text-lg lg:text-xl px-4 py-1 mx-2 text-white bg-teal-500 hover:bg-teal-600 rounded shadow-lg hover:shadow-xl flex justify-center items-center">
                <svg class="w-6 h-6 inline-block mr-2 z-0" :class="sortByDate ? 'rotate-0' : 'rotate-180'" viewBox="0 0 172 172"><g fill="none" ><path d="M0 172V0h172v172z"/><path class="fill-current" d="M6.235 24.08c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558H86a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934A6.84 6.84 0 0086 24.08H6.88a5.164 5.164 0 00-.645 0zm130.612 3.333a6.878 6.878 0 00-6.127 6.987v84.925l-15.373-15.373a6.9 6.9 0 00-4.944-2.15 6.87 6.87 0 00-6.424 4.274 6.902 6.902 0 001.586 7.551l32.035 32.035 32.035-32.035a6.867 6.867 0 001.854-6.705 6.899 6.899 0 00-4.945-4.891 6.89 6.89 0 00-6.691 1.921l-15.373 15.373V34.4a6.878 6.878 0 00-2.016-4.972 6.878 6.878 0 00-4.971-2.016 5.164 5.164 0 00-.645 0zM6.236 51.6c-3.803.175-6.732 3.4-6.557 7.202.174 3.803 3.4 6.733 7.202 6.558h55.04a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934A6.84 6.84 0 0061.92 51.6H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558h41.28a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558H34.4a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558h13.76a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0z"/></g></svg>
                Date 
                <span class="text-sm font-semibold pl-2" v-html="sortByDate ? '(Old ~ New)':'(New ~ Old)'">New</span>
              </button>
            </div>
          </div>
          <!-- Filters @end -->
          <div class="flex flex-wrap w-full">
            <div class="w-full md:w-1/2 xl:w-1/3 p-4" v-for="{node} in loadedPosts" :key="node.id">
                <div class="shadow-none hover:shadow-lg rounded-lg bg-white flex flex-wrap border border-gray-200 hover:border-transparent" style="transition: box-shadow 0.7s;">
                  <a :href="node.path" class="w-full flex flex-wrap" tabindex="-1">
                    <g-image quality="25" :src="node.featuredMedia.mediaDetails.sizes.medium.sourceUrl" :alt="node.featuredMedia.altText" class="rounded-t-lg object-cover h-40 w-full"/>
                  </a>
                  <div class="py-4 px-6">
                    <h1 class="font-semibold text-xl text-gray-800" v-html="node.title"></h1>
                    <div class="font-normal text-base text-gray-600 py-2" v-html="$options.filters.excerptF(node.excerpt, 15)">
                    </div>
                    <div class="pt-3 w-full flex flex-wrap justify-between items-center">
                      <p class="font-normal text-base leading-tight text-gray-600">By - <span class="capitalize text-gray-800">{{node.author.name}}</span></p>
                      <g-link class="text-xl focus:outline-none text-teal-600 focus:text-teal-500 hover:text-teal-500 border-b border-transparent focus:border-teal-400 hover:border-teal-400" :to="node.path">Read More</g-link>
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
                No more posts
              </p>
            </infinite-loading>
			    </ClientOnly>
        </div>
    </Layout>
</template>

<page-query>
query Category($path: String, $page: Int) {
    category: wordPressCategory(path: $path) {
    title
    belongsTo(page: $page, perPage: 9) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            date,
            id,
            title,
            path,
            excerpt,
            categories{
              id,
            },
            author {
              name,
            },
            featuredMedia{
              altText
              mediaDetails{
                sizes{
                  medium{
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  allWordPressCategory{
    totalCount
    edges{
      node{
        id
        title
        count
        slug
      }
    }
  },
}
</page-query>

<script>
import InfiniteLoading from 'vue-infinite-loading';
if (!process.isClient) {
  let window = {};
}
export default {
    components:{
      InfiniteLoading
    },
    data(){
        return{
            loadedPosts:[],
            currentPage: 1,
            sortByDate: false,
        }
    },
    metaInfo(){
        return{
            title: this.$page.category.title,
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
    methods:{
        async sort_list(){
            this.loadedPosts.sort((a,b)=>{
                if(this.sortByDate){
                    return Number(new Date(a.node.date)) - Number(new Date(b.node.date));
                } else {
                    return Number(new Date(b.node.date)) - Number(new Date(a.node.date));
                }
            });
        },
        async categoryChanged(){
          console.log(`/tag/${this.categorySelected}`);
          // router.push(`/tag/${this.categorySelected}`);
        },
        async sortByDateF(){
            this.sortByDate=!this.sortByDate
            this.sort_list();
        },
        async infiniteHandler($state) {
          if (this.currentPage + 1 > this.$page.category.belongsTo.pageInfo.totalPages) {
            $state.complete()
          } else {
            const { data } = await this.$fetch(
              `/tag/${this.$route.params.slug}/${this.currentPage + 1}`
            )
            if (data.category.belongsTo.edges.length) {
              this.currentPage = data.category.belongsTo.pageInfo.currentPage
              this.loadedPosts.push(...data.category.belongsTo.edges)
              this.sort_list();
              $state.loaded()
            } else {
              $state.complete()
            }
          }
        },
    },
    mounted(){
      this.loadedPosts.push(...this.$page.category.belongsTo.edges)
      this.sort_list();
    },
    computed:{
      categorySelected: {
        get: function () {
          return this.$route.params.slug;
        },
        set: function (val) {
          // this.$router.push(`/tag/${val}`);
          window.location.href = `/tag/${val}`;
        }
      }
    }
}
</script>
<style lang="scss" scoped>
  .rotate-0{
    transform: rotateX(0deg);
    transition: transform 0.4s;
  }
  .rotate-180{
    transform: rotateX(180deg);
    transition: transform 0.4s;
  }
</style>