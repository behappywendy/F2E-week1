<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />

  <main>
    <div class="nav">
      <span>各地景點</span><i class="fas fa-arrow-right"></i><span>{{ currrentData.ScenicSpotName }}</span>
    </div>

    <article>
      <h2>{{ currrentData.ScenicSpotName }}</h2>
      <p>{{ currrentData.Description }}</p>
    </article>
    <section>
      <div class="wrap_img">
        <img :src="currrentData.Picture.PictureUrl1" :alt="currrentData.Picture.PictureDescription1" />
      </div>
      <div class="information">
        <p>地址</p>
        <p>{{ currrentData.Address }}</p>
        <p>電話服務</p>
        <p>{{ currrentData.Phone }}</p>
        <p>開放時間</p>
        <p>{{ currrentData.OpenTime }}</p>
        <p>詳細資訊</p>
        <p>{{ currrentData.DescriptionDetail }}</p>
      </div>
    </section>
  </main>
</template>
<script>
import api from "@/services/Api";
export default {
  props: ["id"],
  data() {
    return {
      currrentData: [],
    };
  },
  created() {
    this.getOneOfScenicSpot(this.id);
  },
  methods: {
    async getOneOfScenicSpot(id) {
      try {
        const detailData = await api.getDetailData(id);
        this.currrentData = detailData.data[0];
      } catch (error) {
        throw new Error(error);
      }
    },
    clickButton() {
      console.log(this.currrentData);
    },
  },
};
</script>
<style scoped lang="scss">
* {
  // outline: 1px solid red;
}
main {
  padding: 20px 48px;
}
.nav {
  margin-bottom: 20px;
}
.fa-arrow-right {
  display: flex;
  align-items: center;
  margin: 0px 10px;
  // animation: arrow 3s infinite;
  @keyframes arrow {
    0% {
      font-size: 14px;
    }
    20% {
      font-size: 18px;
    }
    50% {
      font-size: 20px;
    }
    70% {
      font-size: 16px;
    }
    100% {
      font-size: 14px;
    }
  }
}

section {
  padding: 24px 0px;
  @media (min-width: 576px) {
    display: flex;
  }
}
.wrap_img {
  @media (min-width: 576px) {
    width: 816px;
    height: 517px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.information {
  @media (min-width: 576px) {
    width: 50%;
    padding: 0px 20px;
  }
}
</style>
