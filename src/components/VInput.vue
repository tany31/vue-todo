<template>
  <input
    class="input"
    :value="value"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      return {
        ...this.$listeners,
        input: (event) => vm.$emit('input', event.target.value)
      }
    }
  },
}
</script>

<style scoped>
.input {
  padding: 10px 15px;
  line-height: 1;
  border: 1px solid #42b983;
}

.input:focus,
.input:active {
  outline: none;
}
</style>