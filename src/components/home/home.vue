<template>
<el-container class="container">
  <el-header class="header">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img class="img" src="../../assets/logo.png" alt="">
        </div>
      </el-col>
      <el-col :span="4" :offset="16">
        <div class="grid-content bg-purple">
          <a href="#" @click.prevent="logout">退出</a>
        </div>
      </el-col>
    </el-row>
  </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
</el-container>

</template>

<script>
export default {
  // beforeCreate () {
  //   // 如果没有登录就让用户跳转到登录组件
  //   // 否则就什么就不做，允许进来
  //   // 从本地存储拿到Token
  //   // 有就通过，没有跳转登录
  //   const token = window.localStorage.getItem('admin-token')
  //   if (!token) {
  //     this.$router.push({
  //       name: 'login'
  //     })
  //   }
  // },
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$confirm('确定要退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除本地存储中的 token 身份表示
        window.localStorage.removeItem('admin-token')
        // 跳转登录视图
        this.$router.push({
          name: 'login'
        })
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {})
    }
  }
}
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: pink;
  line-height: 60px;
}
.img {
  height: 60px;
}
.aside {
  background-color: skyblue;
}
.main {
  background-color: blue;
}
</style>
