<script>
  export default {
    props: {
      color: String,
      title: String,
      _class: String,
      width: {
        type: Number,
        default: 150
      },
      right: {
        type: String,
        default: null
      },
      percentage: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        process: 0,
        interval: null
      }
    },
    created() {
      this.interval = setInterval(this.calculate, 20)
    },
    methods: {
      calculate () {
        if (this.percentage <= this.process) return clearInterval(this.interval)
        this.process++
      }
    }
  }
</script>

<template>
  <el-card class="process_card">
    <h3 :style="{color}"><i :class="_class" :style="{color}"></i>{{ title }} <span :style="{color}" v-text="right"></span></h3>
    <el-progress :color="color" :width="width" type="circle" :percentage="process" status="text">
      <h1 :style="{color}">{{ process }}%</h1>
    </el-progress>
  </el-card>
</template>

<style lang="scss">
  .process_card {
    text-align: center;
    h1 {
      font-size: 2.5rem !important;
    }
    i {
      margin-right: 3px;
    }
    h3 {
      margin-top: 0;
      font-size: 13px;
      text-align: left;
      .r {
        float: right;
      }
    }
    .el-progress {
      margin-top: 1rem;
      width: 100% !important;
      height: 100% !important;
      .el-progress-circle {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
</style>
