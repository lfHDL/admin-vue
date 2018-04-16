<template>
<div class="login_style">
<el-form class="form_style" label-position="top" ref="userForm" :model="userForm" label-width="80px">
  <el-form-item label="用户名">
    <el-input
    v-model="userForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="userForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button class="btn_style" type="primary" @click="login">立即登录</el-button>

  </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // 1.采集表单数据
      // 2.表单验证
      // 3.发送请求执行登录操作
      // 4.根据响应交互
      const res = await axios.post('http://localhost:8888/api/private/v1/login', this.userForm)
      const data = res.data
      if (data.meta.status === 200) {
        // 登录成功，将服务器签发给用户的token身份令牌记录到localStorage中
        // 其他需要Token的都去本地存储获取
        window.localStorage.setItem('admin-token', JSON.stringify(data.data))
        this.$router.push({
          name: 'home'
        })
        this.$message({
          type: 'success',
          message: '登录成功!'
        })
      }
    }
  }
}
</script>

<style>
.login_style {
  background-color: pink;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form_style {
  background-color: yellow;
  width: 400px;
  padding: 50px;
  border-radius: 50px;
}
.btn_style {
  width: 100%;
}

</style>
