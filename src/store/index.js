import Vuex from "vuex";
import Vue from "vue";
import Todos from "./modules/Todos";

// load vuex

Vue.use(Vuex);

//create a store
export default new Vuex.Store({
  modules: {
    Todos
  }
});
