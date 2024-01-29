<script setup>
import { useI18n } from 'vue-i18n'
import UserAvatar from './UserAvatar.vue'

const { t, locale } = useI18n()
const handleLangClick = lang => {
  // console.log(lang)
  locale.value = lang
}
</script>
<template>
  <header>
    <el-row align="middle" class="header-bar">
      <el-col :span="12">
        <div class="font-bold text-2xl pl-4">{{ t('header.title') }}</div>
      </el-col>
      <el-col
        :span="12"
        class="pr-4 flex items-center justify-end text-gray-400 text-[16px]"
      >
        <span class="cursor-pointer"></span>
        <el-dropdown @command="handleLangClick">
          <span class="el-dropdown-link">
            <i class="fa fa-globe"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zhCN">中文</el-dropdown-item>
              <el-dropdown-item command="zhTW">繁体</el-dropdown-item>
              <el-dropdown-item command="enUS">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
