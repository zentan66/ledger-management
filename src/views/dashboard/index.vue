<script setup>
import { ref } from 'vue'
import AddCardModal from '../../components/modal/AddCardModal.vue'
import RecentChart from './components/RecentChart.vue'
const openVisible = ref(false)
</script>
<template>
  <div>
    <add-card-modal v-model:visible="openVisible"></add-card-modal>
    <el-button type="primary" @click="openVisible = !openVisible"
      >click me</el-button
    >
    <recent-chart />
  </div>
</template>
