<template>
  <Header></Header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">databinding</router-link>
  </nav>
  <router-view/>
</template>



<script>
// 가져올 컴포넌트
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  /* @import url('assets/css/reset.css');
  @import url('assets/css/common.css');
  @import url('assets/css/ui.css'); */
</style>
