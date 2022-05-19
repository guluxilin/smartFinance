<template>
    <div>
      <el-container style="width:80%;height: 900px; border: 1px solid #eee;margin:auto">
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
import sideBar from '@/components/common/sideBar.vue'
import Head from '@/components/common/Head.vue'
import LogoHead from '@/components/common/logoHead.vue'
import RightTwo from './views/rightTwo.vue'
import RightOne from './views/rightOne.vue'

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
  .right_third{
    float: left;
    width: 100%;
    height: 45%;
    border: 2px solid rgb(67, 67, 67);
    margin-top: 1%;
}
</style>
