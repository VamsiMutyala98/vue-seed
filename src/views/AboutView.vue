<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="updateCount('increment')">+</button>
    <span>{{ count }}</span>
    <button @click="updateCount('decrement')">-</button>
  </div>
</template>

<script lang="ts">
import { IState } from '@/store/type';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'About-Component',
  setup() {
    const store = useStore<IState>();
    const count = computed(() => store.state.count);
    const updateCount = (type: string) => {
      switch (type) {
        case 'increment': {
          store.dispatch('increment');
          break;
        }
        case 'decrement': {
          store.dispatch('decrement');
          break;
        }
        default: {
          break;
        }
      }
    };
    return {
      count,
      updateCount,
    };
  },
});
</script>
<style lang="sass" scoped></style>
