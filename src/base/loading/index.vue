<template>
  <div class="loading">
    <img
      src="./loading.gif"
      width="24"
      height="24"
      alt=""
    >
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'loading',
  components: {

  },
  directives: {},
  filters: {},
  extends: {},
  mixins: {},
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  },
  data() {
    return {

    };
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
.loading
  width 100%
  text-align center
  .desc
    line-height 20px
    font-size $font-size-small
    color $color-text-l
</style>