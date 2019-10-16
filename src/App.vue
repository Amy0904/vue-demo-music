<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <player></player> -->
  </div>
</template>

<script>
import MHeader from 'src/components/m-header'
// import Player from 'src/components/plays'
import Tab from 'src/components/tab'

export default {
  name: 'app',
  components: {
    MHeader,
    // Player,
    Tab
  }
}
</script>

<style>
</style>
