<template>
    <header class="bg-white w-full flex flex-wrap justify-center items-center content-center border-b border-gray-300 mt-2 lg:mt-0">
      <div style="background: linear-gradient(90deg, rgba(56,161,105,1) 0%, rgba(79,209,197,1) 100%);" class="pb-1 w-full absolute top-0"></div>
      <div class="z-50 md:px-6 lg:container w-full flex lg:flex-wrap flex-wrap-reverse justify-center content-center items-center">
        <!-- <div class="text-lg font-medium flex flex-wrap justify-center content-center items-center inline-block"> -->
          <g-link to="/" title="Back to Home" class="hidden lg:inline-block text-gray-700 no-underline cursor-pointer flex flex-wrap justify-center content-center items-center">
            <g-image src="/main-logo.svg" alt="4unaturalistic-logo" class=" h-12 w-12 inline-block mr-2"/>
            <span class="inline-block font-semibold text-xl">{{ $static.metadata.siteName }}</span>
          </g-link>
          <div id="nav" class="flex flex-wrap mr-0 xl:mr-32 md:ml-4 text-lg font-normal">
            <g-link title="home" class="focus:outline-none focus:text-teal-700 mr-4 ml-2 py-5 text-gray-700 hover:text-teal-600" to="/" exact>Home</g-link>
            <g-link title="about" class="focus:outline-none focus:text-teal-700 mr-4 ml-2 py-5 text-gray-700 hover:text-teal-600" to="/about/" exact>About</g-link>
            <g-link title="blog" class="focus:outline-none focus:text-teal-700 mr-4 ml-2 py-5 text-gray-700 hover:text-teal-600" to="/blog/">Blog</g-link>
            <div class="flex flex-wrap flex-col" v-click-outside="closeServices" @blur="closeServices">
              <button @click="services=!services" type="button" class="focus:outline-none focus:text-teal-700 mr-4 ml-2 py-5 text-gray-700 hover:text-teal-600">
                Services
                <svg class="w-5 h-5 fill-current inline-block" viewBox="0 0 24 24"><path d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"/></svg>
              </button>
              <div class="flex flex-wrap justify-center relative">
                <slide-y-down-transition :duration="{enter:500, exit:100}">
                  <div v-if="services" class="absolute w-56 top-0 border border-gray-200 bg-white rounded-lg shadow-xl flex flex-wrap flex-col py-2">
                    <g-link class="focus:outline-none focus:underline py-1 pl-4 text-gray-600 hover:text-white hover:bg-teal-500" to="/live-blood-cell-analysis">Blood Cell Analysis</g-link>
                    <g-link class="focus:outline-none focus:underline py-1 pl-4 text-gray-600 hover:text-white hover:bg-teal-500" to="/nutritional-counseling">Nutritional Counseling</g-link>
                    <g-link class="focus:outline-none focus:underline py-1 pl-4 text-gray-600 hover:text-white hover:bg-teal-500" to="/sugar-cleanse">Sugar Cleanse</g-link>
                    <g-link @blur.native="services=false" class="focus:outline-none focus:underline py-1 pl-4 text-gray-600 hover:text-white hover:bg-teal-500" to="/first-appointment">First Appointment</g-link>
                  </div>
                </slide-y-down-transition>
              </div>
            </div>
          </div>
        <!-- </div> -->
        <nav class="text-xl font-medium flex flex-wrap justify-center content-center items-center">
          <g-link to="/" class="mr-4 lg:m-0 lg:hidden inline-block text-gray-800 no-underline cursor-pointer inline-block justify-center content-center items-center">
            <g-image src="/main-logo.svg" alt="4unaturalistic-logo" class="h-12 w-12 inline-block"/>
          </g-link>
          <div class="flex-1 block">
            <label class="mr-6 relative justify-center items-center content-center leading-none flex w-full pr-4">
                <input ref="search" title="Search" type="text" placeholder="Search" style="transition: border-color 0.5s;flex-shrink: 1;flex-basis: auto;"
                class="self-stretch py-2 text-base bg-transparent focus:outline-none bg-gray-200 focus:bg-white text-gray-700 rounded pl-5 pr-10 focus:border border-transparent focus:border-teal-500 w-full"/>
                <button title="Go Ahead" type="button" class="absolute top-0 right-0 h-full mr-8 focus:outline-none text-gray-600 hover:text-teal-500 focus:text-teal-500">
                    <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 24 24"><path d="M11 4a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"/><path d="M15.943 15.943a1 1 0 011.414 0l4.35 4.35a1 1 0 01-1.414 1.414l-4.35-4.35a1 1 0 010-1.414z" /></svg>
                </button>
            </label>
          </div>
          <button :title="darkmode ? 'Night Light' : 'Day Light'" @click="darkmode=!darkmode" type="button" target="_blank" class="cursor-pointer h-full mr-0 md:mr-6 xl:mr-12 focus:outline-none text-gray-600 hover:text-teal-500 focus:text-teal-500 flex justify-center items-center">
            <zoom-center-transition :duration="500">
              <svg v-if="darkmode" class="w-5 h-5 inline-block fill-current" viewBox="0 0 24 24"><path d="M12.1 22h-.9c-5.5-.5-9.5-5.4-9-10.9.4-4.8 4.2-8.6 9-9 .4 0 .8.2 1 .5.2.3.2.8-.1 1.1-1 1.3-1.3 2.9-1.1 4.5.2 1.6 1.1 3 2.4 3.9 2.1 1.6 5 1.6 7.1 0 .3-.2.7-.3 1.1-.1.3.2.5.6.5 1-.2 2.7-1.5 5.1-3.6 6.8-1.9 1.4-4.1 2.2-6.4 2.2zM9.3 4.4c-2.9 1-4.9 3.6-5.2 6.8-.4 4.4 2.8 8.3 7.2 8.7 2.1.2 4.2-.4 5.8-1.8 1.1-.9 1.9-2.1 2.4-3.4-2.5.9-5.3.5-7.5-1.1-1.7-1.3-2.8-3.1-3.2-5.2-.1-1.4.1-2.7.5-4z"/></svg>
              <svg v-if="!darkmode" class="w-5 h-5 inline-block fill-current" viewBox="0 0 24 24"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zM12 0a1 1 0 011 1v2a1 1 0 11-2 0V1a1 1 0 011-1zM12 20a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM3.513 3.513a1 1 0 011.414 0l1.42 1.42a1 1 0 01-1.414 1.414l-1.42-1.42a1 1 0 010-1.414zM17.653 17.653a1 1 0 011.414 0l1.42 1.42a1 1 0 01-1.414 1.414l-1.42-1.42a1 1 0 010-1.414zM0 12a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zM20 12a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM6.347 17.653a1 1 0 010 1.414l-1.42 1.42a1 1 0 01-1.414-1.414l1.42-1.42a1 1 0 011.414 0zM20.487 3.513a1 1 0 010 1.414l-1.42 1.42a1 1 0 11-1.414-1.414l1.42-1.42a1 1 0 011.414 0z"/></svg>
            </zoom-center-transition>
          </button>   
          
          <g-link title="Twitter" href="https://twitter.com/4unaturalistic" target="_blank" class="cursor-pointer hidden md:inline-block mr-4 focus:outline-none text-gray-800 hover:text-teal-500 focus:text-teal-500 flex justify-center items-center">
            <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 512 416"><path d="M459.37 103.634c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954C87.39 82.842 165.035 124.425 252.1 128.974c-1.624-7.797-2.599-15.918-2.599-24.04C249.501 47.106 296.283 0 354.435 0c30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
          </g-link>
          <g-link title="Youtube" href="https://www.youtube.com/channel/UCSD22hYdpUh7DK24cQKLBLQ" target="_blank" class="cursor-pointer hidden md:inline-block mr-4 focus:outline-none text-gray-800 hover:text-teal-500 focus:text-teal-500 flex justify-center items-center">
            <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 547 384"><path d="M534.722 60.083c-6.281-23.65-24.787-42.276-48.284-48.597C443.848 0 273.067 0 273.067 0S102.287 0 59.696 11.486c-23.497 6.322-42.003 24.947-48.284 48.597C0 102.95 0 192.388 0 192.388s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C102.287 384 273.067 384 273.067 384s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V111.185l142.739 81.205-142.739 81.201z"/></svg>
          </g-link> 
          <g-link title="Facebook" href="https://www.facebook.com/4unaturalistic/" target="_blank" class="cursor-pointer hidden md:inline-block mr-4 focus:outline-none text-gray-800 hover:text-teal-500 focus:text-teal-500 flex justify-center items-center">
              <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 444 448"><path d="M221.746 0c-208.1 0-301.5 246-139.4 368.6V448l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7.1-114.5-99.2-207.3-221.7-207.3zm23.4 278.1l-57.4-59.6-110.4 61.1 121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"/></svg>
          </g-link>
          <g-link title="Instagram" href="https://www.instagram.com/4unaturalistic/" target="_blank" class="cursor-pointer hidden md:inline-block mr-4 focus:outline-none text-gray-800 hover:text-teal-500 focus:text-teal-500 flex justify-center items-center">
            <svg class="w-4 h-4 inline-block fill-current" viewBox="0 0 449 449"><path d="M224.175 109.175c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1-26.3 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-47.8 224.5c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9-32.6 0-102.7 2.6-132.1-9-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1 0-32.6-2.6-102.7 9-132.1 7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9 32.6 0 102.7-2.6 132.1 9 19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1 0 32.6 2.7 102.7-9 132.1z"/></svg>
          </g-link>
        </nav>
      </div>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { ZoomCenterTransition, SlideYDownTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'
export default {
    components: {
        ZoomCenterTransition,
        SlideYDownTransition
    },
    data(){
      return{
        darkmode: false,
        services: false
      }
    },
    directives: {
      ClickOutside
    },
    methods:{
      closeServices(){
        this.services = false;
        // console.log(this.$refs.search.focus())
      },
      focusSearch(e){
        if(e.which===191) {
          e.preventDefault();
          this.$refs.search.focus()
        }
      }
    },
    mounted(){
      window.addEventListener('keyup', this.focusSearch)
    }
}
</script>

<style lang="scss" scoped>
  #nav .active{
    @apply border-b-2 border-teal-400 text-teal-600;
  }
</style>