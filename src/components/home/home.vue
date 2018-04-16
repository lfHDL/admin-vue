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
      <el-aside class="aside" width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo aside-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">角色列表</el-menu-item>
            <el-menu-item index="2-2">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">商品分类</el-menu-item>
            <el-menu-item index="3-3">商品参数</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">数据报表</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
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
.container, .aside .aside-menu{
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
