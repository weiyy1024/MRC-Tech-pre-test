<template lang="pug">
    section.mainContainer
            .newsContainer
                .leftContainer
                    NuxtChild(keep-alive)
                .rightContainer
                    .advimg
                        img(:src='advStraight[0].Image')
                    HomeMainTitle(title='今日热点' en='HotSpot')
                    HomeHotspot(:news='hotspot')
            .HtmlEdit
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    async asyncData({ store }) {
    await Promise.all([
      store.dispatch('hotspot-news/fetch'),
    ])
  },
    computed : {
      ...mapGetters({
          hotspot:'hotspot-news/list',
          advStraight:'adv/straight',
      })  
    }
}
</script>

<style lang="scss" scoped>
    .mainContainer{
        width: 1232px;
        margin:0 auto;
            .newsContainer{
                width: 123.2rem;
                display: flex;
                margin: 3rem 0;
                padding: 1.6rem;
                .leftContainer{
                    width: 74rem;
                    margin-right: 4rem;
                }
                .rightContainer{
                    width: 42rem;
                    .advimg{
                        @include size(42rem, 34.6rem);
                        margin: 3rem 0 ;
                        cursor: pointer;
                    }
                }
                 
            }
            .HtmlEdit{
                width: 100%;
                grid-area: ed;
                height: 32rem;
                background-color: cornflowerblue;
                margin: 4rem 0;
            }

    }
    @media screen and (max-width:1232px) {
        .mainContainer{
            width: 100%;
            .newsContainer{
                width: 100%;
                margin: 0;
                .leftContainer{
                    width: 100%;
                }
                .rightContainer{
                    display: none;
                }         
            }
            .HtmlEdit{
               display: none; 
            }
        }
    }
</style>