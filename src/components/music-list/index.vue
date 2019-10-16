<template>
  <div class="music-list">
    <div
      class="back"
      @click="back"
    >
      <i class="icon-back"></i>
    </div>
    <h1
      class="title"
      v-html="title"
    ></h1>
    <div
      class="bg-image"
      :style="bgStyle"
      ref="bgImage"
    >
      <div class="play-wrapper">
        <div
          ref="playBtn"
          v-show="songs.length > 0"
          class="play"
          @click="random"
        >
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div
        class="filter"
        ref="filter"
      ></div>
    </div>
    <div
      class="bg-layer"
      ref="layer"
    ></div>
    <scroll
      :data="songs"
      @scroll="scroll"
      :listen-scroll="listenScroll"
      :probe-type="probeType"
      class="list"
      ref="list"
    >
      <div class="song-list-wrapper">
        <song-list
          :songs="songs"
          :rank="rank"
          @select="selectItem"
        ></song-list>
      </div>
      <div
        v-show="!songs.length"
        class="loading-container"
      >
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll'
import Loading from 'base/loading'
import SongList from 'base/song-list'

export default {
  name: '',
  components: {
    Scroll,
    Loading,
    SongList
  },
  directives: {},
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

<style lang='stylus' scoped>



//@import url()



</style>