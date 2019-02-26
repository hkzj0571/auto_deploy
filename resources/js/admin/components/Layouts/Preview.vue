<script>
  export default {
    props: ['url'],
    data() {
      return {
        visible: false
      }
    },
    methods: {}
  }
</script>

<template>
  <span @click="visible = true">
    <img :src="url">
    <el-dialog :visible.sync="visible" width="40%" append-to-body custom-class="preview_dialog">
      <a :href="url" target="_blank">
        <img :src="url">
      </a>
    </el-dialog>
  </span>
</template>
