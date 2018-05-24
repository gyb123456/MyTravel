<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="clickAlphabet"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
    components:{
        CityHeader:CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:['A','B','C','D','E','F','G'],
            letter:''
        }
    },
    methods:{
        clickAlphabet(letter){
            // console.log(letter)
            this.letter=letter
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
