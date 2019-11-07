<template>
  <div class="common-table">
    <el-table :data="showTableData" :height="height" stripe border @row-click="clickTable">
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sortable"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next, total"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'commonTable',
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    columnData: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: Number,
      default: 600
    }
  },
  watch: {
  },
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      // 展示的内容条目
      showTableData: []
    }
  },
  methods: {
    // 处理页面展示数量改变
    handleSizeChange (val) {
      this.pageSize = val
      const currentPage = (this.currentPage - 1) * val
      this.showTableData = this.tableData.slice(currentPage, currentPage + val)
    },
    // 处理当前页码改变
    handleCurrentChange (val) {
      this.currentPage = val
      const currentPage = (val - 1) * this.pageSize
      this.showTableData = this.tableData.slice(currentPage, currentPage + this.pageSize)
    },
    clickTable (row) {
      this.$emit('clickTable', row)
    }
  },
  created () {
    this.showTableData = this.tableData.slice(0, 10)
  }
}
</script>
<style scoped lang="less">
.common-table {
  width: 100%;
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
}
</style>
