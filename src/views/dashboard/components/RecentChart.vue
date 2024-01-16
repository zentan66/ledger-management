<script setup>
import { ref, onMounted, reactive } from 'vue'
import * as echarts from 'echarts/core'
const openVisible = ref(false)
const searchInfo = reactive({
  dataType: 'month',
})
const options = ref([
  { label: '近半年', value: 'month' },
  { label: '上周', value: 'week' },
  { label: '去年', value: 'year' },
])
onMounted(() => {
  var myChart = echarts.init(document.getElementById('main'))
  myChart.setOption({
    legend: {},
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['202310', '202311', '202312', '202401'],
    },
    yAxis: {},
    series: [
      {
        type: 'line',
        name: '收入',
        data: [10000, 4500.1, 16511.4, 23241.4],
      },
      {
        type: 'line',
        name: '支出',
        data: [95.8, 89.4, 91.2, 76.9],
      },
    ],
  })
})
</script>
<template>
  <div>
    <el-card title="ceshi">
      <template #header>
        <div class="card-header">
          <span>近日消费</span>
          <el-select
            v-model="searchInfo.dataType"
            class="m-2"
            placeholder="Select"
            size="large"
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </template>
      <div id="main" style="width: 600px; height: 400px"></div>
    </el-card>
  </div>
</template>
