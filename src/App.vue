<template>
  <header-vue />
  <router-view />
  <footer-vue />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderVue from './components/common/Header.vue';
import FooterVue from './components/common/Footer.vue';

export default defineComponent({
  name: 'App-Component',
  components: {
    HeaderVue,
    FooterVue,
  },
});
</script>
