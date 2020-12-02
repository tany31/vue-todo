<template>
  <li 
    class="todo__item"
    :class="{ 'todo__item--done': todo.done }"
  >
    {{ todo.text }}
    <input type="checkbox" v-model="todo.done" @change="$emit('update', todo)"/>
    <VButton
      class="button--icon todo__remove-button"
      @click="$emit('remove', todo.id)"
    >
    ✕
    </VButton>
  </li>
</template>

<script>
import VButton from './VButton';

export default {
  name: 'TodoListItem',
  components: {
    VButton
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .todo__item {
    position: relative;
    padding: 5px 10px;
    border-bottom: 1px solid #f1efef;
  }

  .todo__item:hover .todo__remove-button {
    opacity: 1;
  }

  .todo__item--done {
    text-decoration: line-through;
  }

  .todo__remove-button {
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);

    background: rgb(197, 71, 71);
    transition: opacity .15s linear;
  }
</style>
