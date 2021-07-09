<template lang="pug">
    div
     .newsImg
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
    .newsImg{
        @include size(42rem, 24rem);
        margin: 2rem 0;
        background-color: cornflowerblue;
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