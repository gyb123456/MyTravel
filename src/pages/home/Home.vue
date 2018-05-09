<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>ssssss</div>
    <router-link to="/list">跳至列表页</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
 name:'Home',
 components:{
     'HomeHeader':HomeHeader,
     'HomeSwiper':HomeSwiper
 }
}
</script>

<style>
    .home{
        font-size: 30px;
    }
</style>
