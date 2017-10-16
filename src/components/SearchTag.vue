<template lang="jade">
#search-tag
  el-select(v-model='select', multiple, filterable, allow-create, placeholder='posts tag', :remote-method='remoteMethod', :loading='loading')
    el-option(v-for='item in allTags', :key='item', :label='item', :value='item')
</template>

<script>
export default {
  name: 'search-tag',
  data () {
    return {
      allTags: [],
      select: [],
      loading: false
    }
  },
  props: {callback: Function},
  methods: {
  },
  watch: {
    'select': function (val) {
      this.callback(this.select)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
</style>

