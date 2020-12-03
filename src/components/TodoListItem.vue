<template>
  <label
    class="todo__item"
    :class="{ 'todo__item--done': todo.done }"
  >
    {{ todo.text }}
    <input type="checkbox" v-model="done"/>
    <VButton
      class="button--icon todo__remove-button"
      @click="$emit('remove')"
    >
    ✕
    </VButton>
  </label>
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
  },
  computed: {
    done: {
      get () {
        return this.todo.done
      },
      set () {
        this.$emit('update')
      }
    }
  }
}
</script>

<style scoped>
  .todo__item {
    display: inline-block;
    width: 100%;
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
