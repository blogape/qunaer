<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
      <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      opcityStyle: {
        opcity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60 && top < 140) {
        let opcity = top / 140;
        opcity=opcity>1?1:opcity;
        this.opcityStyle = {
          opcity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
      window.removeEventListener('scroll',this.handleScroll);
  },
};
</script>

<style lang='stylus'  scoped>
@import '~styles/varibles.styl';

.header-fixed {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $bgColor;
  font-size: 0.3rem;

  .header-back {
    position: absolute;
    text-align: center;
    color: #fff;
    width: 0.64rem;
    top: 0;
    left: 0;
    font-size: 0.4rem;
  }
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  text-align: center;
  line-height: 0.8rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);

  .back-icon {
    color: #fff;
  }
}
</style>
