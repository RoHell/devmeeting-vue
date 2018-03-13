import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload.item);
    },
    setItems(state, payload) {
      state.items = payload.items;
    },
    removeItem(state, payload) {
      let itemToRemoveIndex = state.items.findIndex(item => {
        return item.id === payload.item
      })
      state.items.splice(itemToRemoveIndex, 1)
    },
    sortItems(state, payload) {
      state.items.sort((prev, next) => {
        return payload.order ? prev.name > next.name : prev.name < next.name
      })
    },
    removeAllItems(state) {
      state.items = []
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
    async fetchItems({ commit }) {
      const payload = await axios.get('products.json').then(res => res.data)
      commit({
        type: 'setItems',
        items: payload
      });
    },
    sortItems (store, payload) {
      store.commit({
        type: 'sortItems',
        order: payload
      })
    },
    removeAllItems (store) {
      store.commit({
        type: 'removeAllItems'
      })
    }
  },
  getters: {
    getItems(state) {
      return state.items
    }
  },
  plugins: [createLogger()]
})