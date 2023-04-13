<template>
  <div class="home">
    <h1 class="title">{{ name }}</h1>
    <select aria-label="sort-option" v-model="sortValue" class="sort-select-tag">
      <option v-for="(item, index) in sortValues" :key="index" :value="item">{{ item }}</option>
    </select>
    <job-list :jobs="jobs" :order="sortValue" />
  </div>
</template>

<script lang="ts">
import { IJob, IOrderTerm } from '@/types/Job';
import { defineComponent, ref } from 'vue';
import JobList from '@/components/JobList.vue';
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
