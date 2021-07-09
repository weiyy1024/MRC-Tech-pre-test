<template lang="pug">
.hotnews
    .hotspotItem(v-for="(item,index) in hotspot")
        div
         .rank(:class="index<=2 ? 'top3':'' ") {{ index +1 }} 
        img.hotspotImg(src='/img-null.svg')
        .hotspotTitle
         a {{ item.title }}

</template>
<script>
export default{
    name:'Home-Hotspot',
    computed:{
       hotspot(){
            return this.$store.state.data.hotspot
        }
    }

}
</script>
<style lang="scss" scoped>
.hotnews{
    margin-top: 2.2rem;
    .hotspotItem{
        padding-bottom: 1.2rem;
        display: flex;
        .rank{
            @include size(2.4rem, 2.8rem);
            font-size: 1.6rem;
            color: #4a4546;
            margin: 3.4rem 0;
            text-align: center;
            }
        .top3{
            background-image: url('/icons/bg-rank.svg');
            color: #ffffff;
            background-repeat:no-repeat;
        }
        .hotspotImg{
            @include size(14.8rem, 9.6rem);
            margin: 0 1.2rem;
        }
        .hotspotTitle{
            padding: 2.4rem 0;
            color: #4a4546;
            font-size: 1.6rem;
            cursor: pointer;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover{
                color: $bg-color-dark;
            }

        }
    }
}

</style>