<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :letter="letter" :cities="cities"></city-list>
        <city-alphabet @change="clickAlphabet"></city-alphabet>
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
            cities:'',
            letter:''
        }
    },
    mounted(){
        this.getCities()
    },
    methods:{
        clickAlphabet(letter){
            // console.log(letter)
            this.letter=letter
        },
        getCities(){
            this.$axios.get('/static/mock/city.json').then(res=>{
                this.cities=res.data.data.cities
                console.log(res.data.data.cities)
            });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
