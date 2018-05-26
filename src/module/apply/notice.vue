<template>
  <div class="components-container">
    <div>
      <tinymce :height="300" v-model="content"></tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  export default {
    name: 'Notice',
    components: {
      Tinymce
    },
    data() {
      return {
        content: '编辑修改报名须知'
      }
    }
  }
</script>

<style scoped>
  .editor-content {
    margin-top: 20px;
  }
</style>


