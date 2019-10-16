<template>
  <div
    class="player"
    v-show="playlist.length > 0"
  >
    <div
      class="normal-player"
      v-show="fullScreen"
    >
      <div class="background">
        <img
          :src="currentSong.image"
          width="100%"
          height="100%"
          alt=""
        >
      </div>
      <div class="top">
        <div
          class="back"
          @click="back"
        >
          <i class="icon-back"></i>
        </div>
        <h1
          class="title"
          v-html="currentSong.name"
        ></h1>
        <h2
          class="subtitle"
          v-html="currentSong.singer"
        ></h2>
      </div>
      <div
        class="middle"
        @touchstart.prevent="middleTouchStart"
        @touchmove.prevent="middleTouchMove"
        @touchend="middleTouchEnd"
      >
        <div
          class="middle-l"
          ref="middleL"
        >
          <div
            class="cd-wrapper"
            ref="cdWrapper"
          >
            <div
              class="cd"
              ref="imageWrapper"
            >
              <img
                :src="currentSong.image"
                :class="cdCls"
                ref="image"
                class="image"
                alt=""
              >
            </div>
          </div>
          <div class="playing-lyric-wrapper"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="dot-wrapper">
          <span
            class="dot"
            :class="{'active':currentShow==='cd'}"
          ></span>
          <span
            class="dot"
            :class="{'active':cuttentShow==='lyric'}"
          ></span>
        </div>
        <div class="progress-wrapper">
          <span class="time time-l">{{format(currentTime)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from ''
export default {
  name: '',
  components: {

  },
  filters: {},
  extends: {},
  mixins: {},
  props: {},
  data() {
    return {
      currentTime: 0
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
    ...mapGetters([
      'fullScreen',
      'currentIndex',
      'playing'
    ])
  },
  watch: {

  },
  methods: {
    format(interval = 0) {
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    }
  },
}
</script>

<style lang='scss' scoped>
//@import url()
</style>