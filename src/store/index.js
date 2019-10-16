import Vue from 'vue'
import Vuex from 'vuex'

import { playMode } from 'common/js/config'
import {
  loadSearch,
  saveSearch,
  clearSearch,
  deleteSearch,
  savePlay,
  saveFavorite,
  deleteFavorite
} from 'common/js/cache'
import { shuffle } from 'common/js/util'

import * as types from './mutation-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    singer: {},
    playing: false,
    fullScreen: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.dequence,
    currentIndex: -1,
    disc: {},
    topList: {},
    searchHistory: loadSearch(),
    playHistory: [],
    favoriteList: []
  },
  getters: {
    singer: state => {
      return state.singer
    },
    playing: state => {
      return state.playing
    },
    fullScreen: state => {
      return state.fullScreen
    },
    playList: state => {
      return state.playlist
    },
    sequenceList: state => {
      return state.sequenceList
    },
    mode: state => {
      return state.mode
    },
    currentIndex: state => {
      return state.currentIndex
    },
    currentSong: state => {
      return state.playlist[state.currentIndex]
    }
  },
  mutations: {
    [types.SET_SINGER] (state, singer) {
      state.singer = singer
    },
    [types.SET_PLAYING_STATE] (state, flag) {
      state.playing = flag
    },
    [types.SET_FULL_SCREEN] (state, flag) {
      state.fullScreen = flag
    },
    [types.SET_PLAYLIST] (state, list) {
      state.playlist = list
    },
    [types.SET_SEQUENCE_LIST] (state, list) {
      state.sequenceList = list
    },
    [types.SET_PLAY_MODE] (state, mode) {
      state.mode = mode
    },
    [types.SET_CURRENT_INDEX] (state, index) {
      state.currentIndex = index
    },
    [types.SET_DISC] (state, disc) {
      state.disc = disc
    },
    [types.SET_TOP_LIST] (state, topList) {
      state.topList = topList
    },
    [types.SET_SEARCH_HISTORY] (state, history) {
      state.searchHistory = history
    },
    [types.SET_PLAY_HISTORY] (state, history) {
      state.playHistory = history
    },
    [types.SET_FAVORITE_LIST] (state, list) {
      state.favoriteList = list
    }
  },
  actions: {
    selectPlay: ({ commit, state }, { list, index }) => {
      commit(types.SET_SEQUENCE_LIST, list)
      if (state.mode === playMode.random) {
        let randomList = shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList, list[index])
      } else {
        commit(types.SET_PLAYLIST, list)
      }
      commit(types.SET_CURRENT_INDEX, index)
      commit(types.SET_FULL_SCREEN, true)
      commit(types.SET_PLAYING_STATE, true)
    },
    randomPlay: ({ commit }, { list }) => {
      commit(types.SET_PLAY_MODE, playMode.random)
      commit(types.SET_SEQUENCE_LIST, list)
      let randomList = shuffle(list)
      commit(types.SET_PLAYLIST, randomList)
      commit(types.SET_CURRENT_INDEX, 0)
      commit(types.SET_FULL_SCREEN, true)
      commit(types.SET_PLAYING_STATE, true)
    },
    insertSong: ({ commit, state }, song) => {
      let playlist = state.playlist.slice()
      let sequenceList = state.sequenceList.slice()
      let currentIndex = state.currentIndex
      // 记录当前歌曲
      let currentSong = playlist[currentIndex]
      // 查找当前列表中是否有待插入的歌曲并返回其索引
      let fpIndex = findIndex(playlist, song)
      // 因为是插入歌曲， 所以索引 + 1
      currentIndex += 1
      // 插入这首歌到当前索引位置
      playlist.splice(currentIndex, 0, song)
      // 如果已经包含了这首歌
      if (fpIndex > -1) {
        // 如果当前插入的序号大于列表中的序号
        if (currentIndex > fpIndex) {
          playlist.splice(fpIndex, 1)
          currentIndex -= 1
        } else {
          playlist.splice(fpIndex + 1, 1)
        }
      }
      let currentSIndex = findIndex(sequenceList, currentSong) + 1
      let fsIndex = findIndex(sequenceList, song)
      sequenceList.splice(currentSIndex, 0, song)

      if (fsIndex > -1) {
        if (currentSIndex > fsIndex) {
          sequenceList.splice(fsIndex, 1)
        } else {
          sequenceList.splice(fsIndex + 1, 1)
        }
      }

      commit(types.SET_PLAYLIST, playlist)
      commit(types.SET_SEQUENCE_LIST, sequenceList)
      commit(types.SET_CURRENT_INDEX, currentIndex)
      commit(types.SET_FULL_SCREEN, true)
      commit(types.SET_PLAYING_STATE, true)
    },
    saveSearchHistory: ({ commit }, query) => {
      commit(types.SET_SEARCH_HISTORY, saveSearch(query))
    },
    deleteSearchHistory: ({ commit }, query) => {
      commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
    },
    clearSearchHistory: ({ commit }) => {
      commit(types.SET_SEARCH_HISTORY, clearSearch())
    },
    deleteSong: ({ commit, state }, song) => {
      let playlist = state.playlist.slice()
      let sequenceList = state.sequenceList.slice()
      let currentIndex = state.currentIndex
      let pIndex = findIndex(playlist, song)
      playlist.splice(pIndex, 1)
      let sIndex = findIndex(sequenceList, song)
      sequenceList.splice(sIndex, 1)
      if (currentIndex > pIndex || currentIndex === playlist.length) {
        currentIndex -= 1
      }
      commit(types.SET_PLAYLIST, playlist)
      commit(types.SET_SEQUENCE_LIST, sequenceList)
      commit(types.SET_CURRENT_INDEX, currentIndex)

      if (!playlist.length) {
        commit(types.SET_PLAYING_STATE, false)
      } else {
        commit(types.SET_PLAYING_STATE, true)
      }
    },
    deleteSongList: ({ commit }) => {
      commit(types.SET_CURRENT_INDEX, -1)
      commit(types.SET_PLAYLIST, [])
      commit(types.SET_SEQUENCE_LIST, [])
      commit(types.SET_PLAYING_STATE, false)
    },
    savePlayHistory: ({ commit }, song) => {
      commit(types.SET_PLAY_HISTORY, savePlay(song))
    },
    saveFavoriteList: ({ commit }, song) => {
      commit(types.SET_FAVORITE_LIST, saveFavorite(song))
    },
    deleteFavoriteList: ({ commit }, song) => {
      commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
    }
  }
})

export default store

function findIndex (list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}
