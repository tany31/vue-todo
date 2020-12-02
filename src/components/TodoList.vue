<template>
  <div class="todo">
    <h1>Список дел</h1>
    <form @submit.prevent="add">
      <VInput v-model.trim="todoInputValue"/>
      <VButton type="submit">Добавить</VButton>
    </form>
    <label>
      Только несделанные
      <input type="checkbox" v-model="onlyUndone"/>
    </label>

    <ol v-if="filteredTodos.length" class="todo__list">
      <TodoListItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
        @update="updateTodo"
      />
    </ol>
    <p v-else>Список дел пуст</p>
  </div>
</template>

<script>
import VInput from './VInput'
import VButton from './VButton'
import TodoListItem from './TodoListItem'
import { mapActions, mapGetters } from 'vuex'

let nextId =  0;

export default {
  name: 'TodoList',
  components: {
    VInput,
    VButton,
    TodoListItem,
  },
  created() {
    this.loadTodos()
  },
  data() {
    return {
      todoInputValue: '',
      onlyUndone: false,
    }
  },
  computed: {
    ...mapGetters(['todos', 'undoneTodos']),
    filteredTodos: function () {
      if (this.onlyUndone) {
        return this.undoneTodos
      }
      return this.todos
    }
  },
  methods: {
    ...mapActions(['loadTodos', 'addTodo', 'removeTodo', 'updateTodo']),
    add() {
      if (this.todoInputValue) {
        const newTodo = {
          text: this.todoInputValue,
          id: nextId,
          done: false
        }

        this.addTodo(newTodo)
        this.todoInputValue = ''
        nextId++
      }
    },
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

.todo__list {
  margin: 0;
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
</style>
