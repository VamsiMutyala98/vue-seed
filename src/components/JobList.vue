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
import { IJob, IOrderTerm } from '@/types/Job/';
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
    // eslint-disable-next-line max-len
    const orderedJobs = computed(() => [...props.jobs].sort((a: IJob, b: IJob) => (a[props.order] > b[props.order] ? 1 : -1)));

    return {
      orderedJobs,
    };
  },
});
</script>
<style lang="sass" scoped>
.job-list
  text-align: left
  .job-list-main
    border: 3px solid #0F3575
    margin: 10px
    margin-bottom: 20px
    padding: 10px

    h2
      color: #439ED9
    h4
      color: #81ba56
    p
      font-weight: 600
</style>
