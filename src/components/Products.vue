<template lang="pug">
  .products
    h1 Lista
    products-list(:items='items')
    products-list-submit
</template>

<script>
import ProductsList from './ProductsList.vue'
import ProductsListSubmit from './ProductsListSubmit.vue'

export default {
  components: {
    ProductsList,
    ProductsListSubmit
  },
  created() {
    this.$store.dispatch('getItems')
  },
  computed: {
    items () {
      return this.$store.state.list;
    }
  }
}
</script>

<style lang="sass" scoped>
  .products
    margin: 0 auto
    width: 40%
</style>
