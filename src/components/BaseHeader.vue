<script setup>
import UserAvatar from './UserAvatar.vue'
</script>
<template>
  <header>
    <el-row align="middle" class="header-bar">
      <el-col :span="12">
        <div class="">Ea Admin</div>
      </el-col>
      <el-col :span="12" class="text-right pr-[12px]">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-user"></i>
        <user-avatar></user-avatar>
      </el-col>
    </el-row>
  </header>
</template>
<style scoped lang="scss">
header {
  background-color: #fff;
  border: 1px solid #ddd;
  .header-bar {
    height: 55px;
  }
}
</style>
