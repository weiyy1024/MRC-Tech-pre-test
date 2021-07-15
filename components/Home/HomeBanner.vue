<template lang="pug">
    .container-c
        .carousel
          //- Carousel
        .nwsContainer
            .newsItem(v-for='item in newsRight')
                img(:src='item.Img')
                .content-container
                  a {{item.Title}}
    
</template>
<script>
export default{
    name:'HomeBanner',
    props:{
      news:{
        type:Array
      }
    },
    computed:{
      newsRight(){
        return this.news.slice(0,3)
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
          &::after{
            content:'';
            @include size( 0, 0);
            border-top:1rem solid transparent;
            border-bottom: 1rem solid transparent;
            border-right: 1rem solid $bg-color-dark;
            margin: 5.4rem 0; 
            width: 10px;
            visibility: hidden;
          }
        &:hover{
          color: $bg-color-dark;
          border: .2rem solid $bg-color-dark;
          font-weight: bold;
          &::after{
            visibility: visible
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
