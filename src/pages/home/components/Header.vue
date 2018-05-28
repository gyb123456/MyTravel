<template>
  <div>
    <div class="search">  
      <input class="search-input" type="text" placeholder="请输入城市名">  
      <div class="rightBtn">
        <router-link to='/city'>
          <div class="city">
             {{this.$store.state.city}}
             <!-- <button class="btn">确定</button> -->
          </div>
        </router-link>
      </div>
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
  height .76rem  
  background-color $bgColor  
  padding 0.1rem .2rem  
  .search-input  
    box-sizing border-box  
    width 90%  
    height .62rem  
    line-height .62rem  
    text-align center  
    border-radius .06rem  
    color #666  
.rightBtn
  float right 
  width 8%  
  // .btn
  //   background #ffffff
  //   margin-top 30px
  //   width 33px
.city
   color #fff
   margin-top 8px
</style>  