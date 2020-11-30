<template>
  <input
    class="input"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['value']
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