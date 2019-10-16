<template>
  <div class="song-list">
    <ul>
      <li
        @click="seletItem(song, index)"
        class="item"
        v-for="(song,index) in songs"
        :key="index"
      >
        <div
          class="rank"
          v-show="rank"
        >
          <span
            :class="getRankCls(index)"
            v-text="getRankText(index)"
          ></span>
        </div>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
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
    songs: {
      type: Array,
      default() {
        return []
      }
    },
    rank: {
      type: Boolean,
      default() {
        return false
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
    selectItem(item, index) {
      this.$emit('select', item, index)
    },
    getDesc(song) {
      return `${song.singer}.${song.album}`
    },
    getRankCls(index) {
      if (index <= 2) {
        return `icon icon${index}`
      } else {
        return 'text'
      }
    },
    getRankText(index) {
      if (index > 2) {
        return index + 1
      }
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.song-list
  .item
    display flex
    align-items center
    box-sizing border-box
    height 64px
    font-size $font-size-medium
    .rank
      flex 0 0 25px
      width 25px
      margin-right 30px
      text-align center
      .icon
        display inline-block
        width 25px
        height 24px
        background-size 25px 24px
        &.icon0
          bg-image('first')
        &.icon1
          bg-image('second')
        &.icon2
          bg-image('third')
      .text
        color $color-theme
        font-size $font-size-large
    .content
      flex 1
      line-height 20px
      overflow hidden
      .name
        no-wrap()
        color $color-text
      .desc
        no-wrap()
        margin-top 4px
        color $color-text-d
</style>