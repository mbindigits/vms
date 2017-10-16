<template lang="jade">
#admin-comments.admin
  .admin-header
    .title
      h1 {{$route.meta.title}}
    .filter
      el-input(placeholder="search",
               icon="search",
               v-model="params.content",
               @keyup.enter.native='fetch',
               :on-icon-click="fetch")
  el-table(:data='listData.json',border)
    el-table-column(prop='author', label='Author', width="120")
    el-table-column(prop='content', label='Content')
    el-table-column(prop='source', label='Source', width='120')
    el-table-column(prop='created_at', label='Created_At', width="170")
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
        content: '',
        page: 0
      },
      listData: {
        json: [],
        meta: {
          total_count: 0,
          limit_value: 0
        }
      }
    }
  },
  methods: {
    preview (row) {
    },
    search () {
    },
    handleSizeChange (index, val) {
    },
    handleCurrentChange (index, val) {
      this.currentPage = index
      this.fetch()
    },
    fetch () {
      const faker = tools.faker()
      for (var i = 0; i < 10; i++) {
        this.listData.json.push({
          content: faker.lorem.lines(),
          created_at: tools.moment(faker.date.past()),
          source: faker.lorem.words(),
          author: faker.name.findName()
        })
      }
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>

<style lang="stylus" scoped>

</style>
