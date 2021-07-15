<template lang="pug">
section
    .newItem(v-for="item in news")
     img(:src='item.Imgs')
     .right
      a.newsTitle {{ item.Title }}
      p.ellipsis 7月13日，赖美云在绿洲晒出一组夏日清新写真。照片中的赖美云头戴贝雷帽，身穿浅黄色短裙，时而捧脸卖萌，时而露出甜美微笑。
      div
       div {{ item.Author }}
       img.icon-time(src='/icons/icon-date.svg')
       span.date {{ item.SourceTime }}
</template>
<script>
export default{
    name:'Home-LatestNews',
    // data() {
    //     return {
    //       items:this.$attrs.news,
    //     }
    // },
    props:{
        news:{
            type:Array
        },
    },
}
</script>

<style lang="scss" scoped>
.newItem{
    padding: 2rem 0;
    display: flex;
    border-bottom: .1rem #cdc8c8 dotted;
    cursor: pointer;
    &:hover{
        background-color:rgba(255, 233, 233, .4);
        .right{
            .newsTitle{
                color: $bg-color-dark;
            }
        }
    }
    img{
        @include size(24rem, 16rem)
    }
    .right{
        margin-left: 2rem;
        padding-top: 1.6rem;
        width: 48rem;
        .newsTitle{
            height: 5.2rem;
            font-size: 2rem;
            letter-spacing: .1rem;
            color: #4a4546;
            
        }
        p{
            font-size: 1.4rem;
            color: #7a7274;
            margin: 1.2rem 0 2rem 0;
        }
        div{
            display: flex;
            font-size: 1.2rem;
            div{
                color: $bg-color-dark;
                background-color: $bg-color-light;
                padding: .4rem 1.4rem;
                border-radius: 1.4rem;
                margin-right: .8rem;
            }
            .icon-time{
                @include size(1.6rem, 1.6rem);
                position: relative;
                top: .5rem;
            }
            .date{
                color: #9a9494;
                margin-left: .4rem;
                padding: .4rem 0;

            }
        }
    }
}
@media screen and (max-width:1232px){
    .newItem{
        width: 100%;
        margin: 0;
        padding-top: 0;
        padding-bottom:16px ;
        img{
            @include size(34%,auto)
        }
        .right{
            @include size(58%,auto);
            .newsTitle{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}

</style>