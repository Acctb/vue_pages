<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="21">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-tooltip class="item" effect="dark" content="考场名称" placement="top">
                    <el-form-item label-width="50px" label="名称:" class="postInfo-container-item">
                      <el-input placeholder="考场名称" style='min-width:150px;' v-model="postForm.source_name">
                      </el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="50px" label="省:" class="postInfo-container-item">
                    <el-input placeholder="省" style='min-width:150px;' v-model="postForm.source_name">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="50px" label="市:" class="postInfo-container-item">
                    <el-input placeholder="市" style='min-width:150px;' v-model="postForm.source_name">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="50px" label="区:" class="postInfo-container-item">
                    <el-input placeholder="区" style='min-width:150px;' v-model="postForm.source_name">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput name="name" v-model="postForm.title" :maxlength="100">
                考场详细地址
              </MDinput>
              <span v-show="postForm.title.length>=26" class='title-prompt'>app可能会显示不全</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button size="small" type="primary">添加考场</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  import MDinput from '@/components/MDinput'
  import Multiselect from 'vue-multiselect' // 使用的一个多选框组件，element-ui的select不能满足所有需求
  import 'vue-multiselect/dist/vue-multiselect.min.css' // 多选框组件css
  const defaultForm = {
    status: 'draft',
    title: '', // 文章题目
    content: '', // 文章内容
    content_short: '', // 文章摘要
    source_uri: '', // 文章外链
    image_uri: '', // 文章图片
    source_name: '', // 文章外部作者
    display_time: undefined, // 前台展示时间
    id: undefined,
    platforms: ['a-platform'],
    comment_disabled: false
  }
  export default {
    name: 'articleDetail',
    components: {
      MDinput,
      Multiselect
    },
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(null)
        } else {
          callback()
        }
      }
      return {
        postForm: Object.assign({}, defaultForm),
        fetchSuccess: true,
        loading: false,
        userLIstOptions: [],
        platformsOptions: [{
            key: 'a-platform',
            name: 'a-platform'
          },
          {
            key: 'b-platform',
            name: 'b-platform'
          },
          {
            key: 'c-platform',
            name: 'c-platform'
          }
        ],
        rules: {
          // image_uri: [{ validator: validateRequire }]
        }
      }
    },
    computed: {
      contentShortLength() {
        return this.postForm.content_short.length
      }
    },
    created() {},
    methods: {
      submitForm() {
        this.postForm.display_time = parseInt(this.display_time / 1000)
        console.log(this.postForm)
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$notify({
              title: '成功',
              message: '发布文章成功',
              type: 'success',
              duration: 2000
            })
            this.postForm.status = 'published'
            this.loading = false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      draftForm() {
        if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
          this.$message({
            message: '请填写必要的标题和内容',
            type: 'warning'
          })
          return
        }
        this.$message({
          message: '保存成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
        this.postForm.status = 'draft'
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/assets/styles/mixin.scss";
  .title-prompt {
    position: absolute;
    right: 0px;
    font-size: 12px;
    top: 10px;
    color: #ff4949;
  }
  .createPost-container {
    position: relative;
    .createPost-main-container {
      padding: 40px 45px 20px 50px;
      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;
        .postInfo-container-item {
          float: left;
        }
      }
      .editor-container {
        min-height: 500px;
        margin: 0 0 30px;
        .editor-upload-btn-container {
          text-align: right;
          margin-right: 10px;
          .editor-upload-btn {
            display: inline-block;
          }
        }
      }
    }
    .word-counter {
      width: 40px;
      position: absolute;
      right: -10px;
      top: 0px;
    }
  }
</style>

