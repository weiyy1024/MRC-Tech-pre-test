<template lang="pug">
.Bitmap.left(v-if='close')
  img(:src="list.Image")
  img.icon(src="/icons/icon-close.svg" @click='closeHandler')
</template>
<script>
export default{
    name:'BannerAdv',
    data(){
      return{
        close:true
      }
    },
    methods:{
      closeHandler(){
        this.close=false
      }
    },
    props:{
      list:{
        type:Object
      }
    }
    
}
</script>
<style lang="scss" scoped>
.left{
  float: left;
  top:55.6rem;
}
.right{
  top: 41.5rem;
  float: right;
}
.Bitmap {
  @include size(24rem, 36rem);
  position: relative;
  // background-image:url('/img-null.svg') ;
  // background-repeat: no-repeat;
  // background-size: cover;
   @media screen and (max-width:1232px){
        display: none;
    }
  
  .icon{
    position:absolute;
    top:.6rem;
    right: .6rem;
    cursor: pointer;
  }
}
</style>
