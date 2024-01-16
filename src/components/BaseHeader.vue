<script setup>
import UserAvatar from './UserAvatar.vue'
</script>
<template>
  <header>
    <el-row align="middle" class="header-bar">
      <el-col :span="12">
        <div class="font-bold text-2xl pl-4">Ea Admin</div>
      </el-col>
      <el-col
        :span="12"
        class="pr-4 flex items-center justify-end text-gray-400"
      >
        <span class="cursor-pointer"><i class="fa-regular fa-globe"></i></span>
        <div class="cursor-pointer mx-4">
          <i class="fa-regular fa-bell"></i>
        </div>
        <user-avatar></user-avatar>
      </el-col>
    </el-row>
  </header>
</template>
<style scoped lang="scss">
header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .header-bar {
    height: 55px;
  }
}
</style>
