<template>
  <div class="todo">
    <h1>Список дел</h1>
    <TodoForm />
    <label>
      Только несделанные
      <input type="checkbox" v-model="onlyUndone"/>
    </label>
    <TodoList v-if="filteredTodos.length" :todos="filteredTodos" />
    <p v-else>Список дел пуст</p>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import { mapGetters } from 'vuex'

export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList
  },
  created() {
    this.$store.dispatch('loadTodos')
  },
  data() {
    return {
      onlyUndone: false,
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
    ...mapGetters(['undoneTodos']),
    filteredTodos: function () {
      const { todos, onlyUndone, undoneTodos } = this

      return onlyUndone ? undoneTodos : todos
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 auto;
}
</style>