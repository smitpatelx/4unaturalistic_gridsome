<template>
      <ais-instant-search-ssr
        index-name="posts"
        class="flex flex-wrap flex-col justify-center items-center w-full block"
        @blur="searchFocused=false"
      >
        <ais-configure :hitsPerPage="4" />
        <ais-search-box placeholder="Search ..." @focus="searchFocused=true"/>
        <slide-y-down-transition :duration="{enter:500, exit:100}">
            <div class="md:relative w-full justify-center items-center content-center px-3" v-if="searchFocused">
                <ais-hits class="absolute flex flex-wrap flex-col w-full md:w-96 top-0 right-0 bg-white rounded-lg shadow-lg py-3 px-5 mt-20 md:mt-4 border-2 border-gray-300">
                    <template slot="item" slot-scope="{ item }" >
                        <div class="py-2 px-4 bg-white hover:bg-gray-200 rounded-lg flex flex-wrap flex-col my-3">
                            <g-link :to="`/blog/${item.slug}/`">
                                <h1 class="font-semibold text-lg text-gray-800"><ais-highlight :hit="item" attribute="title" /></h1>
                            </g-link>
                            <p class="font-normal text-base text-gray-600" v-html="$options.filters.excerptF($sanitize(item.excerpt))"></p>
                        </div>
                    </template>
                </ais-hits>
            </div>
        </slide-y-down-transition>
      </ais-instant-search-ssr>
</template>

<script>
import { AisInstantSearchSsr, AisSearchBox, AisHits, AisHighlight, AisConfigure } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import { createInstantSearch } from 'vue-instantsearch'
import { SlideYDownTransition } from 'vue2-transitions'

const searchClient = algoliasearch(
  'I6O2MBJ6PH',
  '870717e0966a526aa440693d00a8bdf2'
);

const { instantsearch: instantsearch, rootMixin } = createInstantSearch({
  searchClient,
  indexName: "posts",
});

export default {
    mixins: [rootMixin],
    data() {
        return {
            searchFocused: false
        };
    },
    components: {
        AisInstantSearchSsr,
        AisSearchBox,
        AisHits,
        AisHighlight,
        AisConfigure,
        SlideYDownTransition,
    },
    async asyncData ({  }) {
        const algoliaState = await  instantsearch.findResultsState({
            // find out which parameters to use here using ais-state-results
            query: 'data',
            hitsPerPage: 6,
        }).then(() => instantsearch.getState());

        return {algoliaState}
    },
    beforeMount() {
        instantsearch.hydrate(this.algoliaState);
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
};
</script>
<style lang="scss">
    .ais-SearchBox-form{
        @apply mr-6 relative justify-center items-center content-center leading-none flex w-full pr-4;

        .ais-SearchBox-input{
            @apply self-stretch py-2 text-base bg-transparent bg-gray-200 text-gray-700 rounded pl-5 pr-10 border-transparent w-full;

            &:focus{
                @apply outline-none bg-white border border-teal-500;
            }
        }

        .ais-SearchBox-submit{
            @apply absolute top-0 right-0 h-full mr-8 text-gray-600;
        
            &:focus{
                @apply outline-none text-teal-500;
            }

            &:hover{
                @apply text-teal-500;
            }

            svg{
                @apply w-4 h-4 inline-block fill-current;
            }
        }
    }
</style>