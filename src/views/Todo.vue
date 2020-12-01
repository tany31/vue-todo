<template>
  <div class="home">
   <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Todo',
  components: {
    TodoList
  }
}
</script>