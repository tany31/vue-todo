import Vue from 'vue'

const loadTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([])
    }, 1000)
  })
}

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

      if (todoToUpdateIndex > 0) {
        Vue.set(state.todos, todoToUpdateIndex, todo)
      }
    }
  },
  actions: {
    async loadTodos({ commit }) {
      try {
        const todos = await loadTodos()
        commit('SET_TODOS', todos)
      } catch (error) {
        console.error(error)
      }
    },
    addTodo({ commit }, newTodo) {
      commit('ADD_TODO', newTodo)
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id)
    },
    updateTodo({ commit }, updatedTodo) {
      commit('UPDATE_TODO', updatedTodo)
    }
  }
}
