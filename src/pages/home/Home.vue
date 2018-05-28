<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <header-recommend></header-recommend>
    <div class="tiaozhuan">
        <router-link to="/list" >跳至列表页</router-link>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HeaderRecommend from './components/Recommend'
// import axios from 'axios'

// var $axios = axios.create({
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
//   }
// })


export default {
 name:'Home',
 components:{
     'HomeHeader':HomeHeader,
     'HomeSwiper':HomeSwiper,
      HomeIcons,
      HeaderRecommend

 },
 mounted(){
     this.getHomeInfo()
 },
 methods:{
     getHomeInfo(){
        //  static/mock/index.json
        //  http://10.1.30.208:50067/InfoIssue/routes/idAndName
        
        //  this.$axios.get('http://10.1.30.72:8080/InfoIssue/routes/idAndName').then(res=>{
        //      console.log(res)
        //  });

     }
 }
}
</script>

<style>
    .home{
        /* font-size: 30px; */
    }
    .tiaozhuan{
        margin-top: 150px
    }
</style>
