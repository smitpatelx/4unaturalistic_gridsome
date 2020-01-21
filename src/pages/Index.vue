<template>
  <Layout>
    <div class="w-full flex flex-wrap px-6 lg:px-32 xl:px-40">
      <div class="w-full md:w-1/2 flex flex-wrap justify-start content-center py-10 lg:py-40 pr-10">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <div class="w-full flex font-bold justify-start content-center my-4">
          <g-image alt="Example image" src="~/favicon.svg" class="w-10 lg:w-12" />
          <h1 class="ml-2 text-teal-700 text-3xl lg:text-4xl">naturalistic</h1>
        </div>
        
        <h2 class="font-bold text-teal-600 w-full text-left text-3xl lg:text-4xl xl:text-5xl">
          Inspired Through Healing
        </h2>
        <p class="font-medium text-lg lg:text-xl xl:text-2xl text-gray-500 w-full text-left pt-6">
          It’s always a pleasure assisting families and individuals in quest to take control of their life.
        </p>
        
        <div class="flex w-full flex-wrap mt-6">
          <a href="https://squareup.com/appointments/buyer/widget/r8rbsgtcveknor/0HW43593W5BJV" target="_blank"
            style="transition: all 0.5s;"
            class="focus:outline-none focus:shadow-outline text-lg lg:text-xl px-6 py-2 m-2 text-white bg-teal-600 hover:bg-teal-500 rounded shadow-lg hover:shadow-xl flex justify-center items-center">
            Book an Appoinment
            <svg class="w-5 h-5 inline-block fill-current ml-3" viewBox="0 0 20 22"><path d="M3 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zM0 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V5z"/><path d="M14 0a1 1 0 011 1v4a1 1 0 11-2 0V1a1 1 0 011-1zM6 0a1 1 0 011 1v4a1 1 0 01-2 0V1a1 1 0 011-1zM0 9a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"/></svg>
          </a>
          <g-link to="/contact" 
            style="transition: all 0.5s;"
            class="focus:outline-none focus:shadow-outline text-lg lg:text-xl px-6 py-2 m-2 text-teal-500 bg-white hover:bg-teal-200 hover:text-teal-700 rounded shadow-lg hover:shadow-xl flex justify-center items-center">
            Contact
            <svg class="w-5 h-5 inline-block fill-current ml-3" viewBox="0 0 23 23"><path d="M22 0h-6c-.6 0-1 .4-1 1s.4 1 1 1h4.2l-5.5 5.5c-.3.3-.3.9 0 1.3.2.1.5.2.7.2.2 0 .5-.1.6-.3l5-5V7c0 .6.4 1 1 1s1-.4 1-1V1c0-.6-.4-1-1-1z"/><path d="M19 22.9h-.3c-3.2-.4-6.4-1.5-9.1-3.2-2.5-1.6-4.7-3.8-6.3-6.3C1.5 10.7.4 7.5.1 4.3c0-.8.2-1.6.7-2.2.5-.6 1.2-1 2-1.1h3.3c1.5 0 2.8 1.1 3 2.6.1.9.3 1.8.6 2.6.4 1.1.1 2.3-.7 3.2l-.7.7c1.2 1.8 2.7 3.4 4.6 4.6l.7-.7c.8-.8 2.1-1.1 3.2-.7.8.3 1.7.5 2.6.6 1.5.2 2.6 1.5 2.6 3v3c0 .8-.3 1.6-.9 2.1-.6.5-1.3.9-2.1.9zM6.1 3h-3c-.3 0-.6.2-.8.4-.1.2-.2.4-.2.7C2.4 7 3.4 9.8 5 12.3c1.5 2.3 3.4 4.3 5.7 5.7 2.5 1.6 5.3 2.6 8.2 2.9.4 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-3c0-.5-.4-.9-.9-1-1-.1-2-.4-3-.8-.4-.1-.8-.1-1.1.2l-1.3 1.3c-.3.3-.8.4-1.2.2-2.7-1.5-4.9-3.7-6.4-6.4-.1-.4 0-.9.3-1.2l1.3-1.3c.2-.2.3-.7.2-1-.4-1-.6-2-.8-3 0-.5-.5-.9-1-.9z"/></svg>
          </g-link>
        </div>
      </div>
      <!-- Vector Image Doctor -->
      <div class="w-full md:w-1/2 flex flex-wrap justify-center items-center content-center px-6 pb-16 md:pb-0">
        <g-image alt="Doctor of natural medicine" src="/svg/undraw_medicine_b1ol.svg" class="w-full"></g-image>
      </div>
    </div>

    <div class="w-full flex flex-wrap justify-center content-center items-center">
        <h2 class="w-full text-center text-teal-600 font-medium text-4xl">How I can help you
          <svg class="w-12 h-12 inline-block fill-current text-teal-500" viewBox="0 0 20 20"><path d="M12.5 1c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5zM4 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM.5 8c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5S.5 8.28.5 8zm19 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5zM12 5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM1 11.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM7.5 19c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zM8 1.5c.28 0 .5-.22.5-.5S8.28.5 8 .5s-.5.22-.5.5.22.5.5.5zM9 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm7 1.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm1 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm1-5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2.5 9c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zM12 15c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-.5 4c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5-.22-.5-.5zM8 6.5c-.83 0-1.5.67-1.5 1.5S7.17 9.5 8 9.5 9.5 8.83 9.5 8 8.83 6.5 8 6.5zM7 16c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm5-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM10.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" /></svg>
        </h2>
        <div class="w-full flex flex-wrap container mx-auto mt-10 md:mt-16">
          <div class="w-full lg:w-1/2 p-6">
            <div class="bg-white shadow-lg rounded-lg py-8 px-10">
              <h3 class="text-xl lg:text-2xl font-semibold flex flex-wrap justify-start items-center text-gray-700 relative pl-8">
                  <svg class="w-6 h-6 absolute left-0 fill-current text-teal-500" viewBox="0 0 24 24"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" /><path d="M17.31 8.043a1 1 0 010 1.414l-6.206 6.5a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.414l2.293 2.293 5.5-5.793a1 1 0 011.414 0z" fill="#fff"/></svg>
                Nutritional Counseling</h3>
              <p class="text-lg lg:text-xl font-normal text-gray-600 mt-2 mb-6">The client receives a detailed report of findings from the analysis done and an elaborate nutritional program that includes:</p>
              <ul class="text-lg text-teal-600 mb-6 list-disc px-5">
                <li>Dietary modification</li>
                <li>Detox plan + a USB key with various meal plan</li>
                <li>Strategy for emotional release</li>
                <li>Food to avoid and foods that are beneficial</li>
              </ul>
              <div class="w-full flex justify-center items-center">
                <a style="transition: all 0.5s;" href="" class="focus:outline-none focus:shadow-outline bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded shadow-lg font-semibold">I want to be healthy</a>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 p-6">
            <div class="bg-white shadow-lg rounded-lg py-8 px-10">
              <h3 class="text-xl lg:text-2xl font-semibold flex flex-wrap justify-start items-center text-gray-700 relative pl-8">
                  <svg class="w-6 h-6 absolute left-0 fill-current text-teal-500" viewBox="0 0 24 24"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" /><path d="M17.31 8.043a1 1 0 010 1.414l-6.206 6.5a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.414l2.293 2.293 5.5-5.793a1 1 0 011.414 0z" fill="#fff"/></svg>
                The Sugar Cleanse Workshop</h3>
              <p class="text-lg lg:text-xl font-normal text-gray-600 mt-2 mb-6">Do you want to reset your metabolism and get rid of gut problems, blood sugar imbalance, hormonal imbalance, and infertility? Sugar Cleanse includes:</p>
              <ul class="text-lg text-teal-600 mb-6 list-disc px-5">
                <li>Sugar Detox Program + Meal Plans</li>
                <li>Weekly Shopping List</li>
                <li>Bonus Plan</li>
                <li>Food Journal</li>
              </ul>
              <div class="w-full flex justify-center items-center">
                <a style="transition: all 0.5s;" href="" class="focus:outline-none focus:shadow-outline bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded shadow-lg font-semibold">I want to be fit</a>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-wrap justify-center content-center">
            <div class="w-full lg:w-1/2 p-6">
              <div class="bg-white shadow-lg rounded-lg py-8 px-10">
                <h3 class="text-xl lg:text-2xl font-semibold flex flex-wrap justify-start items-center text-gray-700 relative pl-8">
                  <svg class="w-6 h-6 absolute left-0 fill-current text-teal-500" viewBox="0 0 24 24"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" /><path d="M17.31 8.043a1 1 0 010 1.414l-6.206 6.5a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.414l2.293 2.293 5.5-5.793a1 1 0 011.414 0z" fill="#fff"/></svg>
                  Live Blood Cell Analysis
                </h3>
                <p class="text-lg lg:text-xl font-normal text-gray-600 mt-2 mb-6">Advanced Applied Microscopy. This workshop will provide:</p>
                <ul class="text-lg text-teal-600 mb-6 list-disc px-5">
                  <li>The five underlying causes of disease.</li>
                  <li>Principles of polymorphism.</li>
                  <li>Microscopy equipment demonstration.</li>
                  <li>Certificate of complition</li>
                </ul>
                <div class="w-full flex justify-center items-center">
                  <a style="transition: all 0.5s;" href="" class="focus:outline-none focus:shadow-outline bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded shadow-lg font-semibold">I want to learn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Natural medicine doctor'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
  color: rgb(72, 187, 120);
}

</style>
