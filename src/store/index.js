import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import cart from './modules/cart'
import about from './modules/about'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    gCount: 111
  },
  mutations,
  actions,
  modules: {
    cart,
    about
  }
});

export default store
