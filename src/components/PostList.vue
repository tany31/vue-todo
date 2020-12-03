<template>
  <ul class="post-list">
    <li v-for="post in postList" :key="post.id">
      <PostListItem :post="post"/>
    </li>
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
