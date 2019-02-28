<template>
  <div class="search">
    <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名与拼音">
    <div class="search-content" ref='search' v-show="keyword">
      <ul>
        <li v-for='(item,key) of list' :key='key' class="search-item border-bottom" @click='handleCityClick(item.name)'>{{item.name}}</li>
        <li class="search-item border-bottom" v-show='hasNoData'>
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      let that=this;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.keyword){
        this.list=[];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in that.cities) {
          that.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list=result;
      }, 100);
    }
  },
  mounted() {
    this.scroll=new Bscroll(this.$refs.search);
    
  },
  methods: {
     handleCityClick(city){
       this.$store.commit('changeCity',city);
       this.$router.push('/');
     }
  },
  computed: {
    hasNoData(){
      return !this.list.length
    }
  }
 
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    box-sizing: border-box;
    line-height: 0.62rem;
    color: #666;
    padding: 0 0.1rem;
    text-align: center;
    border-radius: 0.06rem;
  }

  .search-content {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    z-index: 999;
    bottom: 0;
    background: #eee;
      .search-item{
          line-height:.62rem;
          background-color:#fff;
          border-bottom:1px sol 
          padding-left:.2rem;
          color:#666;
      }

  }
}
</style>
