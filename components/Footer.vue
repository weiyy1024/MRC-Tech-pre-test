<template lang="pug">
.container
 .bg
  div
   a 友情链结
   span 廣告連結
  div
   a 廣告連結
 .bg-2 
  p Copyright © 2020-2021 星星号外娱乐新闻网 版权所有
</template>
<script>
export default{
    name:'Footer'
    
}
</script>
<style lang="scss" scoped>
.container{
    position:fixed;
    bottom: 0;
    .bg {
      height: 178px;
      padding: 24px 360px;
      background-color: $bg-color-light;
    }
    .bg-2 {
      height: 46px;
      padding: 12px 675px;
      color: #ffffff;
      background-color:$bg-color-dark;
      font-size: 16px;
      text-align: center; 
      align-items: center;
    }

}
</style>
