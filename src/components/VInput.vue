<template>
  <input
    class="input"
    v-model="modelWrapper"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    inputListeners: function () {
      return {
        ...this.$listeners,
        input: () => this.modelWrapper
      }
    },
    modelWrapper: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
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