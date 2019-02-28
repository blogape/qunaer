<template>
    <div class="header">
        城市选择
        <div>
            <router-link to='/'>

                  <span class="iconfont header-back">&#xe624;</span>
            </router-link>

        </div>
    </div>
</template>

<script>

export default {
   
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';


    .header{
        overflow:hidden;
        height:.86rem;
        line-height:.86rem;
        text-align:center;
        color:#fff;
        position:relative;
        background:$bgColor;
        font-size:.3rem;
        .header-back{
            position:absolute;
            text-align:center;
            color:#fff;
            width:.64rem;
            top:0;
            left:0;
            font-size:.4rem;
        }
    }
</style>
