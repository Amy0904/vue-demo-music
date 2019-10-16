<template>
  <div class="tab">
    <router-link
      tag="div"
      class="tab-item"
      to="/recommend"
    >
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/singer"
    >
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/rank"
    >
      <span class="tab-link">排行</span>
    </router-link>
    <router-link
      tag="div"
      class="tab-item"
      to="/search"
    >
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'tab',
  components: {

  },
  directives: {},
  filters: {},
  extends: {},
  mixins: {},
  props: {},
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

  },
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'
.tab
  display flex
  height 44px
  line-height 44px
  font-size @font-size-medium
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color $color-text-l
    &.router-link-active
      .tab-link
        color $color-theme
        border-bottom 2px solid $color-theme
</style>