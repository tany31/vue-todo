<template>
  <div class="todo">
    <h1>Список дел</h1>
    <form>
      <VInput v-model="todoInputValue" @keypress.enter.prevent="addTodo"/>
      <VButton @click="addTodo" type="button">Добавить</VButton>
    </form>
    <label for="onlyUndone">
      Только несделанные
      <input type="checkbox"  id="onlyUndone" v-model="onlyUndone"/>
    </label>  

    <ul v-if="filteredTodos.length" class="todo__list">
      <TodoListItem
        v-for="(todo, index) in filteredTodos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>Список дел пуст</p>
  </div>
</template>

<script>
import VInput from './VInput';
import VButton from './VButton';
import TodoListItem from './TodoListItem';

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
      nextId: 0,
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
      const trimmedValue = this.todoInputValue.trim();

      if (trimmedValue) {
        const newTodo = {
          text: trimmedValue,
          id: this.nextId,
          done: false
        }
        this.todos.push(newTodo);
  
        this.todoInputValue = '';
        this.nextId++;
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
