<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content" v-show="list.length">
            <ul>
                <li v-for="item of list" :key="item.id" class="item">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cities:{}
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                // list=[]
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(()=>{
                  const result = []
                  for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if( value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1 ){
                                result.push(value)
                            }
                        });
                  }
                  this.list=result
            },100)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            height .62rem
            width 100%
            line-height .62rem
            text-align center
            border-border-radius .06rem
            color #FFC0CB
    .search-content
        z-index 1
        overflow hidden
        position absolute
        background #F8F8FF
        top 1.58rem
        left 0
        right 0
        bottom 0
        .item
            line-height .6rem
</style>
