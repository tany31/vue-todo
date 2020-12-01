<template>
  <div class="about">
    <h1>Blog</h1>
    <PostList />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'

export default {
  name: 'Blog',
  components: { PostList },
}
</script>