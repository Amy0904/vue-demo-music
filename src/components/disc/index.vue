<template>
  <music-list :title="title"></music-list>
</template>

<script>
import MusicList from 'src/components/music-list'


export default {
  name: '',
  components: {
    MusicList
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



//@import url()



</style>