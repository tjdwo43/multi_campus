<template>
  <div>
    <Head></Head>
    <left></left>
  </div>
</template>

<script>
import Left from '@/components/left'
import Head from '@/components/head'

export default {
  name: 'home',
  components: {Left, Head},
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<style scoped>

</style>
