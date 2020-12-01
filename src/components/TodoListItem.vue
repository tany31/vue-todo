<template>
  <li 
    class="todo__item"
    :class="{ 'todo__item--done': todo.done }"
  >
    {{ index + 1 }}. {{ todo.text }}
    <input type="checkbox" v-model="todo.done"/>
    <VButton
      class="button--icon todo__remove-button"
      type="button"
      @click="$emit('remove', todo.id)"
    >
    ✕
    </VButton>
  </li>
</template>

<script>
import VButton from './VButton';

export default {
  components: {
    VButton
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  }
}
</script>

<style scoped>
  .todo__item {
    position: relative;
    list-style: none;
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
