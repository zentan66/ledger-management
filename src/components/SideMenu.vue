<script setup>
const handleOpen = () => {
  //
}
const handleClose = () => {
  //
}
</script>
<template>
  <div class="h-full menu-cls">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      default-active="1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <!-- <el-icon></el-icon> -->
          <span>仪表盘</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <!-- <el-icon></el-icon> -->
          <span>数据分析</span>
        </template>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <!-- <el-icon></el-icon> -->
          <span>分类管理</span>
        </template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.menu-cls {
  background-color: #545c64;
}
</style>
