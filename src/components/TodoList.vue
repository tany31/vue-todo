<template>
  <ol class="todo-list">
    <li v-for="todo in todos" :key="todo.id" >
      <TodoListItem
        :todo="todo"
        @remove="removeTodo(todo.id)"
        @update="handleUpdateDone(todo)"
      />
    </li>
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
    handleUpdateDone({id, text, done}) {
      this.updateTodo({id, text, done: !done})
    }
  }
}
</script>

<style>
.todo-list {
  margin: 0;
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
</style>
