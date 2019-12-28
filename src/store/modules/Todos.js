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
  },
  async delTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    console.log(limit);
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit("filterTodo", responce.data);
  },
  async updateTodo({ commit }, updTodo) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`
    );
    console.log(res);
    commit("updateTodo", updTodo);
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  filterTodo: (state, todos) => (state.todos = todos),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
