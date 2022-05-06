<template>
<div style="height:60px">
  <el-row :gutter="20">
    <el-col :span="16">
    <img src="@/assets/img/annular.png" style="height:60px;float:left;padding-left: 30px;">
      <span style="float:left;font-size:20px">| 智能财务平台</span>
    </el-col>
    <el-col :span="8">
      <div style="float:right">
       <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="后台管理" name="first"></el-tab-pane>
        <el-tab-pane label="常用工具" name="second"></el-tab-pane>
        <el-tab-pane label="版本样式" name="third"></el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default{
  data () {
    return {
      activeName: 'second'
    }
  },
  mounted () {
  },
  methods: {
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
</style>
