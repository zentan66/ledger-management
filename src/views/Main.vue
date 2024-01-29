<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import SideMenu from '../components/SideMenu.vue'
</script>
<template>
  <div>
    <el-container class="h-screen">
      <el-aside class="h-full" width="300px">
        <side-menu></side-menu>
      </el-aside>
      <el-container class="base-bg">
        <el-header class="px-0"><base-header></base-header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.base-bg {
  background-color: #f1f1f1;
}
</style>
