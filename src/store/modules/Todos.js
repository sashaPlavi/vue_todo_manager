import axios from "axios";
const state = {
  todos: []
};
const getters = {
  allTodos: state => state.todos
};
const actions = {
  async fetchTodos({ commit }) {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(responce);

    commit("setTodos", responce.data);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
