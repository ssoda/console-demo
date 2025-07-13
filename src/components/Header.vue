<template>
  <div class="header">
    <div class="logo-domain">
      <span class="logo">CARE Platform</span>
      <span class="domain">health-care.com</span>
    </div>
    <div class="header-right">
      <template v-if="!isLoginPage">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-sub-menu index="1">
            <template #title>系統管理員</template>
            <el-menu-item index="2-1">個人中心</el-menu-item>
            <el-menu-item index="2-2">登出</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </template>
      <el-button circle @click="toggleDarkMode" class="theme-toggle">
        <i :class="[isDark ? 'mdi mdi-weather-sunny' : 'mdi mdi-weather-night', 'theme-icon']"></i>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRoute()
const router = useRouter()

const toggleDarkMode = () => {
  toggleDark()
}

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  if (key === '2-2') {
    router.push('/login')
  }
}

const isLoginPage = computed(() => route.path === '/login')
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
}

.logo-domain {
  display: flex;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

.domain {
  background: #40a0ffbc;
  color: #fff;
  border-radius: 5px;
  padding: 2px 10px;
  margin-left: 10px;
  font-size: 14px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user {
  margin-right: 10px;
}

.theme-toggle {
  background: transparent;
  /* border: 1px solid #181818;
  color: #181818; */
}

.theme-toggle:hover {
  background: #1abc9c;
  border-color: #1abc9c;
  color: #fff;
}

.theme-icon {
  font-size: 20px;
}
</style>