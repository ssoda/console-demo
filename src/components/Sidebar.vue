<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <i class="mdi mdi-home"></i>
      <span>資訊主頁</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <i class="mdi mdi-account-group"></i>
        <span>帳號管理</span>
      </template>
      <el-menu-item index="2-1">
        <i class="mdi mdi-format-list-bulleted"></i>
        <span>帳號列表</span>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="mdi mdi-account-plus"></i>
        <span>註冊帳號</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <i class="mdi mdi-calendar-clock"></i>
      <span>日程管理</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <i class="mdi mdi-account-multiple"></i>
        <span>個案管理</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <i class="mdi mdi-cog"></i>
        <span>系統設定</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
// 無需邏輯
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 220px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
}

.el-menu-item i,
.el-sub-menu__title i {
  margin-right: 10px;
}
</style> 