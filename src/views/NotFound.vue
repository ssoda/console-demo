<template>
  <div class="not-found">
    <Header />
    <div class="not-found-content">
      <h1>404</h1>
      <p>頁面不存在</p>
      <el-button type="primary" @click="goHome">
        <i class="mdi mdi-home"></i>
        返回首頁
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'

const router = useRouter()

const goHome = () => {
  router.push('/dashboard')
}
</script>

<style scoped>
.not-found {
  height: 100vh;
  background: #181818;
  display: flex;
  flex-direction: column;
}

.not-found-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.not-found-content h1 {
  font-size: 6rem;
  margin: 0;
  color: #1abc9c;
}

.not-found-content p {
  font-size: 1.5rem;
  margin: 20px 0 30px 0;
}
</style> 