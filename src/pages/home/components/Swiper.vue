<template>
<div class="wrapper">
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for='(item) of list' :key='item.id' >
     <img class="swiper-img" :src='item.imgUrl'/>
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>
<script>
  export default {
    name: 'carrousel',
    props:{
      list:Array
    },

    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination:'.swiper-pagination'
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log(this.list);
      setTimeout(()=>{
      console.log(this.list);

      },3000)
      // console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    watch:{
       
    }
  }
</script>
<style lang='stylus' scoped>
.wrapper{
    width: 100%;
    overflow:hidden;
    height:0;
    padding-bottom:31.25%;
    .swiper-img{
    width: 100%;
}
}

</style>
