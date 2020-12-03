<template>
  <ol class="todo__list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove="removeTodo"
      @update="updateTodo"
    />
  </ol>
</template>

<script>
import TodoListItem from './TodoListItem'
import { mapActions } from 'vuex'

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['updateTodo', 'removeTodo']),
  }
}
</script>

<style scoped>
.todo__list {
  margin: 0;
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
</style>
