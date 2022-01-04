<template>
  <swiper class="slide" :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide v-for="(image, index) in allImage" :key="index">
      <img :src="image" alt="" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper } from "swiper/vue/swiper.js";
import { SwiperSlide } from "swiper/vue/swiper-slide.js";
import "swiper/swiper.min.css";
export default {
  name: "Carousel",
  props: {
    allImage: {
      type: Array,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {
    clickImage() {
      console.log(this.allImage);
    },
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
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
  height: 100px;
  margin-right: 8px !important;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
