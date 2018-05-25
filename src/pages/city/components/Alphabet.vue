<template>
    <div>
        <ul class="list" >
            <li class="item" v-for="item of cities" :key="item" @click="clickAlphabet">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cities:['A','B','C','D','E','F','G'],
        }
    },
    methods :{
        clickAlphabet (e){
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText)
        }
    }
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
