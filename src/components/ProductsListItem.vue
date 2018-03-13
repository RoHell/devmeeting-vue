<template lang="pug">
  .list-item
    .list-item__name {{ item.name }}
    .list-item__remove(@click='removeItem(item.id)') x
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    removeItem(id) {
      this.$store.dispatch('removeItem', id);
    }
  }
}
</script>

<style lang="sass" scoped>
  .list-item
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 0 0
    .list-item__name
      padding-right: 10px
      overflow-x: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .list-item__remove
      cursor: pointer
</style>
