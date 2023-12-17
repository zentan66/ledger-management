<script setup>
import avatar from '@/assets/images/avatar.jpg'
</script>
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="''" :src="avatar" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style lang="scss" scoped></style>
