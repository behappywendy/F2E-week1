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
        <img :src="checkImageUrl.url" :alt="checkImageUrl.description" />
      </div>
      <div class="information">
        <p>地址 : {{ currrentData.Address }}</p>
        <p>電話服務 : {{ currrentData.Phone }}</p>
        <p>開放時間 : {{ currrentData.OpenTime }}</p>
        <h3>詳細資訊</h3>
        <p>{{ currrentData.DescriptionDetail }}</p>
      </div>
    </section>
    <div>
      <h3>景點地圖</h3>
      <iframe
        :src="createPosition"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
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
  computed: {
    createPosition() {
      const position = {};
      position.PositionLat = this.currrentData.Position.PositionLat; //緯度
      position.PositionLon = this.currrentData.Position.PositionLon; //經度
      return `https://maps.google.com/?ie=UTF8&t=m&ll=${position.PositionLat},${position.PositionLon}&spn=0.003381,0.017231&z=18&output=embed`;
    },
    checkImageUrl() {
      const image = {
        url: "",
        description: "",
      };
      if (this.currrentData.Picture.PictureUrl1) {
        image.url = this.currrentData.Picture.PictureUrl1;
        image.description = this.currrentData.PictureDescription1;
        return image;
      } else {
        image.url = require("./../assets/image/Picture-Empty-L.svg");
        image.description = "目前沒有圖片";
        return image;
      }
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
      font-size: 16px;
    }
    20% {
      font-size: 18px;
    }
    50% {
      font-size: 20px;
    }
    70% {
      font-size: 18px;
    }
    100% {
      font-size: 16px;
    }
  }
}

section {
  padding: 24px 0px;
  @media (min-width: 576px) {
    display: flex;
  }
}
article {
  margin-bottom: 50px;
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
    border-radius: 20px;
  }
}
h2 {
  margin-bottom: 10px;
}
h3 {
  font-size: 20px;
  margin-bottom: 20px;
}
.information {
  p {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  @media (min-width: 576px) {
    width: 50%;
    padding: 0px 20px;
  }
}
</style>
