<template>
  <swiper class="slide" :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
    <swiper-slide><img src="./../assets/image/card1.png" alt="" /></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper } from "swiper/vue/swiper.js";
import { SwiperSlide } from "swiper/vue/swiper-slide.js";
import "swiper/swiper.min.css";
export default {
  name: "Carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  setup() {
    const onSwiper = () => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style scoped lang="scss">
.slide .swiper-slide {
  width: 128px !important;
  margin-right: 8px !important;
  img {
    width: 100%;
  }
}
</style>
