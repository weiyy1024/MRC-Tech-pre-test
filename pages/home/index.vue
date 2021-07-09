<template lang="pug">
    section.mainContainer
            HomeBanner
            .newsContainer
                .leftContainer
                    HomeMainTitle
                    HomeLatest
                .rightContainer
                    HomeMainTitle
                    HomeExciusive
                    .advimg
                    HomeMainTitle
                    HomeHotspot
            .HtmlEdit
</template>
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
                    grid-area: le;
                    width: 74rem;
                    margin-right: 4rem;
                }
                .rightContainer{
                    grid-area: ri;
                    width: 42rem;
                    .advimg{
                        @include size(42rem, 34.6rem);
                        background-image: url('/img-null.svg');
                        background-repeat:no-repeat;
                        background-size: cover;
                        margin: 3rem 0 ;
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