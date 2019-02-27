<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list='list' v-if='list'></home-swiper>
    <home-icon   :iconList='list'></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcon from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcon: HomeIcon,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data(){
      return{
          city:'',
          list:[],
        iconList:[]
      }
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
        res=res.data;
        if(res.ret&&res.data){
            const data=res.data;
            // console.log(data.swiperList);
            this.city=data.city;
            this.list=data.swiperList;
            this.iconList=data.iconList;
            // console.log(this.iconList);
        }
    }
  }
};
</script>

<style>
</style>
