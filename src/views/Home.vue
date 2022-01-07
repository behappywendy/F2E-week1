<template>
  <header>
    <div class="wrap_header">
      <h1 class="logo">
        <img src="./../assets/image/logo.png" alt="logo" />
      </h1>
      <h2 class="header_text">
        <p>台灣景點</p>
        <p>一手掌握</p>
      </h2>
    </div>
    <Input></Input>
  </header>
  <Loading v-if="isLoading"></Loading>
  <main v-else>
    <section>
      <h3>沒想法？試試這些...</h3>
      <Carousel :allImage="selectRandomPhoto"></Carousel>
    </section>
    <section>
      <h3>熱門景點</h3>
      <div class="tourist_content">
        <Card
          v-for="scenicSpot in currentShowSpotData"
          :key="scenicSpot.ScenicSpotID"
          :scenicSpot="scenicSpot"
        ></Card>
      </div>
      <VuePaginationTw
        :total-items="caculateAllItems"
        :current-page="page.currentPage"
        :per-page="page.perPage"
        @page-changed="pageChanged($event)"
        :go-button="false"
        styled="centered"
        class="vuePagination"
      />
    </section>
  </main>
</template>
<script>
import Input from "@/components/Input";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Api from "@/services/Api";
import VuePaginationTw from "vue-pagination-tw";
import Loading from "@/components/Loading.vue";
export default {
  name: "Home",
  components: {
    Input,
    Card,
    Carousel,
    Loading,
    VuePaginationTw,
  },
  data() {
    return {
      isLoading: true,
      scenicSpotData: null,
      currentShowSpotData: [],
      page: {
        currentPage: 1,
        perPage: 10,
      },
    };
  },
  created() {
    Api.getScenicSpotData().then((response) => {
      this.scenicSpotData = response.data;
      this.isLoading = false;
      this.currentShowSpotData = this.scenicSpotData.slice(0, 10);
    });
  },
  methods: {
    clickDate() {
      this.scenicSpotData.map((scenicSpotData) => {
        console.log(scenicSpotData.OpenTime);
      });
    },
    pageChanged(pageNumber) {
      this.page.currentPage = pageNumber;
    },
    getRandom() {
      return Math.floor(Math.random() * this.scenicSpotData.length);
    },
  },
  computed: {
    allImage() {
      let images = [];
      this.scenicSpotData.forEach((data) => {
        if (!data.Picture.PictureUrl1) {
          return;
        }
        images.push(data.Picture.PictureUrl1);
        return;
      });
      return images;
    },
    caculateAllItems() {
      return Math.ceil(this.scenicSpotData.length);
    },
    selectRandomPhoto() {
      let photoIndex = [];
      for (let count = 0; count <= 30; count++) {
        photoIndex.push(this.getRandom());
      }
      let images = photoIndex.map((randomIndex) => {
        if (this.scenicSpotData[randomIndex].Picture.PictureUrl1) {
          return this.scenicSpotData[randomIndex].Picture.PictureUrl1;
        }
      });
      return images.filter(Boolean);
    },
  },
  watch: {
    "page.currentPage": function () {
      let start = (this.page.currentPage - 1) * this.page.perPage;
      let end = this.page.currentPage * this.page.perPage;
      this.currentShowSpotData = this.scenicSpotData.slice(start, end);
    },
  },
};
</script>
<style lang="scss" scoped>
// * {
//   outline: 1px solid red;
// }
header {
  background-color: color.$primary_light;
  position: relative;
  margin-bottom: 68px;
  p {
    animation: text 5s ease-in-out;
  }
}
@keyframes text {
  0% {
    transform: translate(-200px, 200px);
    transform: scale(1.1);
    color: rgba(15, 106, 145, 1);
  }
  50% {
    transform: translate(-100px, 200px);
    transform: scale(2);
    color: rgba(141, 220, 237, 1);
  }
  100% {
    transform: translate(0px, 0px);
    transform: scale(1);
  }
}
.logo {
  width: 286px;
  img {
    width: 100%;
    vertical-align: bottom;
  }
}

@media (min-width: 768px) {
  .logo {
    width: 350px;
    margin-right: 65px;
  }
}
@media (min-width: 1440px) {
  .logo {
    width: 548px;
    margin-right: 102px;
  }
}
.header_text {
  display: flex;
  color: color.$Primary_A11y;
  font-weight: 700;
  line-height: 35px;
  font-size: 28px;
  margin-top: 8px;
}
@media (min-width: 768px) {
  .header_text {
    width: 285px;
    font-size: 40px;
    line-height: 50px;
    flex-direction: column;
    :nth-child(2) {
      text-align: right;
    }
  }
}

.wrap_header {
  width: 358px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 62px;
}
@media (min-width: 768px) {
  .wrap_header {
    width: 750px;
    flex-direction: row;
  }
}
@media (min-width: 1440px) {
  .wrap_header {
    width: 1096px;
  }
}
main {
  position: relative;
  margin: 0 auto;
  max-width: 1106px;
}

.tourist_content {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 auto;
  margin-bottom: 80px;
}
h3 {
  margin-bottom: 24px;
}
::v-deep .vuePagination {
  display: flex;
  justify-content: center;
  p {
    display: none;
  }
  svg,
  a {
    color: color.$black_600;
    width: 30px;
    &:focus {
      font-weight: 600;
      color: color.$primary_Default;
    }
  }
}

section {
  margin-bottom: 100px;
}
</style>
