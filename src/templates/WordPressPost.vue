<template>
  <Layout>
    <div class="relative">
      <div
        class="px-6 md:px-16 lg:px-24 flex flex-wrap fonts-primary mx-auto container bg-white w-full"
      >
        <div>
          <a href="/blog" class="text-base font-medium text-gray-600 flex flex-wrap items-center justify-center content-center mt-4 p-1 focus:ring-1 focus:ring-teal-200">
            <span class="rounded-full bg-teal-100 p-2 leading-none mr-2 flex flex-wrap items-center justify-center">
              <svg
                class="w-3 h-3 inline-block fill-current text-teal-600"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.707 1.707A1 1 0 007.293.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L3.414 9H15a1 1 0 100-2H3.414l5.293-5.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Go Back
          </a>
        </div>
        <div
          class="z-50 fixed bottom-0 left-0 mb-2 ml-2 p-1 bg-white rounded-full ring-teal-400 ring flex flex-wrap flex-row justify-center items-center content-center"
        >
          <div class="bg-white rounded-full px-4 py-1 flex flex-wrap">
            <a
              title="Share on Twitter"
              :href="'https://twitter.com/intent/tweet?url=' + currenturl"
              target="_blank"
              class="cursor-pointer inline-block mr-3 focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center"
            >
              <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 512 416">
                <path
                  d="M459.37 103.634c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954C87.39 82.842 165.035 124.425 252.1 128.974c-1.624-7.797-2.599-15.918-2.599-24.04C249.501 47.106 296.283 0 354.435 0c30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
            <a
              title="Share on Facebook"
              :href="'https://www.facebook.com/sharer/sharer.php?u=' + currenturl"
              target="_blank"
              class="cursor-pointer inline-block mr-3 focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center"
            >
              <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 444 448">
                <path
                  d="M221.746 0c-208.1 0-301.5 246-139.4 368.6V448l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7.1-114.5-99.2-207.3-221.7-207.3zm23.4 278.1l-57.4-59.6-110.4 61.1 121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"
                />
              </svg>
            </a>
            <a
              title="Share on Linkedin"
              :href="
                'https://www.linkedin.com/shareArticle?mini=true&url=' +
                currenturl +
                '&title=' +
                $page.contentfulPosts.title +
                '&summary=' +
                $options.filters.excerptF($page.contentfulPosts.postDescription, 15)
              "
              target="_blank"
              class="cursor-pointer inline-block focus:outline-none text-teal-500 hover:text-teal-700 focus:text-teal-700 flex justify-center items-center"
            >
              <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 24 24">
                <path
                  d="M16 9a4.9997 4.9997 0 00-5 5v6h2v-6a3 3 0 016 0v6h2v-6a4.9997 4.9997 0 00-5-5zm0-2a6.9998 6.9998 0 00-7 7v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a1.0001 1.0001 0 012 0v7c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1v-7a6.9999 6.9999 0 00-7-7zM1 9c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1V9zm2 1v10h2V10H3zM4 3c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1zM1 4c0-1.6568 1.3432-3 3-3 1.6569 0 3 1.3432 3 3 0 1.6569-1.3431 3-3 3-1.6568 0-3-1.3431-3-3z"
                />
              </svg>
            </a>
          </div>
        </div>

        <h1
          v-html="$page.contentfulPosts.title"
          class="text-4xl font-bold text-gray-800 py-4 text-center w-full mt-6"
        ></h1>
        <div
          class="w-full flex flex-wrap justify-center items-center font-normal text-base text-gray-700"
        >
          <span class="mr-2">
            Posted
            <span class="font-semibold">
                {{ $page.contentfulPosts.createdAt | formatDate }}
            </span>
          </span>
          <span class="font-semibold"> - {{ avgReadTime }} min read</span>
        </div>
        <div
          class="w-full flex flex-wrap justify-center items-center font-normal text-base text-gray-700 self-auto my-4"
        >
          <span class="mr-2">By</span>
          <g-image
            :src="$page.contentfulPosts.author.authorImage.file.url"
            alt="author-avatar"
            class="bg-white shadow-md rounded-full h-12 w-12 mx-3"
          />
          <span class="mr-2 font-semibold text-lg text-gray-700"
            >{{ $page.contentfulPosts.author.firstName }}
            {{ $page.contentfulPosts.author.lastName }}</span
          >
        </div>
        <g-image
          class="rounded-lg my-6 shadow-lg object-cover w-full"
          style="max-height: 18rem"
          quality="30"
          :src="$page.contentfulPosts.postCover.file.url"
          :alt="$page.contentfulPosts.postCover.file.fileName"
        />
        <div
          class="wp-content py-10 w-full"
          v-html="richTextToHTML($page.contentfulPosts.postContent)"
        ></div>

        <div
          class="w-full flex flex-wrap justify-between items-center border-t border-gray-400 mb-12"
        >
          <div
            class="w-full md:w-auto flex flex-wrap flex-row justify-start content-center items-center my-6"
          >
            <a
              :href="`/tag/${data.id}`"
              class="font-normal rounded-full border border-teal-500 py-1 px-3 text-base text-teal-500 hover:text-teal-600 cursor-pointer m-2"
              v-for="(data, i) in $page.contentfulPosts.category"
              :key="i"
            >
              {{ data.name }}
            </a>
          </div>
          <p class="text-xl font-normal text-gray-600 px-2">
            {{ $page.contentfulPosts.createdAt | formatDate }}
          </p>
        </div>
      </div>
    </div>
    <client-only>
      <div
        class="flex flex-wrap justify-center items-center w-full container mx-auto pb-16 px-8 md:px-0"
      >
        <vue-disqus
          class="w-full"
          :title="$page.contentfulPosts.postSlug"
          shortname="https-4unaturalistic-netlify-com"
          :identifier="$page.contentfulPosts.id"
        ></vue-disqus>
      </div>
    </client-only>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
    contentfulPosts(path: $path) {
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
        postContent
        postDescription
        category{
          id
          name
        }
        updatedAt
        createdAt
    }
}
</page-query>

