<template>
  <div class="todo">
    <h1>Список дел</h1>
    <form @submit.prevent="addTodo">
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
      />
    </ol>
    <p v-else>Список дел пуст</p>
  </div>
</template>

<script>
import VInput from './VInput';
import VButton from './VButton';
import TodoListItem from './TodoListItem';

let nextId =  0;

export default {
  name: 'TodoList',
  components: {
    VInput,
    VButton,
    TodoListItem,
  },
  data() {
    return {
      todos: [],
      todoInputValue: '',
      onlyUndone: false,
    }
  },
  computed: {
    filteredTodos: function () {
      if (this.onlyUndone) {
        return this.todos.filter(({ done }) => !done)
      }

      return this.todos
    }
  },
  methods: {
    addTodo() {
      if (this.todoInputValue) {
        const newTodo = {
          text: this.todoInputValue,
          id: nextId,
          done: false
        }
        this.todos = [...this.todos, newTodo];
  
        this.todoInputValue = '';
        nextId++;
      }
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(({ id }) => id !== todoId);
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

.todo__list {
  margin: 0;
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
</style>
