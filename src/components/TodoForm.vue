<template>
  <form @submit.prevent="addTodo">
    <VInput v-model.trim="todoInputValue" />
    <VButton type="submit">Добавить</VButton>
  </form>
</template>

<script>
import VInput from './VInput'
import VButton from './VButton'

export default {
  name: 'TodoForm',
  components: {
    VInput,
    VButton,
  },
  data() {
    return {
      todoInputValue: '',
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.todoInputValue)
      this.todoInputValue = ''
    },
  }
}
</script>
