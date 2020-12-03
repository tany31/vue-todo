<template>
  <router-link
    class="post-item"
    :to="{ name: 'Post', params: { id: post.id } }"
  >
  {{ post.title }}
  </router-link>
</template>

<script>
export default {
  name: 'postListItem',
  props: {
    post: {
      type: Object,
    }
  }
}
</script>

<style scoped>
.post-item {
  line-height: 1.5;
  color: #000;
  text-decoration: none;
}

.post-item__image {
  max-width: 300px;
}

.post-item:hover {
  text-decoration: underline;
  color: #42b983;
}
</style>