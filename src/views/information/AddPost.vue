<template lang="jade">
.admin#add-post
  .title
    h1 {{$route.meta.title}}
  el-form(ref='add-post-form', :model='form', label-position='top', :rules="rules")
    el-form-item(label='Title', prop='title')
      el-input(v-model='form.title')
    el-form-item(label='Summary', prop='abstract')
      el-input(type='textarea',v-model='form.abstract')
    el-form-item(label='Content', prop='content')
      veditor
    el-form-item(label='Tags', prop='tags')
      search-tag(:callback='searchTag', :tags='form.tags')
    el-form-item(label='State')
      el-select(v-model='form.state', placeholder='')
        el-option(v-for='item in post_states',
                  :label='item',
                  :value='item',
                  :key='item')
    el-form-item(label='Time', prop='date', v-if='form.state === "published"')
      el-date-picker(v-model='form.auto_publish_at',
                     type='datetime',
                     placeholder='')
    el-form-item(label='')
      el-button(type='primary', :disabled='disabled', @click='submitForm') Submit
      el-button(type='danger', @click='close') Close
</template>

<script>
export default {
  data () {
    return {
      disabled: false,
      form: {
        title: '',
        summary: '',
        content_type: 'html',
        state: 'unpublished',
        tags: [],
        column: []
      },
      post_states: ['unpublished', 'published'],
      rules: {
        title: [
          { required: true, message: 'please input the content', trigger: 'blur', min: 0 }
        ],
        abstract: [
          { required: true, message: 'please input the content', trigger: 'blur', min: 0 }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs['add-post-form'].validate((valid) => {
        if (valid) {
          if (this.$route.query.id) {
            updatePost(this)
          } else {
            createPost(this)
          }
        } else {
          this.$message.error('error!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs['add-post-form'].resetFields()
    },
    searchTag (tags) {
      this.form.tags = tags
    },
    searchColumn (column) {
      this.form.column_id = column
    },
    close () {
      this.$router.push('/posts')
    }
  },
  watch: {
    'form.content_type': function (val) {
      const id = this.$route.query.id ? `&id=${this.$route.query.id}` : ''
      this.$router.push(`${this.$route.path}?content_type=${val}${id}`)
      addContent(this, val)
    }
  },
  mounted () {
    if (this.$route.query.id) { getPost(this) }
  }
}

function getContent (_this) {
  _this.form.content_source = _this.$store.state.htmlEditor.txt.html()
}

function addContent (_this, val) {
  setTimeout(() => {
    _this.$store.state.htmlEditor.txt.html(_this.form.content_source)
  }, 100)
}

function updatePost (_this) {
  getContent(_this)
  // http request
}

function createPost (_this) {
  getContent(_this)
  // http request
}

function getPost (_this) {
  // http request
}
</script>

<style lang="stylus" scoped>
.el-input, .el-textarea
  width 50%
.el-select-dropdown
  z-index 99999 !important

#add-post
  hegiht auto !important
</style>
