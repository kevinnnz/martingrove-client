<template>
<div>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <p><strong>{{post.firstname}}</strong></p>
      <p>{{post.salary}}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://martingrove-api.azurewebsites.net/api/employees`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    });
  }
}
</script>
