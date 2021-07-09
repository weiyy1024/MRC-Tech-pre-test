<template lang="pug">
    .container-c
        .carousel
        .nwsContainer
            .newsItem(v-for='item in news')
                img(src='/img-null.svg')
                .content-container
                    a {{item.content}}
    
</template>
<script>
export default{
    name:'HomeBanner',
    data(){
        return{
            news:[
                {img:'',content:'娱乐圈流行强强联手：王一博给黄景瑜做配？'},
                {img:'',content:'《密室大逃脱3》邓伦分享西红柿鸡蛋面食谱 王嘉尔教杨幂《密室大逃脱3》邓伦分享西红柿鸡蛋面食谱 王嘉尔教杨幂'},
                {img:'',content:'错过就是一辈子！分手12年，胡歌捡7年垃圾薛佳凝代发修行1年'}
                ]
        }
    }

}

</script>
<style lang="scss" scoped>
.container-c{
  @include size(123.2rem, 46rem);
  padding: 1.6rem;
  background-color: $bg-color-light;
  margin: 5rem 0 0 0 ;
  display: flex;
  .carousel{
    @include size(75.8rem, 42.8rem);
    background-color: $bg-color-dark;
    margin-right: 1.6rem;
  }
  .nwsContainer{
    .newsItem{
        @include size(42.6rem, 13.2rem);
        background-color: white;
        margin-bottom: 1.6rem;
        display: flex;
        border-radius: .6rem;
        cursor: pointer;
        &:hover{
          color: $bg-color-dark;
          border: .2rem solid $bg-color-dark;
          font-weight: bold;
          &::after{
            content:'';
            @include size( 0, 0);
            border-top:1rem solid transparent;
            border-bottom: 1rem solid transparent;
            border-right: 1rem solid $bg-color-dark;
            margin: 5.4rem 0; 
          }
        }
        img{
          @include size(15.8rem, 10.8rem);
          margin: 1.2rem;
        }
        .content-container{
          margin: 4.2rem .8rem 4.2rem 0;
          height: 4.8rem;
          overflow: hidden;
          font-size: 1.6rem;
            a{
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
        }
    }
  }
}
@media screen and (max-width:1232px) {
  .container-c{
    width: 100%;
    height: auto;
    padding: 0;
    .carousel{
      width: 100%;
      // height: auto;
      margin:0;
    }
    .nwsContainer{
      display: none;
    }
  }

  
}
</style>
