<template lang="pug">
  form(@submit.prevent='onSubmit')
    .products-list-submit
      input(
        v-model='input.name',
        name='item',
        v-validate="'required|min:3'")
      button Dodaj
    .products-list-submit__validation(v-show="errors.has('item')") {{ errors.first('item') }}
</template>

<script>
import uuid from 'uuid/v4'

export default {
  data () {
    return {
      input: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.$store.dispatch('addItem', { id: uuid(), ...this.input }
        )
        this.input.name = ''
        this.$validator.reset()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  form
    .products-list-submit
      display: flex
      justify-content: space-between
      margin-top: 20px
      input
        margin-right: 20px
        width: 100%
    .products-list-submit__validation
      text-align: left
      padding-top: 5px
      color: red
      font-size: smaller
</style>
