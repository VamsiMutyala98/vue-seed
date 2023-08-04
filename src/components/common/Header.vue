<template>
  <div class="row header">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
      <img
        src="../../assets/vue-plus-typescript.png"
        alt="Vue-Logo"
        height="70"
        style="cursor: pointer"
        @click="navigation('Home')"
      />
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 title--wrap">
      <h2>Vue JS + Typescript</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Header-Component',

  setup() {
    const router = useRouter();

    const navigation = (name: string) => {
      router.push({ name });
    };

    return {
      navigation,
    };
  },
});
</script>
