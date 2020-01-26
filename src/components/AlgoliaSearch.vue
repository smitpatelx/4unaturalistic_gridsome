<template>
      <client-only>
          <ais-instant-search
            index-name="posts"
            :search-client="searchClient"
            class="flex flex-wrap flex-col justify-center items-center w-full block"
            @blur.native="closeSearchDialog"
            v-click-outside="closeSearchDialog"
          >
            <ais-configure :hitsPerPage="4" />
            <ais-search-box>
                <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                    <label class="mr-6 relative justify-center items-center content-center leading-none flex w-full pr-4">
                        <input type="text" @input="refine($event.currentTarget.value)" @keyup="searchFocused=true" ref="search" title="Search" placeholder="Search" style="transition: border-color 0.5s;flex-shrink: 1;flex-basis: auto;"
                        class="self-stretch py-2 text-base bg-transparent focus:outline-none bg-gray-200 focus:bg-white text-gray-700 rounded pl-5 pr-10 focus:border border-transparent focus:border-teal-500 w-full"/>
                        <button title="Go Ahead" type="button" class="absolute top-0 right-0 h-full mr-8 focus:outline-none text-gray-600 hover:text-teal-500 focus:text-teal-500">
                            <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 24 24"><path d="M11 4a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"/><path d="M15.943 15.943a1 1 0 011.414 0l4.35 4.35a1 1 0 01-1.414 1.414l-4.35-4.35a1 1 0 010-1.414z" /></svg>
                        </button>
                    </label>
                </div>
            </ais-search-box>
            <slide-y-down-transition :duration="{enter:500, exit:100}">
                <div class="md:relative w-full justify-center items-center content-center px-3" v-if="searchFocused">
                    <ais-hits>
                        <div slot-scope="{ items }" class="absolute flex flex-wrap flex-col w-full md:w-96 top-0 right-0 bg-white rounded-lg shadow-lg py-3 px-5 mt-20 md:mt-4 border-2 border-gray-300">
                            <div v-for="item in items" :key="item.objectID">
                                <g-link  :to="`/blog/${item.slug}/`" @click.native="closeSearchDialog" class="py-2 bg-white hover:bg-teal-100 rounded-lg flex flex-wrap flex-col my-3 focus:outline-none border-2 border-transparent focus:border-teal-400">
                                    <h1 class="font-semibold text-lg text-gray-800 px-4 "><ais-highlight :hit="item" attribute="title" /></h1>
                                    <p class="font-normal text-base text-gray-600 px-4 " v-html="$options.filters.excerptF($sanitize(item.excerpt))"></p>
                                </g-link>
                            </div>
                            <div class="w-full justify-end text-right flex flex-wrap">
                                <ais-powered-by theme="light" />
                            </div>
                        </div>
                    </ais-hits>
                </div>
            </slide-y-down-transition>
          </ais-instant-search>
      </client-only>
</template>

<script>
import { AisInstantSearch, AisSearchBox, AisHits, AisHighlight, AisConfigure, AisPoweredBy } from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
import { SlideYDownTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'

export default {
    // mixins: [rootMixin],
    data() {
        return {
            searchFocused: false,
            currentRefinement:'',
            searchClient: algoliasearch(
                'I6O2MBJ6PH',
                '870717e0966a526aa440693d00a8bdf2'
            )
        };
    },
    components: {
        AisInstantSearch,
        AisSearchBox,
        AisHits,
        AisHighlight,
        AisConfigure,
        AisPoweredBy,
        SlideYDownTransition,
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
    directives: {
      ClickOutside
    },
    methods:{
        closeSearchDialog(){
            this.searchFocused=false;
        }
    }
};
</script>
<style lang="scss">

    // .ais-SearchBox-form{
    //     @apply mr-6 relative justify-center items-center content-center leading-none flex w-full pr-4;

    //     .ais-SearchBox-input{
    //         @apply self-stretch py-2 text-base bg-transparent bg-gray-200 text-gray-700 rounded pl-5 pr-10 border-transparent w-full;

    //         &:focus{
    //             @apply outline-none bg-white border border-teal-500;
    //         }
    //     }

    //     .ais-SearchBox-submit{
    //         @apply absolute top-0 right-0 h-full mr-8 text-gray-600;
        
    //         &:focus{
    //             @apply outline-none text-teal-500;
    //         }

    //         &:hover{
    //             @apply text-teal-500;
    //         }

    //         svg{
    //             @apply w-4 h-4 inline-block fill-current;
    //         }
    //     }

    //     .ais-SearchBox-reset{
    //         display: none;
    //     }
    // }
</style>