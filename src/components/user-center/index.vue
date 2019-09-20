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
  </div>
</template>

<script>
//import x from ''
export default {
  name: '',
  components: {

  },
  directives() { },
  filters: {},
  extends: {},
  mixins: {},
  props: {},
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

<style lang='scss' scoped>
//@import url()
</style>