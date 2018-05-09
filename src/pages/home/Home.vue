<template>
  <div class="home">
    <home-header></home-header>
    <router-link to="/list">跳至列表页</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'

export default {
 name:'Home',
 components:{
     'HomeHeader':HomeHeader
 }
}
</script>

<style>
    .home{
        font-size: 50px;
    }
</style>
