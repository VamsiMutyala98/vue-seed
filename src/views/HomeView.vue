<template>
  <div class="home">
    <h1>This is Home Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home-Component',
});
</script>

<style lang="sass" scoped>
.home
  .title
    color: red
    &:hover
      color: green
      cursor: pointer
      text-decoration: underline
  .sort-select-tag
    border: 2px solid black
    padding: 5px
    width: 200px
    display: flex
    margin-left: 10px
  .release-date
    color: blue
</style>
