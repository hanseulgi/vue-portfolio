<template>
  <header>
    <h1 class="top-title">{{hostname}} portfolio</h1>
    <Projects></Projects>
  </header>
</template>

<script>
import Projects from './Projects.vue'

export default {
  name: 'Header',
  components: {
        Projects
  },
  data() {
    return {
      hostname: '한슬기'
    }
  }
}
</script>

<style scoped>

</style>
