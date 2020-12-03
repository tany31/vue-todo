let nextId =  0;

export default {
  namespace: true,
  state: {
    todos: [],
  },
  getters: {
    undoneTodos(state) {
      return state.todos.filter(({ done }) => !done)
    }
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    ADD_TODO(state, todo) {
      state.todos = [...state.todos, todo]
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    UPDATE_TODO(state, todo) {
      state.todos = state.todos.map(old => old.id === todo.id ? todo : old);
    }
  },
  actions: {
    loadTodos({ commit }) {
      commit('SET_TODOS', [])
    },
    addTodo({ commit }, text) {
      if (text) {
        commit('ADD_TODO', { text, done: false, id: nextId++ })
      }
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id)
    },
    updateTodo({ commit }, updatedTodo) {
      commit('UPDATE_TODO', updatedTodo)
    }
  }
}
