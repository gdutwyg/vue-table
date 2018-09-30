<template>
  <div class="common-table">
    <el-table
      :data="showTableData"
      height='600'
      stripe
      border
      @row-click="clickTable"
      >
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        sortable>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="tableData.length">
    </el-pagination>
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
      this.$emit('clickTable', row.cid, row.title)
    }
  },
  created () {
    this.showTableData = this.tableData.slice(0, 10)
  }
}
</script>
<style scoped lang="less">
.common-table {
  width: 50%;
  float: left;
  h3 {
    font-weight: normal;
  }
  .el-pagination {
    margin-top: 20px;
  }
  .el-date-editor {
    margin: 0 10px 10px 0;
  }
}
</style>
