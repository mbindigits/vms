<template lang="jade">
#admin-users.admin
  .admin-header
    .title
      h1 {{$route.meta.title}}
    .filter
      el-input(placeholder="search",
               icon="search",
               v-model="params.searchText",
               :on-icon-click="rolesChange")
  el-table(:data='listData.json' border)
    el-table-column(prop='nickname', label='NickNmae', width="120")
    el-table-column(prop='realname', label='RealName', width="120")
    el-table-column(prop='email', label='Email', width="180")
    el-table-column(prop='phone', label='Phone')
    el-table-column(prop='created_at', label='CreatedAt', width="180")
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
    rolesChange () {
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
          realname: faker.internet.userName(),
          nickname: faker.internet.userName(),
          email: faker.internet.email(),
          created_at: tools.moment(faker.date.past()),
          phone: faker.phone.phoneNumber()
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
h1 {
  top: -5px;
}
.el-select
  width 150px !important
  margin-right 50px
</style>
