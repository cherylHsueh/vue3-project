<template>
  <div>
    <the-header></the-header>
    <the-sidebar></the-sidebar>
    <div class="content">
      <router-view></router-view>
    </div>

    <button @click="change">
      按我
    </button>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheSidebar from '@/components/layout/TheSidebar'
export default {
  name: 'Home',

  components: {
    TheHeader,
    TheSidebar
  },

  data: () => ({
    show: false
  }),

  methods: {
    change () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  position: absolute;
  top: 250px;
  left: 200px;
  width: calc(100% - 200px) ;
  height: 100%;
  // background-color: orange;
}
</style>
