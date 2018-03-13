<template lang="pug">
  .products-actions
    button(@click="sort", :disabled="!items.length") Sortuj
    button(@click="removeAllItems", :disabled="!items.length") Wyczyść listę
    button(@click="reloadItems") Załaduj listę
</template>

<script>
  export default {
    data () {
      return {
        order: false
      }
    },
    computed: {
      items () {
        return this.$store.getters.getItems
      }
    },
    methods: {
      sort () {
        this.order = !this.order
        this.$store.dispatch('sortItems', this.order)
      },
      removeAllItems () {
        this.$store.dispatch('removeAllItems')
      },
      reloadItems () {
        this.$store.dispatch('fetchItems')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .products-actions
    * + *
      margin: 10px 0 0 10px
</style>
