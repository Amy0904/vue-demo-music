<template>
  <ul class="switches">
    <li
      class="switch-item"
      v-for="(item, index) in switches"
      @click="switchItem(index)"
      :key="index"
      :class="{'active': currentIndex === index}"
    >
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
//import x from ''
export default {
  name: '',
  components: {

  },
  directives: {},
  filters: {},
  extends: {},
  mixins: {},
  props: {
    switches: {
      type: Array,
      default() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {

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
      this.$emit('switch', index)
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'
.switches
  display flex
  align-items center
  width 240px
  margin 0 auto
  border 1px solid $color-highlight-background
  border-radius 5px
  .switch-item
    flex 1
    padding 8px
    text-align center
    font-size $font-size-medium
    color $color-text-d
    &.active
      background $color-highlight-background
      color $color-text
</style>