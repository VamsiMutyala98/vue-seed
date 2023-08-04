<template>
  <div class="jobs--container">
    <select aria-label="sort-option" v-model="sortValue" class="sort-select-tag">
      <option v-for="(item, index) in sortValues" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <job-list :jobs="jobs" :order="sortValue" />
  </div>
</template>
@/types/job.type
<script lang="ts">
import { IJob, IOrderTerm } from '@/types/job.type';
import { defineComponent, ref } from 'vue';
import JobList from '@/components/Jobs/JobList.vue';
import jobsList from '@/utils/helper';

export default defineComponent({
  name: 'Home-Component',
  components: {
    JobList,
  },
  setup() {
    const name = ref<string>('Vue 3 + TypeScript Application');
    const releaseDate = ref<string | number>('Sep 2020');
    const sortValues = ref<IOrderTerm[]>(['title', 'salaray', 'description']);
    const sortValue = ref<IOrderTerm>('title');

    const jobs = ref<IJob[]>(jobsList);

    return {
      name,
      releaseDate,
      jobs,
      sortValues,
      sortValue,
    };
  },
});
</script>
