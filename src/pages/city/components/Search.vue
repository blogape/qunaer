<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名与拼音" />
    </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
.search{
    height:.72rem;
    padding:0 .1rem;
    background-color:$bgColor;
    .search-input{
        width:100%;
        height:.62rem;
        box-sizing:border-box;
        line-height:.62rem;
        color:#666;
        padding:0 .1rem;
        text-align:center;
        border-radius:.06rem;
    }

}

</style>
