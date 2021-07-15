<template lang="pug">
.container-nav
    .add 
     | 設為首頁 
     span |
     | 加入我的最愛
    img.logo(src="/logo/logo-pc.svg")
    .titleContainer
        .nav-item(v-for='item in navs' @click='handleTab(item.name,$event)' :ref='item.name')
            div
                img.icon(:src="`/icons/icon-${item.img}.svg`")
                span {{ item.title }}
        .under
    .searchContainer
        img.search(src="/icons/icon-search.svg" @click='toggle')
        .searchBar(v-if='show')
         input.keyword(type="text" placeholder='请输入关键字')
         .searchSubmit 搜寻
    .mask(v-show='show' v-scroll-lock="show")
</template>
<script>
export default {
    name:'NavFirst',
    data(){
        return{
            navs:[
                {title:'首頁',name:'home',img:'home'},
                {title:'獨家',name:'exclusive',img:'diamond'},
                {title:'明星',name:'celebrity',img:'star'},
                {title:'影視',name:'movie',img:'video'},
                {title:'時尚',name:'fashion',img:'fashion'},
            ],
            show:false,
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
        },
        handleTab(type,event){
            if (type === "home") {
                this.$router.push("/");
            } else {
                this.$router.push({path: "/news/" + type});
            }
            // console.log(this.$refs[type])
        },
       
    },

}
</script>
<style lang="scss" scoped>
.container-nav{
    width: 100%;
    height: 9rem;
    margin: 2.8rem 0 0;
    background-color: $bg-color-dark;
    display: flex;
    color:#ffffff;
    font-size: 2rem;
    padding: 0  $inner-container;
    justify-content: space-between;
    .add{
        background-image: url('/bg-nav.svg');
        background-repeat: no-repeat;
        @include size(24rem, 2.8rem);
        position:absolute;
        font-size: 1.2rem;
        color: $bg-color-dark;
        padding: .6rem 4rem;
        top: -2.8rem;
        right: $inner-container;
        span{
            margin: 0 1.6rem;
        }
    }
    .logo{
        margin: .5rem 11.7rem .5rem 10.6rem;
    }
    .titleContainer{
        display: flex;
        position: relative;
        .nav-item{
            padding: 3rem 4rem;
            cursor: pointer;
            position: relative;
            &:hover{
                background-color:rgba(255, 233, 233, .2);
            }
            .icon{
                @include size(2rem, 2rem);
                position: relative;
                top: .3rem;
            }
            span{
                margin-left: .8rem;

            }
        }
        .active{
            background-color: rgba(255, 233, 233, .2);
        }
        .under{
            @include size(1.8rem , .6rem);
            background-color:#ffffff;
            position:absolute;
            top: 8.5rem;
            left: 7rem;
            border-radius: .3rem;
            // transform: translate(142px,0%);
            // transform: translate(292px,0%);
            // transform: translate(440px,0%);
            // transform: translate(589px,0%);
            // top: 2.6rem;
            // left:2.6rem;
            transition: transform .3s ease;
            @media (max-width:1232px) {
              top: 40px;
              width: 12px;
              height: 4px;
              background-color: $bg-color-dark;
              border-radius: 2px;
            }

        }
    }
    .searchContainer{
        position: relative;
        z-index: 11;
        &::before{
            content: "";
            display: block;
            width: 4.6rem;
            height: .1rem;
            background: #ffffff;
            opacity: 0.5;
            right: 8rem;
            bottom: 4.4rem;
            position: absolute;
            transform:rotate(90deg)
        }
        .search{
            margin: 3.3rem;
            @include size(2.4rem, 2.4rem);
            cursor: pointer;
        }
        .searchBar{
        @include size(30rem, 4.8rem);
        padding: .6rem;
        box-shadow: 0 0 .7rem 0 rgba(158, 124, 124, 0.41);
        border: solid .1rem $bg-color-dark;
        background-color: rgba(255, 255, 255, 0.8);
        position:absolute;
        right: 0;
        display: flex;
        .keyword{
            @include size(28.8rem,3.2rem);
            border-radius: 0px;
            border:.1rem solid $border-color-light;
            padding: .6rem 1rem;
            &:focus{outline:none};
        }
        .searchSubmit{
            @include size(8.2rem,3.2rem);
            padding: .6rem 1.9rem;
            background-color: $bg-color-dark;
            color: #ffffff;
            font-size: 1.4rem;
            cursor: pointer;
        }
    }
    }
    .mask{
        position:absolute;
    }
    
}
@media screen and (max-width:1232px){
    .mask{
        @include size(100%,100%);
        background-color: rgba(0, 0, 0, 0.54);
        z-index: 10;
        position:absolute;
        top: 48px;
        display: block;
    }
    .container-nav{
        @include size(100%,4.8rem);
        margin: 0;
        .add{
            display: none;
        }
        .logo{
            @include size(auto,84%);
            margin:auto 16px;
        }
        .titleContainer{
            background-color: #fff;
            @include size(100%,44px);
            position: absolute;
            top: 48px;
            padding: 12px 30px;
            box-shadow: 0 1px 4px 0 rgba(170, 134, 134, 0.2);
            background-color: #ffffff;
            justify-content: space-between;
        .nav-item{
            color: $font-color-main;
            padding: 0;
            &:hover{
                &::after{
                    display: none;
                }
            }
            // &:active{
            //     color: $bg-color-dark;
            //     &::after{
            //         display: none;
            //         content: "";
            //         display: block;
            //         @include size( 1.8rem , .6rem ) ;
            //         border-radius: .3rem;
            //         background-color: $bg-color-dark;
            //         position: relative;
            //         top:0;
            //         left: 18px;
            //     }
            // }
            img{
                display: none;
            }
        }
        }
        .searchContainer{
            &::before{
                display: none;
            }
            .search{
                @include size(20px, 20px);
                margin: 14px 16px;
                color: #ffffff;
            }
            .searchBar{
                top: 48px;
            }
        }
    }

}
.active{
    background-color:rgba(255, 233, 233, .2);
}
</style>
