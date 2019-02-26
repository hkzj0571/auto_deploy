<script>
  export default {
    data() {
      return {
        columns: [
          {prop: 'level', label: '等级', width: 80, type: 3},
          {prop: 'env', label: '环境', width: 80, type: 3},
          {prop: 'message', label: 'Message', type: 3},
          {prop: 'time', label: '发生时间', width: 150},
        ]
      }
    },
    methods: {}
  }
</script>

<template>
  <data-table :expand="true" :filter="false" :paginate="false" class="log-table" ref="table" :columns="columns" :api="$api.logs.show($route.params.log)">
    <div slot="level" slot-scope="scope">
      <b :class="scope.row.level">{{ scope.row.level }}</b>
    </div>
    <div slot="env" slot-scope="scope">
      <b>{{ scope.row.env }}</b>
    </div>
    <div slot="expand" slot-scope="scope">
      <pre :class="'table-pre ' + scope.row.level">{{ scope.row.message }} <br> {{ scope.row.trace }}</pre>
    </div>
    <div slot="message" slot-scope="scope">
      <code :class="'table-code ' + scope.row.level">{{ scope.row.message }}</code>
    </div>
  </data-table>
</template>

<style lang="scss">
  .log-table {
    .table-code {
      float: left;
      max-width: 90%;
      font-size: 13px;
      overflow: hidden;
      padding: 4px 8px;
      border-radius: 3px;
      white-space: nowrap;
      background: #f5f5f5;
      display: inline-block;
      text-overflow: ellipsis;
      font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
    }
    .table-pre {
      width: 100%;
      line-height: 2;
      font-size: 13px;
      padding: 4px 8px;
      overflow: scroll;
      border-radius: 3px;
      background: #f5f5f5;
      text-align: initial;
      display: inline-block;
      box-sizing: border-box;
      font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
    }
    .EMERGENCY {
      color: black;
    }
    .ALERT {
      color: navy;
    }
    .CRITICAL {
      color: maroon;
    }
    .CRITICAL {
      color: maroon;
    }
    .ERROR {
      color: #ff5959;
    }
    .WARNING {
      color: orange;
    }
    .NOTICE {
      color: #8790a5;
    }
    .INFO {
      color: aqua;
    }
    .DEBUG {
      color: green;
    }
  }
</style>

