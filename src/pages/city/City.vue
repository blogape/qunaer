<template>
    <div>
        <city-header></city-header>
        <city-search :cities='allcities'></city-search>
        <city-list :all='allcities' :hot='hotCities' :letter='letter'></city-list>
        <city-alphabet :all='allcities' @change='handleLetterChange'></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header';
import axios from 'axios';
import CitySearch from './components/Search';
import CityList   from './components/List';
import CityAlphabet from './components/Alphabet';
export default {
    components:{
        CityHeader:CityHeader,
        CitySearch:CitySearch,
        CityList:CityList,
        CityAlphabet:CityAlphabet
    },
    data(){
        return{
                allcities:{},
                hotCities:[],
                letter:"",
                
        }
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            console.log(res);
            res=res.data;
            if(res.ret&&res.data){
                    const data=res.data;
                    this.allcities=data.cities;
                    this.hotCities=data.hotCities;
             }   
        },
        handleLetterChange(letter){
            this.letter=letter;

        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

</style>
