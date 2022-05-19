<template>
  <div class="rightMiddle">
  <el-table
    :data="hangye"
    :cell-style="rowStyle"
    :header-cell-style="{color:'#000000'}"
    ref="multipleTable"
    height="250"
    style="width: 100%"
    @selection-change='selectArInfo'>
    <el-table-column
      prop="id"
      align="center"
      label="编号"
      width="130">
    </el-table-column>
    <el-table-column
      align="center"
      prop="grade"
      label="法律级别"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="name"
      label="名称"
      width="200">
    </el-table-column>
    <el-table-column
      align="center"
      prop="apartment"
      label="部门"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="class"
      label="业务类别"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="state"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="date"
      label="发布时间"
      width="180">
    </el-table-column>
    <el-table-column
      align="center"
      prop="detail"
      label=" ">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="float:right;margin-top:10px;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage4: 4,
      hangye: [{
        id: 'F1',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      }, {
        id: 'F2',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      }, {
        id: 'F3',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      }, {
        id: 'F4',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      }, {
        id: 'F5',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      }, {
        id: 'F6',
        grade: '国家',
        name: '中华人民共和国会计法',
        apartment: '国家财政部',
        class: '综合管理',
        state: '已发布',
        date: '2016-05-03'
      } ]
    }
  },
  methods: {
    rowStyle () {
      return 'text-align:center'
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
.el-table-column {
  color: black;
}
</style>
