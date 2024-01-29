<script setup>
import { reactive, computed, defineEmits } from 'vue'
import tagJson from '@/config/tag.json'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:visible'])
const modalVisible = computed({
  get() {
    return props.visible
  },
  set(newValue) {
    emit('update:visible', newValue)
  }
})
const form = reactive({
  date1: '',
  date2: '',
  name: '名称',
  region: '',
  category: '',
  money: 0,
  remark: ''
})
const onSubmit = () => {}
const handleOk = () => {}
</script>
<template>
  <el-dialog
    v-model="modalVisible"
    title="新增记录"
    @ok="handleOk"
    :show-close="false"
    destroy-on-close
    modal-class="add-card-dialog"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header flex items-center justify-between">
        <h4 :id="titleId" :class="titleClass">新增记录</h4>
        <el-button @click="close"> <i class="fa-solid fa-xmark"></i></el-button>
      </div>
    </template>
    <!-- <el-divider /> -->
    <el-card class="box-card" shadow="never">
      <!-- <template #header>
        <div class="card-header">
          <h3 class="text-2xl font-semibold">新增记录</h3>
        </div>
      </template> -->
      <div class="card-form">
        <el-form :model="form" label-width="100px">
          <el-form-item label="金额">
            <el-input-number
              v-model="form.money"
              :precision="2"
              :step="0.1"
              :min="0"
            />
          </el-form-item>
          <el-form-item label="类别">
            <el-select v-model="form.category" placeholder="请选择购买类别">
              <el-option
                v-for="(item, idx) in tagJson"
                :key="idx"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="支付时间">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.date2"
                placeholder="请选择时间"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="支付方式">
            <el-col :span="24">
              <el-select v-model="form.region" placeholder="请选择支付方式">
                <el-option label="支付宝" value="shanghai" />
                <el-option label="微信" value="beijing" />
                <el-option label="银行卡" value="car" />
                <el-option label="现金" value="monet" />
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-col :span="24">
              <el-input
                v-model="form.remark"
                :autosize="{ minRows: 3, maxRows: 8 }"
                type="textarea"
                placeholder="请输入备注"
              />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <template #footer>Footer content</template> -->
    </el-card>
  </el-dialog>
</template>
<style lang="scss">
.add-card-dialog {
  .box-card {
    border-radius: 0 !important;
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>
