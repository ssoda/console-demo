<template>
  <div class="login-page">
    <Header />
    <div class="login-container">
      <el-card class="login-card">
        <h2 class="login-title">Login</h2>
        <el-form :model="form" ref="formRef">
          <el-form-item label="帳號" required>
            <el-input v-model="form.username" placeholder="請輸入帳號 user@example.com" />
          </el-form-item>
          <el-form-item label="密碼" required>
            <el-input v-model="form.password" type="password" placeholder="請輸入密碼" />
          </el-form-item>
          <el-form-item label="驗證碼" required>
            <div style="display: flex; align-items: center;">
              <img :src="captchaUrl" alt="captcha" style="height: 40px; margin-right: 10px;" />
              <el-button @click="refreshCaptcha" circle>
                <i class="mdi mdi-refresh"></i>
              </el-button>
            </div>
            <el-input v-model="form.captcha" placeholder="請輸入驗證碼" style="margin-top: 10px;" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onLogin">登入</el-button>
            <el-button @click="onReset">清空</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'

const router = useRouter()
const form = ref({ username: '', password: '', captcha: '' })
const captchaUrl = ref('/api/captcha?' + Date.now())

const refreshCaptcha = () => {
  captchaUrl.value = '/api/captcha?' + Date.now()
}

const onLogin = () => {
  // 這裡可以加入登入驗證邏輯
  router.push('/dashboard')
}

const onReset = () => {
  form.value = { username: '', password: '', captcha: '' }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 400px;
  padding: 40px 30px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
}
</style> 