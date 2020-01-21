<template>
    <Layout>
        <!-- :style="`background: url(${$page.wordPressPost.featuredMedia.sourceUrl});`" -->
        <div class="relative">
            <div class="px-6 md:px-16 lg:px-24 flex flex-wrap fonts-primary mx-auto container bg-white">
            
                <!-- Social Share Buttons : Start-->
                <div class="z-50 fixed bottom-0 left-0 mb-2 ml-2 px-1 py-1 bg-white rounded-full bg-teal-500 flex flex-wrap flex-row justify-center items-center">
                    <div class="bg-white rounded-full px-4 py-1 inline-block">
                        <a title="Share on Twitter" :href="'https://twitter.com/home?status='+currenturl+' '+$page.wordPressPost.title" target="_blank" class="cursor-pointer hidden md:inline-block mr-3 focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center">
                            <svg class="w-5 h-5 md:w-6 md:h-6 inline-block fill-current" viewBox="0 0 512 416"><path d="M459.37 103.634c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954C87.39 82.842 165.035 124.425 252.1 128.974c-1.624-7.797-2.599-15.918-2.599-24.04C249.501 47.106 296.283 0 354.435 0c30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                        </a>
                        <a title="Share on Facebook" :href="'https://www.facebook.com/sharer/sharer.php?u='+currenturl" target="_blank" class="cursor-pointer hidden md:inline-block mr-3 focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center">
                            <svg class="w-5 h-5 md:w-6 md:h-6 inline-block fill-current" viewBox="0 0 444 448"><path d="M221.746 0c-208.1 0-301.5 246-139.4 368.6V448l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7.1-114.5-99.2-207.3-221.7-207.3zm23.4 278.1l-57.4-59.6-110.4 61.1 121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"/></svg>
                        </a>
                        <a title="Share on Linkedin" :href="'https://www.linkedin.com/shareArticle?mini=true&url='+currenturl+'&title='+$page.wordPressPost.title+'&summary='+$options.filters.excerptF($page.wordPressPost.excerpt, 15)" 
                        target="_blank" class="cursor-pointer hidden md:inline-block focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center">
                            <svg class="w-4 h-4 md:w-5 md:h-5 inline-block fill-current" viewBox="0 0 24 24"><path d="M16 9a4.9997 4.9997 0 00-5 5v6h2v-6a3 3 0 016 0v6h2v-6a4.9997 4.9997 0 00-5-5zm0-2a6.9998 6.9998 0 00-7 7v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a1.0001 1.0001 0 012 0v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a6.9999 6.9999 0 00-7-7zM1 9c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1V9zm2 1v10h2V10H3zM4 3c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1zM1 4c0-1.6568 1.3432-3 3-3 1.6569 0 3 1.3432 3 3 0 1.6569-1.3431 3-3 3-1.6568 0-3-1.3431-3-3z"/></svg>
                        </a>
                    </div>
                    <p class="text-white font-semibold text-lg mx-2 inline-block">Share</p>
                </div>
                <!-- Social Share Buttons : End-->
            
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
        </div>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
    wordPressPost (path: $path) {
        title,
        content,
        excerpt,
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
            currenturl:''
        }
    },
    methods:{
        caclAvgReadTime(){
            let words = this.$page.wordPressPost.content.split(' ').length;
            //Formula- numberofwords/170;
            this.avgReadTime = Math.round(words/170);
        }
    },
    computed:{
        
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
        },
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
    mounted(){
        //Open all link in new window
        let links = document.querySelectorAll(".wp-content a");
        links.forEach(el => {
            el.target="_blank"
        });
        this.caclAvgReadTime();

        this.currenturl = window.location.href;
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
            @apply mt-8 text-lg leading-relaxed;
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