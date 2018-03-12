<template lang="pug">
  .products-list
    products-list-item(
      v-for='item in items',
      :key='item.name',
      :item='item')    
    .products-list__no-item(v-if="!items.length") Brak produktow!
</template>

<script>
import ProductsListItem from './ProductsListItem'
export default {
  components: {ProductsListItem},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
  .products-list
</style>
