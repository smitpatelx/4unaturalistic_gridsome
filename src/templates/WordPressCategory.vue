<template>
    <Layout>
        <div class="py-6 flex flex-wrap mx-auto container">
          <div class="w-full text-center text-lg font-semibold text-gray-600">
            <h1>Tag: <span class="text-gray-400">{{$page.contentfulCategory.name | simplifySlug}}</span></h1>
          </div>
          <!-- Filters @start -->
          <div class="w-full flex flex-wrap-reverse md:flex-wrap justify-between items-center content-evenly py-6 px-4 md:px-6">
              <div class="flex flex-wrap flex-row items-center justify-start my-2">
                <select v-model="categorySelected" class="base-btn-primary">
                  <option v-for="({node}) in $page.allContentfulCategory.edges" :key="node.name" :value="node.title" v-html="$options.filters.simplifySlug(node.title)"></option>
                </select>
            </div>
            <div class="flex flex-wrap flex-row items-center justify-end my-2">
              <button @click="sortByDateF" type="button" class="base-btn-primary flex flex-wrap justify-center items-center">
                <svg class="w-5 h-5 inline-block mr-2 z-0" :class="sortByDate ? 'rotate-0' : 'rotate-180'" viewBox="0 0 172 172"><g fill="none" ><path d="M0 172V0h172v172z"/><path class="fill-current" d="M6.235 24.08c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558H86a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934A6.84 6.84 0 0086 24.08H6.88a5.164 5.164 0 00-.645 0zm130.612 3.333a6.878 6.878 0 00-6.127 6.987v84.925l-15.373-15.373a6.9 6.9 0 00-4.944-2.15 6.87 6.87 0 00-6.424 4.274 6.902 6.902 0 001.586 7.551l32.035 32.035 32.035-32.035a6.867 6.867 0 001.854-6.705 6.899 6.899 0 00-4.945-4.891 6.89 6.89 0 00-6.691 1.921l-15.373 15.373V34.4a6.878 6.878 0 00-2.016-4.972 6.878 6.878 0 00-4.971-2.016 5.164 5.164 0 00-.645 0zM6.236 51.6c-3.803.175-6.732 3.4-6.557 7.202.174 3.803 3.4 6.733 7.202 6.558h55.04a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934A6.84 6.84 0 0061.92 51.6H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558h41.28a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558H34.4a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0zm0 27.52c-3.803.175-6.732 3.4-6.558 7.202.175 3.803 3.4 6.733 7.203 6.558h13.76a6.84 6.84 0 006.033-3.413 6.817 6.817 0 000-6.934 6.84 6.84 0 00-6.033-3.413H6.88a5.164 5.164 0 00-.645 0z"/></g></svg>
                Date 
                <span class="text-sm font-medium ml-2 leading-none" v-html="sortByDate ? '(Old ~ New)':'(New ~ Old)'">New</span>
              </button>
            </div>
          </div>
          <!-- Filters @end -->
          <div class="flex flex-wrap w-full items-stretch justify-center content-center">
            <div class="p-4 w-full md:w-1/2 lg:w-1/3 flex flex-wrap items-stretch justify-center" v-for="{node} in loadedPosts" :key="node.id">
                <div class="shadow-none hover:shadow-lg rounded-lg bg-white flex flex-wrap border border-gray-200 hover:border-transparent" style="transition: box-shadow 0.7s;">
                  <a :href="node.path" class="w-full flex flex-wrap" tabindex="-1">
                    <g-image quality="25" :src="node.postCover.file.url" :alt="node.postCover.file.fileName" class="rounded-t-lg object-cover h-40 w-full"/>
                  </a>
                  <div class="py-4 px-6 flex flex-wrap content-end">
                    <h1 class="font-semibold text-xl text-gray-800" v-html="node.postTitle"></h1>
                    <div class="font-normal text-base text-gray-600 py-2" v-html="$options.filters.excerptF(node.postDescription, 15)">
                    </div>
                    <div class="pt-3 w-full flex flex-wrap justify-between items-center">
                      <p class="font-normal text-base leading-tight text-gray-600"><span class="capitalize text-gray-600 font-medium">Dr. {{node.author.firstName}}</span></p>
                      <g-link class="text-lg font-medium focus:outline-none text-teal-600 focus:text-teal-500 hover:text-teal-500 border-b border-transparent focus:border-teal-400 hover:border-teal-400 flex flex-wrap items-center justify-center" :to="node.path">
                        Read More
                        <svg class="w-5 h-5 inline-block ml-1 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.707 4.293a1 1 0 10-1.414 1.414L16.586 11H5a1 1 0 100 2h11.586l-5.293 5.293a1 1 0 001.414 1.414l7-7a1 1 0 000-1.414l-7-7z" clip-rule="evenodd"/></svg>
                      </g-link>
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
query Post($path: String!) {
  contentfulCategory(path: $path){
    id
    name
    belongsTo{
      pageInfo{
        totalPages,
        totalItems,
        hasNextPage,
        hasPreviousPage
      }
      edges{
        node{
          ...on ContentfulPosts{
            id
            author{
              firstName
              lastName
              authorImage{
                file{
                  url
                }
              }
            }
            postSlug
            path
            postTitle
            postCover{
              file{
                url
                fileName
              }
            }
            publishDate
            postDescription
            updatedAt
            createdAt
          }
        }
      }
    }
  }
  allContentfulCategory{
    edges{
      node{
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import InfiniteLoading from 'vue-infinite-loading';
if (!process.isClient) {
  let window = {};
}
export default {
  data(){
      return{
        loadedPosts: [],
        currentPage: 1,
        sortByDate: false,
      }
  },
  metaInfo(){
    return{
        title: this.$page.contentfulCategory.name,
    }
  },
  filters:{
    excerptF(sentence,words=10){
      let result = sentence;
      let resultArray = result.split(" ");
      if(resultArray.length > words){
      resultArray = resultArray.slice(0, words);
      result = resultArray.join(" ") + " …";
      }
      return result;
    },
    simplifySlug(slug){
      const name = slug.split('-');
      const capitalize = name.map(i => {
        return i.charAt(0).toUpperCase() + i.slice(1);
      });
      const newSlug = capitalize.join(' ');
      return newSlug;
    }
  },
  methods:{
      async infiniteHandler($state) {
        if (this.currentPage + 1 > this.$page.contentfulCategory.belongsTo.pageInfo.totalPages) {
          $state.complete()
        } else {
          const { data } = await this.$fetch(
            `/blog/${this.currentPage + 1}`
          )
          console.log(data)
          if (data.allContentfulPosts.edges.length) {
            this.currentPage = data.allContentfulPosts.pageInfo.currentPage
            this.loadedPosts.push(...data.allContentfulPosts.edges)
            this.sort_list();
            $state.loaded()
          } else {
            $state.complete()
          }
        }
      },
      async sortByDateF(){
        this.sortByDate=!this.sortByDate
        this.sort_list();
      },
      async sort_list(){
        this.loadedPosts.sort((a,b)=>{
          if(this.sortByDate){
              return Number(new Date(a.node.createdAt)) - Number(new Date(b.node.createdAt));
          } else {
              return Number(new Date(b.node.createdAt)) - Number(new Date(a.node.createdAt));
          }
        });
      },
  },
  mounted() {
    this.loadedPosts.push(...this.$page.contentfulCategory.belongsTo.edges)
    this.sort_list();
	},
  computed:{
      categorySelected: {
        get: function () {
          return `${this.$route.params.name}`;
        },
        set: function (val) {
          console.log(val)
          if(val==this.$page.contentfulCategory.name){
            return val
          }
          window.location.href = `/tag/${val}`;
        }
      }
  },
  components:{
    InfiniteLoading
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