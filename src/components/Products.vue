<template lang="pug">
  .products
    h1 Lista
    products-actions
    products-list(:items='items')
    products-list-add
</template>

<script>
import ProductsActions from './ProductsActions.vue'
import ProductsList from './ProductsList.vue'
import ProductsListAdd from './ProductsListAdd.vue'

export default {
  data () {
    return {}
  },
  components: {
    ProductsActions,
    ProductsList,
    ProductsListAdd
  },
  created () {
    this.$store.dispatch('fetchItems')
  },
  computed: {
    items () {
      return this.$store.getters.getItems
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
  .products
    margin: 0 auto
    width: 40%
</style>
