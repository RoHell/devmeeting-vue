import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addItem(state, payload) {
      state.list.push(payload.item);
    },
    setItems(state, payload) {
      state.list = payload.items;
    },
    removeItem(state, payload) {
      let itemToRemoveIndex = state.list.findIndex(item => {
        console.log('payload', payload)
        return item.id === payload.item
      })
      state.list.splice(itemToRemoveIndex, 1)
    }
  },
  actions: {
    addItem(store, payload) {
      store.commit({
        type: 'addItem',
        item: payload
      });
    },
    removeItem (store, payload) {
      store.commit({
        type: 'removeItem',
        item: payload
      })
    },
    async getItems({ commit }) {
      const payload = await axios.get('products.json').then(res => res.data);
      commit({
        type: 'setItems',
        items: payload
      });
    }
  },
  plugins: [createLogger()]
})