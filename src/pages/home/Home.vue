<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div class="tiaozhuan">
        <router-link to="/list" >跳至列表页</router-link>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
 name:'Home',
 components:{
     'HomeHeader':HomeHeader,
     'HomeSwiper':HomeSwiper,
      HomeIcons

 }
}
</script>

<style>
    .home{
        font-size: 30px;
    }
    .tiaozhuan{
        margin-top: 150px
    }
</style>
