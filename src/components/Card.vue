<template>
  <router-link :to="{ name: 'Info', params: { id: scenicSpot.ScenicSpotID } }">
    <div class="card">
      <div class="wrap_img">
        <img
          :src="scenicSpot.Picture.PictureUrl1"
          v-if="scenicSpot.Picture.PictureUrl1"
          :alt="scenicSpot.Picture.PictureDescription1"
        />
        <img v-else src="./../assets/image/Picture-Empty-L.svg" alt="no photo" />
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
          <p>{{ scenicSpot.Phone }}</p>
          <div class="wrap_img">
            <img src="./../assets/image/access_time.svg" alt="全天" />
          </div>
          <p>{{ scenicSpot.OpenTime }}</p>
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
    width: 13.5px;
    height: 15px;
    margin-right: 5px;
  }
}
.adderss,
.information {
  display: flex;
  font-size: 12px;
  color: rgba(111, 111, 111, 1);
}
.adderss {
  margin-bottom: 5px;
}
.information {
  margin-bottom: 8.5px;
}
.information p:nth-child(2) {
  margin-right: 17.5px;
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
