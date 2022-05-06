<template>
<div style="height:60px;color: rgb(255, 255, 255);">
  <el-row :gutter="20" >
    <el-col :span="3">
      <el-dropdown>
        <i class="el-icon-s-unfold" style="margin-right: 10px;cursor:pointer;font-size: 30px;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>展开</el-dropdown-item>
          <el-dropdown-item>收起</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
          </el-col>
      <el-col :span="16" >
      <div style="height:40px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="项目名称" name="first"></el-tab-pane>
    <el-tab-pane label="应用概览" name="second"></el-tab-pane>
    <el-tab-pane label="关于我们" name="third"></el-tab-pane>
    <el-tab-pane label="帮助文档" name="fourth"></el-tab-pane>
  </el-tabs>
  </div>
  </el-col>
    <el-col :span="5">
      <div style="float:right;height: 40px;">
      <i class="el-icon-user-solid" style="margin-right: 10px"></i>
      <el-dropdown @command="clickDropdown">
        <span style="font-size:13px;cursor:pointer">{{user}}</span>
  <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="管理员">管理员</el-dropdown-item>
    <el-dropdown-item command="用户">用户</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default{
  name: 'Head',
  data () {
    return {
      user: '',
      activeName: 'second'
    }
  },
  mounted () {
    this.user = '管理员'
  },
  methods: {
    clickDropdown (command) {
      this.user = command
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown {
    color: rgb(255, 255, 255)
  }
  div /deep/ .el-tabs__item {
    color: rgb(255, 255, 255)
  }
div /deep/ .el-tabs__item.is-active {
  color: rgb(255, 255, 255)
}
div /deep/ .el-tabs__active-bar{
  background-color: rgb(255, 255, 255);
  bottom: 10px;
  height: 1.5px;
}
div /deep/ .el-tabs__nav-wrap::after{
  height: 0;
}
</style>
