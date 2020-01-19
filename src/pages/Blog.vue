<template>
    <Layout>
        <div class="py-6 flex flex-wrap mx-auto container">
          <div class="w-full md:w-1/2 xl:w-1/3 p-4" v-for="{node} in $page.allWordPressPost.edges" :key="node.id">
              <div class="shadow-none hover:shadow-lg rounded-lg bg-white flex flex-wrap border border-green-200 hover:border-transparent" style="transition: box-shadow 0.7s;">
                <a :href="node.path" class="w-full flex flex-wrap">
                  <g-image :src="node.featuredMedia.sourceUrl" :alt="node.featuredMedia.altText" class="rounded-t-lg object-cover h-40 w-full"/>
                </a>
                <div class="py-4 px-6">
                  <h1 class="font-semibold text-xl text-gray-800" v-html="node.title"></h1>
                  <p class="font-normal text-base text-gray-600 py-2" v-html="$options.filters.excerptF(node.excerpt, 15)">
                  </p>
                  <div class="pt-3 w-full flex flex-wrap justify-between items-center">
                    <p class="font-normal text-base leading-tight text-gray-600">Author: <span class="capitalize text-gray-800">{{node.author.name}}</span></p>
                    <g-link class="text-xl focus:outline-none text-teal-600 focus:text-teal-500 hover:text-teal-500 border-b border-transparent hover:border-teal-400" :to="node.path">Read More</g-link>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </Layout>
</template>

<page-query>
query Home($page: Int) {
    allWordPressPost(page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        date
        id
        title
        path
        excerpt,
        dateGmt
        categories {
          id
          title
        }
        author {
          name
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
            title: "Blog"
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
    }
}
</script>