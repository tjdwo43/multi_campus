<template>
  <div id="app">
    <incHead :style="{display : isLogin}"></incHead>
    <left :style="{display : isLogin}"></left>

    <router-view/>
  </div>
</template>

<script>
import incHead from '@/components/inc/incHead'
import left from '@/components/inc/left'

export default {
  name: 'App',
  components: {
    incHead,
    left
  },
  data () {
    return {
      isLogin: 'block'
    }
  },
  methods: {
    loginView: function () {
      if (window.location.pathname.split('/')[1] === '') {
        this.isLogin = 'none'
      }
    }
  },
  created: function () {
    this.loginView()
  }
}
</script>
<style src="./assets/css/style.css"></style>
<style src="./assets/css/layout.css"></style>
<style src="./assets/css/common.css"></style>

<style src="./assets/css/button.css"></style>
<style src="./assets/css/NotoSans.css"></style>
