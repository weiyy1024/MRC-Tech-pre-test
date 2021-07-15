<template lang="pug">
div.latesContainer
    HomeLatestNews(:news='news.slice(0,5)')
    .adv
     img(:src='adv[0].Image')
    HomeLatestNews(:news='news.slice(5,10)')
    .adv
     img(:src='adv[0].Image')
    HomeLatestNews(:news='news.slice(10,15)')
    .adv
     img(:src='adv[0].Image')
    HomeLatestNews(:news='news.slice(15)')
    .adv
     img(:src='adv[0].Image')
</template>
<script>
export default{
    name:'Home-Latest',
    props:{
        news:{
            type:Array
        },
        adv:{
            type:Array
        }
    },
    computed:{
        // getText() {
        //     this.$nextTick(()=>{
        //     let parser = new DOMParser();
        //     return parser.parseFromString(, "text/html").documentElement.textContent;
        //     })
        // },

    }

}
</script>
<style lang="scss" scoped>
.adv{
    background-color:pink;
    margin: 2rem 0;
    img{
        @include size(100%,9rem)
    }
}
</style>
