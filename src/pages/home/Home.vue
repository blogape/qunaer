<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list='swiperLists' v-if='swiperLists'></home-swiper>
    <home-icon  :list='iconList' ></home-icon>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
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
          swiperLists:[],
         iconList:[],
         recommendList:[],
         weekendList:[]
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
            this.swiperLists=data.swiperList;
            this.iconList=data.iconList;
            this.recommendList=data.recommendList;
            this.weekendList=data.weekendList;
            // console.log(this.iconList);
        }
    }
  }
};
</script>

<style>
</style>
