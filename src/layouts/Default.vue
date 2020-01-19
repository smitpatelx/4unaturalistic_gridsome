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
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
