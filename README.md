# vue-pagination-table

> 基于element-ui 2次封装的table + 分页 组件


## 安装

``` bash
$ npm install vue-pagination-table -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
// 因为是基于 element-ui 所以此处要引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueTable from 'vue-pagination-table'
Vue.use(ElementUI)
Vue.use(vueTable)
```

在项目中使用 vue-pagination-table

```js
<template>
  <common-table
  :tableData="tableData"
  :columnData="columnData"
  @clickTable="clickTable"
  :height="tableHeight"
></common-table>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }],
        columnData: [
          {
            prop: 'date', // 对应tableData的date
            label: '日期', // 表头
            sortable: true // 是否可排序
          },
          {
            prop: 'name',
            label: '名字'
          },
          {
            prop: 'address',
            label: '地址'
          }
        ],
        tableHeight: 1000   // 单位是px
      }
    },
    methods: {
      // 点击table的事件
      clickTable (data) {
        console.log(data)
      }
    }
  }
</script>
```

## 特点
1. 简单易用，table + 分页 的整合
2. 提供以 npm 的形式安装提供全局组件，
3. 大家如果还有其它想加的需求，欢迎提issue
