<template>
  <div>
    <Head></Head>
    <Left></Left>
  </div>
</template>

<script>
import Left from './Left.vue'
import Head from './head.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Left,
    Head
  }
}
</script>
