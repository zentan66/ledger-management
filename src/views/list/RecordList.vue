<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import tagJson from '@/config/tag.json'
const columns = ref([{}])
const { t } = useI18n()
const searchForm = reactive({})
const size = (ref < 'default') | 'large' | ('small' > 'default')
const shortcuts = [
  {
    text: t('record.lastWeek'),
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: t('record.lastMonth'),
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: t('record.lastThreeMonth'),
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
const tableInfo = reactive({
  source: [
    {
      category: '饮食',
      payType: '支出',
      payMethod: 'VX',
      amount: 15.0
    }
  ]
})
</script>
<template>
  <div>
    <div class="search-form mb-4 p-4">
      <el-form :inline="true" :model="searchForm">
        <el-row>
          <el-col :span="8">
            <el-form-item class="w-11/12" label="记录类型">
              <el-select
                v-model="searchForm.category"
                placeholder="请选择购买类别"
              >
                <el-option
                  v-for="(item, idx) in tagJson"
                  :key="idx"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="w-11/12" label="消费类型">
              <el-select
                v-model="searchForm.region"
                placeholder="请选择"
                clearable
              >
                <el-option label="支出" value="shanghai" />
                <el-option label="收入" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="w-11/12" label="记录日期">
              <el-date-picker
                v-model="searchForm.date"
                type="daterange"
                unlink-panels
                range-separator="To"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :shortcuts="shortcuts"
                :size="size"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <!-- <el-col :span="8">
            <el-form-item class="w-11/12" label="记录日期">
              <el-date-picker
                v-model="searchForm.date"
                type="date"
                placeholder="请选择日期"
                clearable
              />
            </el-form-item>
          </el-col> -->
          <el-col :span="8" :offset="16">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="8"></el-col> -->
        </el-row>
      </el-form>
    </div>
    <div class="list-box">
      <el-table :data="tableInfo.source">
        <el-table-column type="index" label="#" width="180" />
        <el-table-column prop="category" label="消费类型" width="180" />
        <el-table-column prop="payType" label="记录类型" width="180" />
        <el-table-column prop="payMethod" label="支付方式" width="180" />
        <el-table-column prop="amount" label="金额" width="180" />
        <el-table-column prop="address" label="操作">
          <template #default>
            <el-button>删除</el-button>
            <el-button>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-form {
  border: 1px solid #f1f1f1;
  background-color: #fff;
}
.list-box {
  padding: 0 24px;
  background-color: #fff;
}
</style>
