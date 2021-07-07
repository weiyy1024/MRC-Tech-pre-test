<template lang="pug">
 .container
  img
  .nav-item(v-for='item in navs')
    img.icon(:src="`/icons/icon-${item.key}.svg`")
    span {{ item.title }}

</template>
<script>
export default {
    name:'NavBar',
    data(){
        return{
            navs:[
                {title:'首頁',key:'home'},
                {title:'獨家',key:'diamond'},
                {title:'明星',key:'star'},
                {title:'影視',key:'video'},
                {title:'時尚',key:'fashion'},
            ]
        }
    }

}
</script>
<style lang="scss" scoped>
.container{
    height: 90px;
    margin: 28px 0 0;
    background-color: $bg-color-dark;
    display: flex;
    color:#ffffff;
    font-size: 20px;
    // padding: 0 calc((100vw-1232px)/2);
    // justify-content: center;
    .nav-item{
        padding: 30px 40px;
        .icon{
            width: 20px;
            height: 20px;
        }
    }
}
</style>
