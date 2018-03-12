<template lang="pug">
  #app
    products
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'app',
  components: {
    Products
  }
}
</script>

<style lang="sass" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
