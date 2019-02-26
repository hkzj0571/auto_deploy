
<template>
  <froala :tag="'textarea'" :value="content" @input="updateContent" :config="config"></froala>
</template>

<script>
  export default {
    props: {
      content: String,
      height: {
        type: Number,
        default: 400
      }
    },
    methods: {
      updateContent (val) {
        this.$emit('update:content', val)
      }
    },
    data () {
      return {
        // current: this.content,
        config: {
          heightMin: this.height,
          language: 'zh_cn',
          charCounterCount: false,
          tooltips: false,
          toolbarButtons: ['fullscreen', 'paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'color', 'align', 'formatOL', 'formatUL', 'insertLink', 'insertImage', 'embedly'],
          imageUploadURL: '/api/' + this.$api.systems.upload,
          imageUploadParam: 'file',
          paragraphFormat: {
            N: '正文',
            H1: '标题 1',
            H2: '标题 2',
            H3: '标题 3',
            H4: '标题 4'
          },
          videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
          requestHeaders: {
            Authorization: localStorage.token,
            accept: 'application/vnd.laradmin.admin+json'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .fr-wrapper > div[style*='z-index: 9999'] {
    display: none;
  }
  .fr-box {
    .fr-toolbar {
      /*border-top: none;*/
      /*box-shadow: none;*/
    }
    .fr-wrapper {
      /*box-shadow: none !important;*/
      p {
        line-height: 2;
        letter-spacing: 1px;
      }
      > div {
        &:first-child {
          // display: none;
        }
      }
    }
    .fr-quick-insert {
      .fr-floating-btn {
        /*border: none;*/
        height: 40px;
        width: 40px;
        box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
        svg {
          fill: #a6a6a6;
        }
        &:hover {
          svg {
            fill: #333;
          }
        }
      }
    }
    .fr-qi-helper {
      .fr-btn {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
</style>
