<template>
    <Layout>
        <!-- :style="`background: url(${$page.wordPressPost.featuredMedia.sourceUrl});`" -->
        <div class="px-6 md:px-16 lg:px-24 flex flex-wrap fonts-primary mx-auto container bg-white">
            <h1 v-html="$page.wordPressPost.title" class="text-4xl font-bold text-gray-800 py-4 text-center w-full mt-6"></h1>
            <div class="w-full flex flex-wrap justify-center items-center font-normal text-base text-gray-700">
                <span class="mr-2">
                    Posted <span class="font-semibold">{{$page.wordPressPost.dateGmt|formatDate}}</span> by</span>
                <div class="bg-white shadow-md p-2 rounded-full h-12 w-12 ml-1 mr-3">
                    <g-image :src="$page.wordPressPost.author.avatarUrls._96" alt="author-avatar" />
                </div>
                <g-link class="mr-2 text-teal-600 hover:text-gray-800 hover:underline" 
                    style="transition: all 0.5s;"
                    :href="`/author/${$page.wordPressPost.author.slug}`">{{$page.wordPressPost.author.name}}</g-link>
                <span class="font-semibold"> - {{avgReadTime}} min read</span>
                
            </div>
            <g-image class="rounded-lg my-6 shadow-lg object-cover w-full" style="max-height: 18rem;" :src="$page.wordPressPost.featuredMedia.sourceUrl" :alt="$page.wordPressPost.featuredMedia.altText"/>
            <div class="wp-content py-10" v-html="$page.wordPressPost.content"></div>
            
            <div class="w-full flex flex-wrap justify-between items-center border-t border-gray-400">
                <div class="flex flex-wrap flex-row justify-center content-center items-center my-8">
                    <g-link :href="data.path" class="font-normal rounded-full border border-teal-500 py-1 px-3 text-base text-teal-500 hover:text-teal-600 cursor-pointer mx-2" v-for="(data) in $page.wordPressPost.categories" :key="data.id">
                        {{data.title}}
                    </g-link>
                </div>
                <p class="text-xl font-normal text-gray-600">{{$page.wordPressPost.dateGmt|formatDate}}</p>
            </div>

        </div>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    wordPressPost (path: $path) {
        title,
        content,
        categories{
            id,
            title,
            path
        },
        dateGmt,
        path,
        modifiedGmt,
        featuredMedia {
            sourceUrl,
            altText,
            mediaDetails {
                width
            }
        },
        author{
          avatarUrls{
            _96
          },
          name,
          slug
        }
    }
}
</page-query>

<script>
import moment from 'moment'
export default {
    data(){
        return{
            avgReadTime: 0,
        }
    },
    methods:{
        caclAvgReadTime(){
            let words = this.$page.wordPressPost.content.split(' ').length;
            //Formula- numberofwords/170;
            this.avgReadTime = Math.round(words/170);
        }
    },
    metaInfo(){
        return{
            title: this.$page.wordPressPost.title
        }
    },
    filters:{
        formatDate(val){
            if (val) {
                return moment(String(val)).format('D, MMMM YYYY')
            }
        }
    },
    mounted(){
        //Open all link in new window
        let links = document.querySelectorAll(".wp-content a");
        links.forEach(el => {
            el.target="_blank"
        });
        this.caclAvgReadTime();
    }
}
</script>

<style lang="scss">
    .wp-content{
        @apply flex flex-wrap w-full flex-col justify-center text-left text-gray-800;

        a{
            @apply mx-2 text-teal-500 font-semibold;
        }

        a:hover{
            @apply text-teal-600 border-b border-teal-500;
        }

        p{
            @apply mt-4 text-lg;
        }

        ul{
            @apply px-6 my-4 text-teal-700 text-lg;

            li::before {
                content: "\2022";
                @apply text-teal-600;
                font-weight: bold;
                display: inline-block; 
                width: 1em;
                margin-left: -1em;
            }
        }

        ol{
            @apply px-6 my-4 text-teal-700 text-lg;

            li {
                @apply list-decimal text-teal-600;
            }
        }

        h1{
            @apply text-4xl font-semibold mt-4;
        }

        h2{
            @apply text-3xl font-semibold mt-4;
        }

        h3{
            @apply text-2xl font-semibold mt-4;
        }

        h4{
            @apply text-xl font-semibold mt-4;
        }

        h5{
            @apply text-lg font-semibold mt-4;
        }

        hr{
            @apply text-teal-500 my-4;
        }

        img{
            @apply rounded-lg shadow-lg my-2 mx-auto;
        }
    }
    

    .color-1{
        background: #ffffff70;
    }
</style>