<template lang="pug">
    div
     .news-img-container
      .newsImg
       img(src="/img-null.svg")
      span.img-content.ellipsis 23年前葛优与张国荣的一张合照，中间的女人国荣的一张合照，中间的女人
     .newsTitle(v-for="item in exciusive")
      img.icon(src='/icons/icon-hot.svg')
      a.ellipsis {{ item.title }}
      

</template>
<script>
export default{
    name:'Home-Exciusive',
    computed:{
        exciusive(){
            return this.$store.state.data.exciusive
        }
    }
}
</script>
<style lang="scss" scoped>
div{
    .news-img-container{
        position: relative;
        margin-bottom: 2rem;
        width: auto;
        .newsImg{ 
            margin: 2rem 0;
            img{
                @include size(42rem, 24rem);
            }
        }
        .img-content{
            width: 100%;
            position: absolute;
            padding: 0 24px 12px 24px;
            font-size: 1.6rem;
            bottom: 0;
            color: #ffffff;
        }    

    }
    .newsTitle{
        width: 42rem;
        display: flex;
        .icon{
            @include size(2.2rem, 2.2rem);
            margin-right: 1.2rem;
        }
        a{
           color: #4a4546;
           font-size: 1.6rem;
           margin-bottom: 1.6rem;
           cursor: pointer;
           &:hover{
               color: $bg-color-dark;
           }
        }
    }
}

</style>