<template>
  <section>
    <div id="videoContainer">
      <div class="video" v-for="(video,index) in videos" :key="index">
        <!-- video img -->
           <div id="videoImgContainer">
              <img class="videoPic" :src="video.videoPic" alt="">
              <div class="videoLength">{{ video.videoLength }}</div>
           </div>
           <div id="videoContent">
             <!-- chanle pic  -->
             <div class="content-left">
              <img class="channelPic" :src="video.channelPic" alt="">
             </div>
             <div class="content-right">
               <!-- video title  -->
               <div class="top">
                <nuxt-link class="title" to="">{{ video.title }}</nuxt-link>
                <span type="submite" class="icon has-text-light">
                  <fa :icon='["fas" , "ellipsis-v"]' />
                </span>
               </div>
               <!-- channel name & views & release time  -->
                <div class="bottom"> 
                  <nuxt-link class="channelName" to="">{{ video.channelName }}</nuxt-link>・
                  <p><span>{{ video.viewsNum }}</span> Views</p>・
                  <p><span>{{ video.releaseTime }}</span> ago</p>
                </div>
             </div>
           </div>
      </div>
    </div>
  </section>
</template>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.1/vue.cjs.js' integrity='sha512-2e2aXOh4/FgkCAUyurkjk0Uw4m1gPcExFwb1Ai4Ajjg97se/FEWfrLG1na4mq8cgOzouc8qLIqsh0EGksPGdqQ==' crossorigin='anonymous'></script>
<script>
export default {
        layout: 'home',
        data() {
          return {
            keywords:['All','Music','Love songs','Games','Movies','Chellenge','Taiwan','Covid-19','TOEIC','Outfit','Workout','Engineer','Foods'],
            videos:[
              {
                videoPic:require('~/assets/img/1.png'),
                channelPic:require('~/assets/img/channel1.jpeg'),
                title:'颜人中 Yan Renzhong | 颜人中歌曲合集 2021 | Best Songs Of Yan Renzhong 2021 | 2021 流行 歌曲 颜人中',
                channelName:'Music Star',
                viewsNum:'13k',
                releaseTime:'2 months',
                videoLength:'20:08' 
                },{
                videoPic:require('~/assets/img/2.png'),
                channelPic:require('~/assets/img/channel2.jpeg'),
                title:'【防疫手作】號稱「不會融化的冰淇淋」日本超夯甜點，在家也可以簡單做！【黃氏兄弟開箱頻道】',
                channelName:'黃氏兄弟開箱頻道',
                viewsNum:'25k',
                releaseTime:'3 months',
                videoLength:'15:39'
                },{
                videoPic:require('~/assets/img/3.png'),
                channelPic:require('~/assets/img/channel3.jpeg'),
                title:'【艾琳】最激情30分钟站立超燃脂有氧运动 | 热身 + 胸背手臂腹部臀腿 + 拉伸 | Best 30 Min Standing HIIT Cardio Fat Burn Workout',
                channelName:'Eileen Yu',
                viewsNum:'53k',
                releaseTime:'2 hours',
                videoLength:'22:10'
                },{
                videoPic:require('~/assets/img/4.png'),
                channelPic:require('~/assets/img/channel4.jpeg'),
                title:'【聊姐了解】女人的計畫-你可以不是被選的那一個！主動出擊也能扭轉局勢。曾之喬feat.夏于喬',
                channelName:'曾之喬 chiaochiaotzeng',
                viewsNum:'1k',
                releaseTime:'3 days',
                videoLength:'07:32'
                },{
                videoPic:require('~/assets/img/5.png'),
                channelPic:require('~/assets/img/channel5.jpeg'),
                title:'[ Vue.js 手牽手，一起嗑光全家桶 ] 主廚的話 - 餐點簡介與相關說明',
                channelName:'Alex 宅幹嘛',
                viewsNum:'23k',
                releaseTime:'2 years',
                videoLength:'16:16'
                },{
                videoPic:require('~/assets/img/6.png'),
                channelPic:require('~/assets/img/channel6.jpeg'),
                title:'瘦子E.SO【Something I Dont Need】Official Music Video',
                channelName:'滾石唱片 ROCK RECORDS',
                viewsNum:'10k',
                releaseTime:'43 minutes',
                videoLength:'24:00'
                },{
                videoPic:require('~/assets/img/7.png'),
                channelPic:require('~/assets/img/channel7.jpeg'),
                title:'人生巔峰！饒舌歌手的約會行程真的厲害到爆但我緊張到快死了..FT.瘦子E.so｜愛莉莎莎Alisasa',
                channelName:'愛莉莎莎 Alisasa',
                viewsNum:'1M',
                releaseTime:'4 months',
                videoLength:'1:20:34'
                },{
                videoPic:require('~/assets/img/8.png'),
                channelPic:require('~/assets/img/channel8.jpeg'),
                title:'婁峻碩SHOU - COLORFUL M/V',
                channelName:'婁峻碩SHOU',
                viewsNum:'6 hours',
                releaseTime:'58K',
                videoLength:'2:18:34'
                },{
                videoPic:require('~/assets/img/9.png'),
                channelPic:require('~/assets/img/channel9.jpeg'),
                title:'【千千進食中】超商line群組團購熱門品項開箱！喊+1好像不用錢？！',
                channelName:'千千進食中',
                viewsNum:'1 year',
                releaseTime:'2 months',
                videoLength:'10:56'
                },{
                videoPic:require('~/assets/img/10.png'),
                channelPic:require('~/assets/img/channel10.jpeg'),
                title:'15分鐘 極速燃脂全身運動|省時又爆汗系列(一個月見效)',
                channelName:'Coffee林芊妤',
                viewsNum:'45K',
                releaseTime:'10 minutes',
                videoLength:'13:47'
                },{
                videoPic:require('~/assets/img/11.png'),
                channelPic:require('~/assets/img/channel11.jpeg'),
                title:'【八年級生必聽偶像劇串燒！女聲翻唱13首經典秒陷回憶殺】｜@女神美美哒',
                channelName:'台灣達人秀',
                viewsNum:'22K',
                releaseTime:'3 days',
                videoLength:'1:33:00'
                },{
                videoPic:require('~/assets/img/12.png'),
                channelPic:require('~/assets/img/channel12.jpeg'),
                title:'Eric周興哲《至少我還記得 At Least I Remember》Official Music Video',
                channelName:'Eric周興哲 ',
                viewsNum:'38K',
                releaseTime:'5 days',
                videoLength:'10:00'
                }
            ]
            } 
        }
    }
</script>
