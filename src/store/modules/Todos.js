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
  },
  async addTodo({ commit }, title) {
    const responce = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", responce.data);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
  state,
  getters,
  actions,
  mutations
};
