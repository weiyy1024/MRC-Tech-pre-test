<template lang="pug">
 .Oval(v-show="show" @click="scrollTop")
  img(src='/icons/icon-top.svg')
</template>
<script>
export default {
    name:'GoTop',
    data(){
      return{
        show:false
      }
    },
    methods:{
      scrollDown(){
        this.show=window.scrollY>300
      },
      scrollTop(){
        window.scrollTo(0,0)
      }

    },
    mounted(){
      window.addEventListener('scroll',this.scrollDown)
    },

}
</script>
<style lang="scss" scoped>
.Oval {
  @include size(7.6rem, 7.6rem);
  padding: 2rem;
  box-shadow: 0 0 1.2rem 0 rgba(208, 93, 93, 0.5);
  background-color:$bg-color-dark;
  position:fixed;
  bottom: 26.4rem;
  right: 3rem;
  border-radius: 50%;
  cursor: pointer;
}
@media screen and (max-width:1232px){
  .Oval{
  @include size(38px, 38px);
  padding: 10px;
  bottom: 198px;
  right: 12px;
    img{
    @include size(18px, 18px);
    }
  }
}

</style>

