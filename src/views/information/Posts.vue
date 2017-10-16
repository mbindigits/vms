<template lang="jade">
#admin-posts.admin
  .admin-header
    .title
      h1 {{$route.meta.title}}
      el-button(type='text', @click="addPost") Add Post
    .filter
      el-button(type='text',
                @click='params.state = "published"',
                v-bind:class='{active: params.state === "published"}') published
      | /
      el-button(type='text',
                @click='params.state = "unpublished"',
                v-bind:class='{active: params.state === "unpublished"}') unpublished
      el-input(placeholder="search",
               icon="search",
               v-model="params.title",
               @keyup.enter.native='handleSearch',
               :on-icon-click="handleSearch")

  el-table(:data='listData.posts' border)
    el-table-column(prop='title', label='Title')
      template(scope='scope')
        a(@click='clickPost(scope.row)') {{scope.row.title}}
    el-table-column(prop='author', label='Author', width="100")
    el-table-column(prop='column_title', label='Column', width="150")
    el-table-column(prop='published_at', label='Time', width="180", v-if='params.state === "published"')
    el-table-column(prop='state', label='State', width="120")
      template(scope='scope')
        span(v-bind:class='{unpublished: scope.row.state === "草稿"}') {{scope.row.state}}
    el-table-column(prop='views', label='PV', width="70")
    el-table-column(label='Actions', width="130")
      template(scope='scope')
        el-button(type='text',
                  @click='handleEdit(scope.$index, scope.row)') Edit
        el-button(type='text',
                  @click='handleDestroy(scope.$index, scope.row)') Delete

  el-pagination(@size-change='handleSizeChange',
                @current-change='handleCurrentChange',
                :current-page='params.page',
                :page-size='listData.meta.limit_value',
                layout='total, prev, pager, next, jumper',
                :total='listData.meta.total_count')
</template>

<script>
import tools from 'tools'

export default {
  data () {
    return {
      params: {
        title: '',
        state: this.$route.query.state || 'published',
        page: 0
      },
      listData: {
        posts: [],
        meta: {
          total_count: 0,
          limit_value: 0
        }
      }
    }
  },
  methods: {
    handleSearch () {
    },
    handleSizeChange (index, val) {
    },
    handleEdit (index, row) {
    },
    clickPost (row) {
    },
    handleCurrentChange (index, val) {
      this.currentPage = index
      this.fetch()
    },
    handleDestroy (index, val, list) {
      const destroy = () => {
      }
      tools.deleteConfirm(this, destroy)
    },
    fetch () {
      const faker = tools.faker()
      for (var i = 0; i < 10; i++) {
        this.listData.posts.push({
          title: faker.lorem.lines(),
          author: faker.name.lastName(),
          column_title: faker.random.words(),
          published_at: faker.date.past(),
          views: faker.random.number() % 100,
          state: this.params.state
        })
      }
    },
    addPost () {
      this.$router.push('/posts/new')
    }
  },
  watch: {
    'listData.posts': function (val) {
      val.forEach(el => {
        el.published_at = tools.moment(el.published_at)
      })
    },
    'params.state': function () {
      this.handleSearch()
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>

<style lang="stylus" scoped>
.active
  color #7F7F7F
.unpublished
  color #FF0000


</style>
