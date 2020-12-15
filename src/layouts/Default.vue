<template>
  <div class="font-primary antialiased bg-gray-100 min-h-screen">
    <Header></Header>
    <div>
      <transition name="fade" appear>
        <main>
          <slot/>
        </main>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import '../assets/fonts.scss'
import '../assets/base-btn.scss'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

a {
  @apply focus:outline-none;
}
</style>
