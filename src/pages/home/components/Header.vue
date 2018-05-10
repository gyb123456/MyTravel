<template>
  <div>这是header组件
    <div class="search">  
    <input class="search-input" type="text" placeholder="请输入城市名">  
  </div>  
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="stylus" scoped>  
@import '~@/assets/styles/varibles.styl'
.search  
  height .72rem  
  background-color $bgColor  
  padding 0 .2rem  
  .search-input  
    box-sizing border-box  
    width 100%  
    padding 0 .1rem  
    height .62rem  
    line-height .62rem  
    text-align center  
    border-radius .06rem  
    color #666  
</style>  