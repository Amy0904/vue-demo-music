<template>
  <div class="user-center">
    <div
      class="back"
      @click="back"
    >
      <i class="icon-back"></i>
    </div>
    <div class="switches-wrapper">
      <switches
        @switch="switchItem"
        :switches="switches"
        :currentIndex="currentIndex"
      ></switches>
    </div>
    <div
      class="play-btn"
      ref="playBtn"
      @click="random"
    >
      <i class="icon-play"></i>
    </div>
  </div>
</template>

<script>
import Switches from 'base/switches'
export default {
  name: 'user-center',
  components: {
    Switches
  },
  directives: {},
  filters: {},
  extends: {},
  mixins: {},
  props: {},
  data() {
    return {
      switches: [
        { name: '我喜欢的' },
        { name: '最近听的' }
      ],
      currentIndex: 0
    }
  },
  beforeCreate() { },
  //生命周期 - 创建之前
  created() { },
  //生命周期 - 挂载之前
  beforeMount() { },
  mounted() {

  },
  //生命周期 - 更新之前
  beforeUpdate() { },
  //生命周期 - 更新之后
  updated() { },
  //生命周期 - 销毁之前
  beforeDestroy() { },
  //生命周期 - 销毁完成
  destroyed() { },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  computed: {

  },
  watch: {

  },
  methods: {
    switchItem(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'
.user-center
  position fixed
  top 0
  bottom 0
  z-index 100
  width 100%
  background $color-background
</style>