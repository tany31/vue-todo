<template>
  <div class="post">
    <h4 class="post__title">{{ post.title }}</h4>
    <img class="post__image" :src="post.imageUrl" alt="">
    <div class="post__summary">{{ post.summary }}</div>
  </div>
</template>

<script>
import { getPost } from '../services/posts'

export default {
  name: 'postItem',
  data() {
    return {
      post: {}
    }
  },
  created() {
    this.post = getPost(this.$route.params.id)
  }
}
</script>

<style scoped>
.post {
  max-width: 40%;
  margin: 0 auto;
}
.post__title {
  text-align: center;
}

.post__image {
  width: 40%;
  margin-right: 10px;
  float: left;
}
</style>