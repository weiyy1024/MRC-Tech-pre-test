<template lang="pug">
    .title 
     div {{ title.slice(0, 2) }}
      span.titleSec {{ title.slice(2) }}
     span.titleEn {{ en }} 
</template>
<script>
export default{
    name:'Home-MainTitle',
    props:{
      title :{type:String,require:true},
      en:{type:String,require:true} 
    },
    // computed:{
    //     titleCn(which){
    //         return which===1 ? this.title.slice(0, 2) : this.title.slice(2, -1) 
    //     }
    // }
}
</script>
<style lang="scss" scoped>
.title{
    color: $bg-color-dark;
    font-size: 2.4rem;
    margin: 0;
    display: flex;
    border-bottom: solid 1px #cdc8c8;
    align-items: flex-end;
    div{
        position: relative;
        bottom: -3px;
        &::after{
            content: '';
            background-color:white;
            width: 113% ;
            height: 1px;
            display: block;
            position: relative;
            bottom: 2px;
        }
        .titleSec{
            font-size: 2rem;
        }
    }
    .titleEn{
        font-size: 1.6rem;
        margin-left: 1.2rem;
        color: #4a4546;
        position: relative;
        &::after{
            content: "";
            background-color: $bg-color-dark;
            display: block;
            @include size( 100% , 2px);
            position:absolute;
            left: 0;
        }

    }

}
@media screen and (max-width:1232px){
    .title{
       display: none; 
    }   
}

</style>
