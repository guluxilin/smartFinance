<template>
    <div>
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>-->

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" active-text-color="#ff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">制度地图</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">国家法律地图</el-menu-item>
        <el-menu-item index="1-2">政府政策地图</el-menu-item>
        <el-menu-item index="1-3">行业规章地图</el-menu-item>
        <el-menu-item index="1-4">单位制度地图</el-menu-item>
        <el-menu-item index="1-5">千发制度指南</el-menu-item>
        <el-menu-item index="1-6">千发制度手册</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">内控导航</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="2-1">经济业务导航</el-menu-item>
          <el-menu-item index="2-2">业务流程导航</el-menu-item>
          <el-menu-item index="2-3">关键节点岗位职责</el-menu-item>
          <el-menu-item index="2-4">风险点风控导航</el-menu-item>
          <el-menu-item index="2-5">元数据标准</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-share"></i>
        <span slot="title">内控成熟度测试</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-help"></i>
        <span slot="title">内控培训服务</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">内控知识库</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">专家库</el-menu-item>
          <el-menu-item index="5-2">内控测评方法库</el-menu-item>
          <el-menu-item index="5-3">案例库</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">数据中台</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">单位信息库</el-menu-item>
          <el-menu-item index="6-2">组织结构库</el-menu-item>
          <el-menu-item index="6-3">岗位职责库</el-menu-item>
          <el-menu-item index="6-4">业务信息库</el-menu-item>
          <el-menu-item index="6-5">业务流程库</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">综合服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">内控监测服务</el-menu-item>
          <el-menu-item index="7-2">内控培训服务</el-menu-item>
          <el-menu-item index="7-3">内控设计服务</el-menu-item>
          <el-menu-item index="7-4">案例教学服务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">用户管理</el-menu-item>
          <el-menu-item index="8-2">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {

  },
  props: {

  },
  data () {
    return {
      isCollapse: false

    }
  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {

  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
