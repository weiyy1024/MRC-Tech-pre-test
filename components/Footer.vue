<template lang="pug">
.container-f
 .footTop
  p.title 友情链结
  div
   a.linkItem(v-for='item in footLinks') {{ item }} &nbsp
  p.title 廣告連結
 .footBottom 
  Copyright © 2020-2021 星星号外娱乐新闻网 版权所有
</template>
<script>
export default{
    name:'Footer',
    data(){
      return{
        footLinks:[
          '回合制手游','pcb','餐饮加盟','手游','手游下载','爱好游','朱雀','手游下载','雨林木风手游','传奇私服','手机游戏下载网','梦想新大陆','手机游戏下载','博客园','浏览器下载','传奇手游','手游下载','PS5','527U手游','阳光系统','平陆手游网','公益服游戏','网页游戏无限元宝',
        ]
      }
    }
    
}
</script>
<style lang="scss" scoped>
.container-f{
    margin-top: 4rem 0 0 0 ;
    color: $font-color-main;
    .footTop {
      height: 17.8rem;
      padding: 2.4rem $inner-container;
      background-color: $bg-color-light;
      .title{
        font-size: 2rem;
        margin: 0;
      }
      div{
        margin: 1.2rem 0 2rem 0;
        font-size: 1.4rem;
        color: $font-color-sec;
        cursor: pointer;
        .linkItem{
          &:hover{
            font-weight: bold;
          }
        }
      }
    }
    .footBottom {
      height: 4.6rem;
      padding: 1.2rem $inner-container;
      color: #ffffff;
      background-color:$bg-color-dark;
      font-size: 1.6rem;
      text-align: center; 
    }
@media screen and (max-width:1232px){
      .container-f{
          width: 100%;
          margin: 0;
      }
      .footTop{
        padding: 1.4rem 2.8rem;
        height: auto;
        .title{
          color: $bg-color-dark;
        }
        div{
          margin: .6rem 2.8rem 1.2rem 2.8rem;
          height: 4rem;
          overflow: hidden;
          color: $font-color-main;
        }
      }
      .footBottom {
        margin: 0;
      }  
    }   
}
</style>
