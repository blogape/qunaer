<template>
    <div class="banner" @click='handleBannerClick'>
        <img :src="bannerImg"/>
        <div class="banner-info">
            <div class="banner-title">{{this.sightNmae}}</div>
            <div class="banner-number">{{this.bannerImgs.length}}</div>
        </div>
        <components-gallary v-show='showGallary'></components-gallary>
    </div>
</template>

<script>
import ComponentsGallary from 'components/gallary/Gallary'
export default {
    props:{
        sightNmae:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data(){
        return{
            showGallary:false
        }
    },
    components:{
        ComponentsGallary:ComponentsGallary
    },
    methods: {
        handleBannerClick(){
            this.showGallary=true;
        }
    },
}
</script>

<style lang='stylus' scoped>
.banner{
    position:relative;
    overflow:hidden;
    height:0;
    padding-bottom:50%;
    img{
        width:100%;
    }
    .banner-info{
        position:absolute;
        left:0;
        right:0;
        color:#fff;
        display:flex;
        bottom:0;
        line-height:.6rem;
        .banner-title{
            flex:1;
            font-size:.32rem;
        }
        .banner-number{
            padding:0 .4rem;
            height:.4rem;
            line-height:.4rem;
            border-radius:.2rem;
            background-color:rgba(0,0,0,.8);
        }
    }
    
}
</style>
