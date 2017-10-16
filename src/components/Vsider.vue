<template lang="jade">
#vsider
  el-row.tac
    router-link(to="/")
      .sider-logo
        img(:src='config.icon')
        span {{config.title}}
    el-col(:span='8')
      el-menu.el-menu-vertical-demo(router=true, @open='handleOpen', @close='handleClose', theme="dark")
        el-submenu(index='/info')
          template(slot='title')
            img(src='../assets/imgs/sider_info.svg')
            span Info
          el-menu-item-group(title='Posts')
            el-menu-item(index='/posts')  Posts
            el-menu-item(index='/posts/new?content_type=html') Add Post
         el-submenu(index='/push')
          template(slot='title')
            img(src='../assets/imgs/sider_push.svg')
            span Notifications
          el-menu-item(index='/push')  Notifications
          el-menu-item(index='/push/new') Add Notification
        el-submenu(index='/comment')
          template(slot='title')
            img(src='../assets/imgs/sider_comment.svg')
            span Comments
          el-menu-item(index='/comments?type=posts') Comments
        el-submenu(index='/ad')
          template(slot='title')
            img(src='../assets/imgs/sider_ad.svg')
            span AD
          el-menu-item(index='/ads') ADs
          el-menu-item(index='/ads/new') Add AD
        el-submenu(index='/user')
          template(slot='title')
            img(src='../assets/imgs/sider_user.svg')
            span Users
          el-menu-item(index='/users') Users
</template>

<script>
import config from '../config'
export default {
  name: 'vsider',
  computed: {
  },
  data () {
    return {
      routes: [],
      config: config
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeMount () {
  }
}
</script>

<style lang="stylus" scoped>

#vsider
  texta-align left
  &
    text-align left
  .sider-logo
    color #bfcbd9
    font-size 18px
    margin 20px 20px
    text-align left
    img
      width 20px
      vertical-align middle
      margin-right 10px
      border-radius 3px
    span
      height 30px
      vertical-align middle
  .el-col
    // border-top 2px solid rgb(0, 164, 186)
    img
      width 15px
      vertical-align: baseline;
      margin-top: 10px;
      position: absolute;
      top: 10px;
    span
      margin-left 25px
</style>

