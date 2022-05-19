<template>
<div>
    <template>
        <el-row style="line-height: 50px;">
            <div class="rightHead">
                <el-col :span="8">
                    <span class="rightTitle">国家法律地图</span>
                    <i class="el-icon-warning" style="color:#409EFF;"></i>
                    <span class="rightTitleContent">更新时间:2020-4-21 10:34</span>
                </el-col>
            </div>
            <el-col :span="16"></el-col>
        </el-row>
    </template>
    <template>
        <el-row style="margin-left:20px; margin-top: 10px; margin-right:20px;line-height: 45px;">
            <el-col :span="3"><div class="black-text">类别</div></el-col>
            <el-col :span="3"><el-button type="text" class="content">不限</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">综合类</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">预算管理</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">收入管理</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">支出管理</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">政府采购</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">资产管理</el-button></el-col>
        </el-row>

        <el-row style="margin-left:20px;margin-top: 10px; margin-right:20px;line-height: 45px;">
            <el-col :span="3"><div class="black-text">部门</div></el-col>
            <el-col :span="3"><el-button type="text" class="content">不限</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">全国人大常委会</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">国务院</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">国卫办</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">中国人民银行</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">其他</el-button></el-col>
        </el-row>

        <el-row style="margin-left:20px; margin-top: 10px; margin-bottom: 10px; margin-right:20px;line-height: 45px;">
            <el-col :span="3"><div class="black-text">时间</div></el-col>
            <el-col :span="3"><el-button type="text" class="content">不限</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">一年内</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">三年内</el-button></el-col>
            <el-col :span="3"><el-button type="text" class="content">十年内</el-button></el-col>
            <el-col :span="9"><el-button type="text" class="content">十年以上</el-button></el-col>
        </el-row>

        <el-row style="margin-left:20px; margin-top: 10px; margin-bottom: 10px; margin-right:20px;line-height: 45px;">
            <el-col :span="3"><div class="black-text">更多</div></el-col>
            <el-col :span="15">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="">
                    <el-select v-model="formInline.region" placeholder="版本">
                        <el-option label="版本一" value="版本1"></el-option>
                        <el-option label="版本二" value="版本2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="">
                    <el-select v-model="formInline.region" placeholder="已发布">
                        <el-option label="版本一" value="版本1"></el-option>
                        <el-option label="版本二" value="版本2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formInline.user" placeholder="关键字"></el-input>
                </el-form-item>
            </el-form>
            </el-col>
            <el-col :span="6"><el-button type="primary" plain>搜索</el-button></el-col>
        </el-row>
    </template>

</div>
</template>
<script>
export default {
  props: {

  },
  data () {
    return {
      form: {
        region: ''
      },
      formInline: {
        user: '',
        region: ''
      }

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
.rightHead{
    background: #e1f5ff;
    border:1px solid #c5dcec;
    float: left;
    width: 100%;
}
.rightTitle{
    justify-content: left;
    text-align: left;
    font-weight: bold;
    font-size: 20px;
}
.rightTitleContent{
    font-size: 15px;
}
  .el-button{
    color: black;
    display: flex;
    font-size: 18px;
    justify-content: center;
    text-align: center;
  }

  .black-text{
      color: black;
      font-weight: bold;
      margin-bottom: 0px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      text-align: center;
  }
</style>
