<template lang="jade">
#add-post.admin
  .title
    h1 {{$route.meta.title}}
  el-row(:gutter='10')
    el-col(:span='14')
      el-form.grid-content(ref='form', :model='form', label-width='80px', label-position='top')
        el-form-item(label='Title')
          el-input(v-model='form.title')
        el-form-item(label='Link')
          el-input(v-model='form.link')
        el-form-item(label='Video Link')
          el-input(placeholder='Video AD Link', v-model='form.video_link')
        el-form-item(label='Begin')
          el-date-picker(v-model='form.active_at',
                         type='datetime',
                         placeholder='')
        el-form-item(label='End')
          el-date-picker(v-model='form.active_through',
                         type='datetime',
                         placeholder='')
        el-form-item(label='Position')
          el-select(v-model='form.position', placeholder='')
            el-option(v-for='value in positions',
                      :label='value',
                      :value='value',
                      :key='value')
        el-form-item(label='')
          el-button(type='primary', @click='onSubmit') Submit
          el-button(type='danger', @click='onSubmit') Close
    el-col(:span='10')
      .grid-content.ad-position
        h1 Details
        h1 ...
</template>
<script>
export default {
  data () {
    return {
      form: {
        active_at: '',
        active_through: '',
        cover_id: '',
        cover_url: '',
        link: '',
        video_link: '',
        position: '',
        title: '',
        ad_type: 'ad'
      },
      positions: ['top_banner', 'medium_up', 'app', 'post', 'medium_below']
    }
  },
  methods: {
    onSubmit () {
      if (this.$route.query.id) {
        updateAd(this)
      } else {
        createAd(this)
      }
    }
  },
  mounted () {
    if (this.$route.query.id) {
      getAd(this)
    }
  }
}

function updateAd (_this) {
  // request
}

function createAd (_this) {
  // request
}

function getAd (_this) {
  // request
}
</script>

<style lang="stylus" scoped>
.el-input
  width 80%
.ad-position
  img
    margin-bottom 20px
    width 100%

</style>
