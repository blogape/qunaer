<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩场景
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    city:String
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  line-height: 0.86rem;
  display: flex;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    padding-left: 0.2rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    height: 0.64rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    color: #ccc;
    background-color: #fff;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      font-size: 0.2rem;
    }
  }
}
</style>
