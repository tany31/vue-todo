<template>
  <li class="post-item">
    <router-link
      class="post-item__link"
      :to="{ name: 'Post', params: { id: post.id } }"
    >
    {{ post.title }}
    </router-link>
  </li>
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
  list-style-type: none;
  line-height: 1.5;
}

.post-item__image {
  max-width: 300px;
}

.post-item__link {
  color: #000;
  text-decoration: none;
}

.post-item__link:hover {
  text-decoration: underline;
  color: #42b983;
}
</style>