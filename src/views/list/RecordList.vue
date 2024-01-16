<script setup>
import { onMounted, reactive, ref } from 'vue'
const columns = ref([{}])
const tableInfo = reactive({
  source: [
    {
      category: '饮食',
      payType: '支出',
      payMethod: 'VX',
      amount: 15.0,
    },
  ],
})
</script>
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="el-row">
        <div class="el-col" :span="6">
          <el-input></el-input>
        </div>
      </div>
    </el-form>
    <div>
      <el-table :data="tableInfo.source">
        <el-table-column prop="date" label="#" width="180" />
        <el-table-column prop="category" label="消费类型" width="180" />
        <el-table-column prop="payType" label="记录类型" width="180" />
        <el-table-column prop="payMethod" label="支付方式" width="180" />
        <el-table-column prop="amount" label="金额" width="180" />
        <el-table-column prop="address" label="操作">
          <template>
            <el-button>删除</el-button>
            <el-button>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
