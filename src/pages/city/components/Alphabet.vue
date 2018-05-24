<template>
    <div>
        <ul class="list">
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        position absolute
        right 0
        top 6rem
        line-height .4rem
        color $bgColor
        // background red
        display flex
        flex-direction column
        width .4rem
        text-align center


</style>
