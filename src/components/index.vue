<template>
    <div>
      <el-container style="width:80%; border: 1px solid #eee;margin:auto">
        <el-header>
          <logo-head></logo-head>
        </el-header>
      <el-header style="text-align: left; font-size: 13px;width:100%;background-color: #3388d1;margin-top: 10px">
        <Head></Head>
      </el-header>
        <el-container style="margin-top:10px">
          <el-aside width="220px">
            <side-bar></side-bar>
          </el-aside>
        <el-container>
          <el-main  style="background-color: #ffffff">
            <el-row>
              <right-one></right-one>
            </el-row>
            <el-row>
            <Right-Two></Right-Two>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sideBar from './common/sideBar.vue'
import Head from './common/Head.vue'
import LogoHead from './common/logoHead.vue'
import RightTwo from './OneOne/views/rightTwo.vue'
import RightOne from './OneOne/views/rightOne.vue'

export default {
  components: {
    sideBar,
    Head,
    LogoHead,
    RightTwo,
    RightOne
  },
  props: {

  },
  data () {
    return {
      choosePage: [[]]
    }
  },
  mounted () {
  },
  methods: {
  },
  watch: {

  }
}
</script>
<style scoped>
.el-header {
    background-color: #FFFF;
    color: #333;
    line-height: 60px;
  }
</style>
