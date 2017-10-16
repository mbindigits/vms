<template lang="jade">
#admin-posts.admin
  .title
    h1 {{$route.meta.title}}
    el-button(type='text', @click="$router.push('/push/new')") Add Notification
  el-table(:data='listData.json' border)
    el-table-column(prop='content', label='Content')
    el-table-column(prop='created_at', label='CreateAt', width="180")
    el-table-column(prop='send_at', label=' SendAt', width="180")
    el-table-column(prop='id', label='ID', width="100")
  el-pagination(@size-change='handleSizeChange',
                @current-change='handleCurrentChange',
                :current-page='currentPage',
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
      },
      currentPage: 1,
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
          send_at: tools.moment(faker.date.past()),
          id: faker.random.number()
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
.preview
  cursor pointer
</style>
