<template>
  <div class="home">
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </nav>
    <h1>This is Home Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home-Component',
});
</script>
<style lang="sass">
.home
  nav
    padding: 30px
    a
      font-weight: bold
      color: #2c3e50
      &.router-link-exact-active
        color: #42b983
</style>
