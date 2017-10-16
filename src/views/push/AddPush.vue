<template lang="jade">
#add-post.admin
  .title
    h1 {{$route.meta.title}}
  el-form(ref='form', :model='form', label-width='80px')
    el-form-item(label='ID')
      el-input(placeholder='', v-model='form.redirect')
    el-form-item(label='Content')
      el-input(placeholder='', v-model='form.content')
    el-form-item(label='Timing')
      el-date-picker(v-model='form.send_at',
                     type='datetime',
                     placeholder='')
    el-form-item(label='Actions')
      el-button(type='primary', @click='onSubmit') Submit
</template>

<script>
export default {
  data () {
    return {
      form: {
        redirect: '',
        content_type: 'topic_type',
        content: '',
        send_at: ''
      }
    }
  },
  methods: {
    onSubmit () {
      //
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.el-input
  width 50%

</style>
