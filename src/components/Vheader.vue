<template lang="jade">
#vheader
  img.avatar(:src='config.icon')
  span.nickname {{config.author}}
</template>

<script>
export default {
  name: 'vheader',
  data () {
    return {
      config: this.$store.state.config
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
#vheader
  font-size 15px
  display flex
  justify-content flex-end
  align-items center
  padding-right 30px

  .avatar
    position relative
    height 60%
    border-radius 4px
    margin-right 15px
    cursor pointer
    border-radius 100%
  .nickname
    margin-right 20px
    cursor pointer
  .logout
    height 40%
    cursor pointer

</style>

