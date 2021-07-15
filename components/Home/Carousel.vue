// <template lang="pug">
//   client-only
//     .swiper-container(v-if="isSingle")
//       .swiper-slide
//         .img-box
//           img.carousel-img
//         a.img-box
//           img.carousel-img
//     .swiper-container(v-else)
//       .swiper-wrapper
//         swiper.swiper-slide(:options='swiperOption')
//           swiper-slide
//             .img-box
//               img.carousel-img
//             a.img-box
//               img.carousel-img
//         .swiper-button-prev.prev
//           img(src="/icon-carousel-arrow.svg")
//         .swiper-button-next.next
//           img(src="/icon-carousel-arrow.svg")
//         .swiper-pagination
// </template>

// <script>
// import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

// export default {
//   name: 'Carousel',
//   components: {Swiper, SwiperSlide},
//   props: {
//     ads: {
//       type: Array,
//       default: () => [],
//     },
//   },
//   data: () => ({
//     swiperOption: {
//       centeredSlides: true,
//       autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//       },
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     },
//   }),
//   computed: {
//     showAds() {
//       let ads = this.ads.slice(0, 10);
//       if (ads.length === 0) ads.push(this.defaultAD());
//       return ads
//     },
//     isSingle() {
//       return this.showAds.length <= 1
//     },
//     head() {
//       return this.showAds[0]
//     },
//   },
//   methods: {
//     defaultAD() {
//       return {
//         Id: 0,
//         sort: 99,
//         image: "/img-null.png",
//         href: "",
//         target: "_blank",
//         noFollow: "nofollow noopener noreferrer",
//       };
//     },
//   },
// }
// </script>

// <style scoped lang="scss">

// .swiper-container {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
// //   display: -webkit-box;
// //   display: -ms-flexbox;
// //   display: -webkit-flex;
//   display: flex;
//   -webkit-align-items: center;
//   align-items: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   font-size: 18px;
//   text-align: center;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   background: #fff;

//   .img-box {
//     width: 100%;
//     height: 100%;

//     .carousel-img {
//       min-width: 100%;
//       max-width: 100%;
//       height: 100%;
//       min-height: 100%;
//       max-height: 100%;
//       object-fit: cover;
//     }
//   }
// }

// ::v-deep {
//   .swiper-button-prev,
//   .swiper-button-next {
//     position: absolute;
//     top: 50%;
//     width: 40px;
//     height: 40px;
//     // background-color: $main-color;
//     opacity: .64;
//     cursor: pointer;

//     &::after {
//       display: none;
//     }

//     img {
//       vertical-align: middle;
//       -webkit-user-drag: none;

//     }
//   }

//   .swiper-button-prev {
//     left: 0;
//   }

//   .swiper-button-next {
//     right: 0;
//     transform: scaleX(-1);
//   }

//   .swiper-pagination {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;

//     .swiper-pagination-bullet {
//       display: inline-block;
//       margin: 6px 4px;
//       width: 12px;
//       height: 12px;
//       background-color: white;
//       border-radius: 50%;
//       opacity: .9;
//       transition: .2s;
//       cursor: pointer;

//       &-active {
//         width: 36px;
//         background-color: #ed6d6d;
//         border-radius: 6px;
//       }
//     }
//   }
// }
// </style>
