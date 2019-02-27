<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">
                当前城市
            </div>
            <div class="button-list">
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
            </div>
        </div>
         <div class="area">
 <div class="title  border-topbottom">
                热门城市
            </div>
            <div class="button-list">
                    <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                     <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                     <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                     <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
                     <div class="button-wrapper">
                            <div class="button">
                                北京
                            </div>
                    </div>
            </div>
        </div>
         <div class="area">
 <div class="title  border-topbottom">
                A
            </div>
            <div class="item-list">
                <div class="item border-topbottom">
                    阿拉二
                </div>
                   <div class="item border-topbottom">
                    阿拉二
                </div>
                   <div class="item border-topbottom">
                    阿拉二
                </div>
                   <div class="item border-topbottom">
                    阿拉二
                </div>
                   <div class="item border-topbottom">
                    阿拉二
                </div>
                   <div class="item border-topbottom">
                    阿拉二
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
.border-topbottom{
    &:before{
        background-color:#ccc;
    }
    &:after{
        background-color:#ccc;
    }
}
.title{
    line-height:.4rem;
    background-color:#eee;
    color:#666;
    padding-left:.2rem;
    font-size:.26rem;
}
.button-list{
    padding:.1rem;
    overflow:hidden;
    padding:.1rem .6rem .1rem .1rem;
    .button-wrapper{
        float:left;
        width:33.33%;
        .button{
            margin:.1rem;
            text-align:center;
            padding:.1rem 0;
            border:.02rem solid #ccc;
        }
    }
}
.item-list{
    .item{
        line-height:.74rem;
        padding-left:.2rem;
        color:#666;
    }
}
.list{
    position:absolute;
    top:1.58rem;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;

}
</style>
