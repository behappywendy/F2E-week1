<template>
  <router-link :to="{ name: 'Info', params: { id: scenicSpot.ScenicSpotID } }">
    <div class="card">
      <div class="wrap_img">
        <img
          :src="scenicSpot.Picture && scenicSpot.Picture.PictureUrl1"
          v-if="scenicSpot.Picture && scenicSpot.Picture.PictureUrl1"
          :alt="scenicSpot.Picture.PictureDescription1"
        />
        <img
          v-else
          src="./../assets/image/Picture-Empty-L.svg"
          alt="暫時沒有圖片"
        />
      </div>
      <div class="card_content">
        <h4>{{ scenicSpot.ScenicSpotName }}</h4>
        <div class="adderss">
          <div class="wrap_img">
            <img src="./../assets/image/map.png" alt="地圖小圖示" />
          </div>
          <p>{{ scenicSpot.Address }}</p>
        </div>
        <div class="information">
          <div class="wrap_img">
            <img src="./../assets/image/local_phone.svg" alt="電話小圖示" />
          </div>
          <p>{{ translatePhone }}</p>
          <div class="wrap_img">
            <img src="./../assets/image/access_time.svg" alt="開放時間" />
          </div>
          <p class="openTime">{{ scenicSpot.OpenTime }}</p>
        </div>
        <div class="introduce">
          <p>{{ scenicSpot.DescriptionDetail }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    scenicSpot: { type: Object },
  },
  data() {
    return {};
  },
  computed: {
    translatePhone() {
      if (this.scenicSpot.Phone.includes("886")) {
        return this.scenicSpot.Phone.replace(/^886-/, 0);
      }
      return this.scenicSpot.Phone;
    },
  },
};
</script>
<style scoped lang="scss">
// * {
//   outline: 1px solid red;
// }
.card {
  width: 358px;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 24px;
  color: black;
  h4 {
    font-weight: 700;
    margin-bottom: 8.5px;
  }
  > .wrap_img {
    height: 171px;
  }
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0px 26px 14px -4px color.$black_500;
  }
}
.wrap_img {
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.card_content {
  padding: 8px 12px;
  .wrap_img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
}
.adderss,
.information {
  display: flex;
  font-size: 12px;
  color: color.$black_600;
}
.adderss {
  margin-bottom: 5px;
}
.openTime {
  flex-basis: 180px;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.information {
  margin-bottom: 8.5px;
  > div {
    flex-grow: 1;
  }
  > p {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.introduce {
  font-size: 14px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
h4 {
  font-size: 18px;
}
</style>