<script>
const dayjs = require("dayjs");
import VueDisqus from "vue-disqus/dist/vue-disqus.vue";
const { BLOCKS } = require("@contentful/rich-text-types");
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

export default {
  data() {
    return {
      avgReadTime: 0,
      currenturl: "",
    };
  },
  methods: {
    caclAvgReadTime() {
      let words = this.richTextToHTML(this.$page.contentfulPosts.postContent).split(" ")
        .length;
      // Formula- numberofwords/170;
      this.avgReadTime = Math.round(words / 170);
    },
    richTextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
          },
        },
      });
    },
  },
  components: {
    VueDisqus,
  },
  metaInfo() {
    return {
      title: this.$page.contentfulPosts.postTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.contentfulPosts.postDescription,
        },
      ],
    };
  },
  filters: {
    formatDate(val) {
      if (val) {
        return dayjs(String(val)).format("D, MMMM YYYY");
      }
    },
    excerptF(sentence, words = 10) {
      var result = sentence;
      var resultArray = result.split(" ");
      if (resultArray.length > words) {
        resultArray = resultArray.slice(0, words);
        result = resultArray.join(" ") + " …";
      }
      return result;
    },
  },
  mounted() {
    //Open all link in new window
    let links = document.querySelectorAll(".wp-content a");
    links.forEach((el) => {
      el.target = "_blank";
      el.attributes.href;
    });
    this.caclAvgReadTime();

    this.currenturl = window.location.href;
  },
};
</script>

<style lang="scss">
.wp-content {
  @apply block w-full flex-col justify-center text-left text-gray-800;
  max-width: 100vw;

  iframe {
    @apply w-full block h-full;
  }

  a {
    @apply text-teal-500 font-semibold;
    margin: 0 0.4rem !important;
  }

  a:hover {
    @apply text-teal-600 underline;
  }

  p {
    @apply mt-4 mb-8 text-lg leading-relaxed;
    overflow-wrap: break-word;
  }

  ul {
    @apply px-6 my-4 text-gray-700 text-lg relative;

    li {
      @apply flex flex-wrap justify-start items-start relative;

      * {
        @apply m-0 p-0 inline-block;
      }

      &::before {
        content: "\2022";
        @apply text-teal-600;
        font-weight: bold;
        width: 1em;
        margin-left: -1em;
        @apply inline-block absolute;
      }
    }
  }

  ol {
    @apply px-6 my-4 text-gray-700 text-lg;

    li {
      @apply list-decimal text-gray-600 flex flex-wrap justify-start items-start relative;

      * {
        @apply m-0 p-0 inline-block;
      }
    }
  }

  h1 {
    @apply text-4xl font-semibold mt-4;
  }

  h2 {
    @apply text-3xl font-semibold mt-4;
  }

  h3 {
    @apply text-2xl font-semibold mt-4;
  }

  h4 {
    @apply text-xl font-semibold mt-4;
  }

  h5 {
    @apply text-lg font-semibold mt-4;
  }

  hr {
    @apply text-teal-500 my-4;
  }

  figure {
    @apply max-w-full my-2;

    figcaption {
      @apply text-gray-600 text-sm font-semibold px-2 py-1 bg-teal-100 inline-block mt-2;
    }
  }

  img {
    @apply rounded-lg mx-auto bg-cover;
  }

  blockquote {
    @apply px-6 bg-teal-100 border-l-4 border-teal-500 py-4 my-4 mx-1;

    p {
      @apply m-0;
    }

    @media (min-width: 768px) {
      @apply mx-6;
    }
  }
}

.color-1 {
  background: #ffffff70;
}
</style>
