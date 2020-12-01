<template>
  <button class="button" :type="type" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #42b983;
  color: #fff;
  border: none;
  box-shadow: none;
  padding: 10px 15px;
  border: 1px solid #42b983;
  cursor: pointer;
}

.button--icon {
  border:  none;
  padding: 0;
  line-height: 1em;
  padding: 5px;
}

.button:focus,
.button:active {
  outline: none;
}
</style>