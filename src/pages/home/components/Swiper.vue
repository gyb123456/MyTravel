<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
   data (){
      return{
        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[
        {
          id:'001',
          imgUrl:'http://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg'
        },
        {
          id:'002',
          imgUrl:'http://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
        }
        ]
      } 
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-img
   width 100%
</style>
