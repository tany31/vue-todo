import Vue from 'vue'

let nextId =  0;

export default {
  namespace: true,
  state: {
    todos: []
  },
  getters: {
    todos(state) {
      return state.todos
    },
    undoneTodos(state) {
      return state.todos.filter(({ done }) => !done)
    }
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload
    },
    ADD_TODO(state, todo) {
      state.todos = [...state.todos, todo]
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    UPDATE_TODO(state, todo) {
      const todoToUpdateIndex = state.todos.findIndex(t => t.id === todo.id)

      if (todoToUpdateIndex >= 0) {
        Vue.set(state.todos, todoToUpdateIndex, todo)
      }
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
