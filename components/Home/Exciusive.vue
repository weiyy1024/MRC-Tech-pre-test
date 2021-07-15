<template lang="pug">
    div
     .news-img-container
      .newsImg
       img(:src="news[0].Img")
      span.img-content.ellipsis {{ news[0].Title }}
     .newsTitle(v-for="item in news")
      img.icon(src='/icons/icon-hot.svg')
      a.ellipsis {{ item.Title }}
      

</template>
<script>
export default{
    name:'Home-Exciusive',
    computed:{
        exciusive(){
            return this.$store.state.data.exciusive
        }
    },
    props:{
        news:{
            type:Array
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
                object-fit: cover;
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