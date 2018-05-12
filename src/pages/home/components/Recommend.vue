<template>
  <div>
      <div class="title">热门推荐</div>
      <ul>
          <li class="item" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
          </li>
      </ul>
    
  </div>
</template>

<script>
export default {
  data(){
      return{
          recommendList:[{
              id:'001',
              imgUrl:'http://img1.qunarzz.com/p/tts9/1704/57/6ada12f65c546e02.jpg_200x200_7c39a91e.jpg',
              title:'上海欢乐谷',
              desc:'上海迪士尼乐园一日游 含门票+往返巴士+随车讲解 限时特惠'
          },
          {
              id:'002',
              imgUrl:'http://img1.qunarzz.com/p/tts9/1704/57/6ada12f65c546e02.jpg_200x200_7c39a91e.jpg',
              title:'上海欢乐谷',
              desc:'上海迪士尼乐园一日游 含门票+往返巴士+随车讲解 限时特惠'
          },
          {
              id:'003',
              imgUrl:'http://img1.qunarzz.com/p/tts9/1704/57/6ada12f65c546e02.jpg_200x200_7c39a91e.jpg',
              title:'上海欢乐谷',
              desc:'上海迪士尼乐园一日游 含门票+往返巴士+随车讲解 限时特惠'
          },
          {
              id:'004',
              imgUrl:'http://img1.qunarzz.com/p/tts9/1704/57/6ada12f65c546e02.jpg_200x200_7c39a91e.jpg',
              title:'上海欢乐谷',
              desc:'上海迪士尼乐园一日游 含门票+往返巴士+随车讲解 限时特惠'
          }]
      }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eeeeee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 2rem
        // background red
        .item-img
            width 1.5rem
            height 1.5rem
            padding .1rem
        .item-info
            flex 1
            min-width 0
            padding .1rem
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                background #DDA0DD


</style>

