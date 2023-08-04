<template>
  <div class="job-list">
    <div v-for="job in orderedJobs" :key="job.id" class="job-list-main">
      <h2>{{ job.title }}</h2>
      <h4>{{ job.salaray }}</h4>
      <p>{{ job.description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { IJob, IOrderTerm } from '@/types/job.type';
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  name: 'Job-List-Component',
  props: {
    jobs: {
      type: Array as PropType<IJob[]>,
      required: true,
    },
    order: {
      type: String as PropType<IOrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: IJob, b: IJob) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return {
      orderedJobs,
    };
  },
});
</script>
