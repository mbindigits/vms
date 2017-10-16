<template lang="jade">
#index.admin
  el-row.index-header(:gutter='20')
    el-col(:span='6')
      .item.bg-purple
        img.icon(src='../assets/imgs/index_article.png')
        .count
          h1 {{postCount}}
          span New Posts
    el-col(:span='6')
      .item.bg-purple
        img.icon(src='../assets/imgs/index_comment.png')
        .count
          h1 {{commentCount}}
          span New Comments
    el-col(:span='6')
      .item.bg-purple
        img.icon(src='../assets/imgs/index_user.png')
        .count
          h1 {{userCount}}
          span New Users
  el-row.index-articles(:gutter='40')
    el-col(:span='12')
      h1 Recent Posts
      .item.pointer(v-for='item in posts')
        p {{item.title}}
    el-col(:span='12')
        h1 Weekly Hot
        .item(v-for='item in hotWeek')
          p {{item.title}}
          span {{item.views}}
  el-row.index-quickly(:gutter="20")
    el-col
      h1 Others
    el-col(v-for='item in quickly',
           :key='item.id',
           :span='Math.floor((24 / quickly.length))')
      .item.bg-purple
        a(:href='item.url', target='_blank').a-title-text {{item.title}}
</template>

<script>
import tools from '../tools'
export default {
  data () {
    return {
      quickly: [ {
        title: 'Slack',
        url: 'https://slack.com'
      }, {
        title: 'Google',
        url: 'https://google.com'
      }, {
        title: 'Github',
        url: 'https://github.com'
      }, {
        title: 'iTunes Connect',
        url: 'https://itunesconnect.apple.com'
      }],
      postCount: 0,
      commentCount: 0,
      userCount: 0,
      hotWeek: [],
      posts: []
    }
  },
  mounted () {
    // create random data
    const faker = tools.faker()
    for (var i = 0; i < 10; i++) {
      this.hotWeek.push({title: faker.lorem.lines(), views: faker.random.number()})
      this.posts.push({title: faker.lorem.lines()})
    }
    this.postCount = faker.random.number() % 100
    this.userCount = faker.random.number() % 100
    this.commentCount = faker.random.number() % 100
  }
}

</script>

<style lang="stylus" scoped>
*
  letter-spacing 0.7px
.el-col
  margin-bottom 20px

.index-header .el-col .item
  // border 1px solid #B2B2B2
  height 90px
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  border-radius 4px
  h1
    padding-left 10px
    font-size 30px
    margin-bottom 5px
    margin-top 5px
  span
    font-size 14px
.index-articles
  min-height 300px
.index-quickly .item
  height 90px
  display flex
  justify-content center
  align-items center
  border-radius 4px
  a
    font-size 18px
.index-articles
  .pointer
    cursor pointer
  .item
    display flex
    justify-content space-between
    align-items center
  p
    font-size 14px
    width 100%
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
    margin 0
    line-height 30px
</style>
