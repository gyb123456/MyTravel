<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                <img class="backBtn" src="/static/pics/backBtn.png">
            </router-link>
        </div>
    </div>
</template>

<script>
 
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        height .86rem
        background $bgColor
        text-align center
        line-height .86rem
        overflow hidden
        position relative
        .backBtn
            position absolute
            text-align center
            width .60rem
            height .60rem
            margin-top .14rem
            top 0
            left 0
            

</style>

