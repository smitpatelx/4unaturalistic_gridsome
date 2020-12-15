<template>
    <div class="w-full bg-gray-200 mt-14 py-10 px-10 flex flex-wrap items-center justify-center">
        <div class="w-full flex flex-wrap justify-between items-center mt-4">
            <g-link to="/" title="Back to Home" class="flex flex-wrap justify-start items-center">
                <g-image src="/main-logo.svg" alt="4unaturalistic-logo" class="h-8 md:h-10 w-12 md:w-16 inline-block self-center"/>
            </g-link>
            <div class="flex flex-wrap justify-end items-center">
                <div class="flex flex-wrap text-lg md:text-xl font-medium px-4 items-center justify-center">
                    <g-link to="/" class="mr-4 cursor-pointer text-gray-500 font-medium hover:text-teal-700 hover:underline focus:underline focus:outline-none">Home</g-link>
                    <g-link to="/faqs" class="mr-4 cursor-pointer text-gray-500 font-medium hover:text-teal-700 hover:underline focus:underline focus:outline-none">Faqs</g-link>
                    <g-link to="/about" class="mr-4 cursor-pointer text-gray-500 font-medium hover:text-teal-700 hover:underline focus:underline focus:outline-none">About</g-link>
                    <g-link to="/blog" class="cursor-pointer text-gray-500 font-medium hover:text-teal-700 hover:underline focus:underline focus:outline-none">Blog</g-link>
                </div>
                <div class="flex flex-wrap text-xl px-4 justify-between ml-2 md:ml-3 items-center">
                    <g-link href="https://twitter.com/4unaturalistic" target="_blank" class="mr-3 cursor-pointer text-gray-500 hover:text-teal-600 hover:underline focus:underline focus:outline-none">
                        <svg class="w-6 h-6 inline-block fill-current" viewBox="0 0 512 416"><path d="M459.37 103.634c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954C87.39 82.842 165.035 124.425 252.1 128.974c-1.624-7.797-2.599-15.918-2.599-24.04C249.501 47.106 296.283 0 354.435 0c30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                    </g-link>
                    <g-link href="https://www.youtube.com/channel/UCSD22hYdpUh7DK24cQKLBLQ" target="_blank" class="mr-3 cursor-pointer text-gray-500 hover:text-teal-600 hover:underline focus:underline focus:outline-none">
                        <svg class="w-6 h-5 inline-block fill-current" viewBox="0 0 547 384"><path d="M534.722 60.083c-6.281-23.65-24.787-42.276-48.284-48.597C443.848 0 273.067 0 273.067 0S102.287 0 59.696 11.486c-23.497 6.322-42.003 24.947-48.284 48.597C0 102.95 0 192.388 0 192.388s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C102.287 384 273.067 384 273.067 384s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V111.185l142.739 81.205-142.739 81.201z"/></svg>
                    </g-link>
                    <g-link href="https://www.facebook.com/4unaturalistic/" target="_blank" class="mr-3 cursor-pointer text-gray-500 hover:text-teal-600 hover:underline focus:underline focus:outline-none">
                        <svg class="w-6 h-5 inline-block fill-current" viewBox="0 0 444 448"><path d="M221.746 0c-208.1 0-301.5 246-139.4 368.6V448l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7.1-114.5-99.2-207.3-221.7-207.3zm23.4 278.1l-57.4-59.6-110.4 61.1 121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"/></svg>
                    </g-link>
                    <g-link href="https://www.instagram.com/4unaturalistic/" target="_blank" class="cursor-pointer text-gray-500 hover:text-teal-600 hover:underline focus:underline focus:outline-none">
                        <svg class="w-5 h-5 inline-block fill-current" viewBox="0 0 449 449"><path d="M224.175 109.175c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1-26.3 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-47.8 224.5c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9-32.6 0-102.7 2.6-132.1-9-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1 0-32.6-2.6-102.7 9-132.1 7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9 32.6 0 102.7-2.6 132.1 9 19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1 0 32.6 2.7 102.7-9 132.1z"/></svg>
                    </g-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>