<template>
    <div class="list" ref="wrapper">
        <div>
         <div class="area">
             <div class="title border-topbottom">当前城市</div>
             <div class="btn-list">
                 <div class="btn-wrapper">
                     <div class="btn"> {{this.$store.state.city}}</div>
                 </div>
             </div>
         </div>
         <div class="area">
             <div class="title border-topbottom">热门城市</div>
             <div class="btn-list">
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
                 <div class="btn-wrapper">
                     <div class="btn">北京</div>
                 </div>
             </div>
         </div>
         <div class="area" 
                v-for="(item,key) in cities" 
                :key="key"
                :ref="key">
             <div class="title border-topbottom" v-text="key"></div>
             <!-- [Object.keys(item)[0]] -->
             <div class="item-list">
                <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                <!-- <div class="item border-topbottom">阿拉尔--</div> -->
             </div>
             
         </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll"

export default {
    props: {
        letter:String,
        cities:{}
    },
    data(){
        return {
            // cities:{
            //         'A':[
            //                 {name:'阿拉尔1',id:1},
            //                 {name:'阿拉尔2',id:2},
            //                 {name:'阿拉尔3',id:3},
            //                 {name:'阿拉尔4',id:4},
            //                 {name:'阿拉尔5',id:5},
            //                 {name:'阿拉尔6',id:6}
            //             ]
            //         ,
            //         'B':[
            //                 {name:'阿拉尔1',id:1},
            //                 {name:'阿拉尔2',id:2},
            //                 {name:'阿拉尔3',id:3},
            //                 {name:'阿拉尔4',id:4},
            //                 {name:'阿拉尔5',id:5},
            //                 {name:'阿拉尔6',id:6}
            //             ]
            //         ,
            //         'C':[
            //                 {name:'阿拉尔1',id:1},
            //                 {name:'阿拉尔2',id:2},
            //                 {name:'阿拉尔3',id:3},
            //                 {name:'阿拉尔4',id:4},
            //                 {name:'阿拉尔5',id:5},
            //                 {name:'阿拉尔6',id:6}
            //             ]
            //         ,
            //         'D':[
            //                 {name:'阿拉尔1',id:1},
            //                 {name:'阿拉尔2',id:2},
            //                 {name:'阿拉尔3',id:3},
            //                 {name:'阿拉尔4',id:4},
            //                 {name:'阿拉尔5',id:5},
            //                 {name:'阿拉尔6',id:6}
            //             ]
            //         }
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper, {})
    },
    watch:{
        letter(){
            console.log(this.letter)
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
 .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #669
 .border-topbottom
    &:before
        border-color #777
    // &:after
    //     border-color #777   
 .list
    position absolute
    overflow hidden
    // background red
    top 1.58rem
    left 0
    right 0
    bottom 0
    .btn-list
        padding .1rem .6rem .1rem .2rem
        overflow hidden
        .btn-wrapper
            float left
            width 33.3%
            // background #0f0
            .btn
                text-align center
                border .02rem solid 
                padding .1rem 
                margin .1rem .1rem
                // background #0f0
                border-radius .06rem
    .item-list
        .item
            line-height .7rem
            color #666
            padding-left .2rem
//  .test
//     position relative
//     overflow scroll
//     // background green
//     width 100%
</style>
