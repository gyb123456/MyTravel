<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>

      
    </div>
    
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .icons
        width 100%
        overflow hidden
        height 0
        padding-bottom  50%
        // box-sizing border-box
        // background green
        .icon
            overflow hidden
            float left
            height 0
            width 25%
            padding-bottom 25%
            // background red
            position relative
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                padding .1rem
                box-sizing border-box
                // background blue
                .icon-img-content
                    display block
                    height  100%
                    margin 0 auto
            .icon-desc  
                position absolute
                left 0   
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                color $darkTextColor
                text-align center
                font-size 15px

</style>
