<template lang="jade">
#admin-ads.admin
  .admin-header
    .title
      h1 {{$route.meta.title}}
      el-button(type='text', @click="$router.push('/ad/new')") 添加广告
    .filter
      el-input(placeholder="搜索",
               icon="search",
               v-model="params.title",
               @keyup.enter.native='fetch',
               :on-icon-click="search")
  el-table(:data='listData.json', :row-class-name="tableRowClassName", border)
    el-table-column(prop='title', label='Title')
    el-table-column(prop='position', label='Position', width='110')
    el-table-column(prop='active_at', label='Begin', width="180")
    el-table-column(prop='active_through', label='End', width="180")
    el-table-column(prop='views', label='PV', width='100')
    el-table-column(label='Actions', width="150")
        template(scope='scope')
          el-button(type='text',
                    @click='handleEdit(scope.$index, scope.row)') Edit
          el-button(type='text',
                    @click='handleDestroy(scope.$index, scope.row, listData.json)') Delete
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
      params: {},
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
    tableRowClassName (row) {
      const through = new Date(row.active_through)
      const now = new Date()
      if (through > now) {
        return 'active-ad'
      }
      return ''
    },
    fetch () {
      const faker = tools.faker()
      for (var i = 0; i < 10; i++) {
        this.listData.json.push({
          title: faker.lorem.lines(),
          active_at: tools.moment(faker.date.past()),
          active_through: tools.moment(faker.random.boolean() ? faker.date.past() : faker.date.future()),
          position: '...',
          views: faker.random.number()
        })
      }
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>

<style lang="stylus">
.active-ad
  background-color #e2f0e4 !important

</style>
