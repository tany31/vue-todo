<template>
  <ul class="post-list">
    <PostListItem
      v-for="post in postList"
      :key="post.id"
      :post="post"
    />
  </ul>
</template>

<script>
import { getPostList } from '../services/posts'
import PostListItem from './PostListItem'

export default {
  name: 'PostList',
  components: {
    PostListItem
  },
  data() {
    return {
      postList: []
    }
  },
  created() {
    this.postList = getPostList()
  }
}
</script>
