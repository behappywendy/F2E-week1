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
  <main>
    <section>
      <h3>沒想法？試試這些...</h3>
      <Carousel :allImage="allImage"></Carousel>
    </section>
    <section>
      <h3>熱門景點</h3>
      <div class="tourist_content">
        <Card
          v-for="scenicSpot in scenicSpotData"
          :key="scenicSpot.ScenicSpotID"
          :scenicSpot="scenicSpot"
        ></Card>
      </div>
      <VuePaginationTw
        :total-items="100"
        :current-page="currentPage"
        :per-page="perPage"
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
export default {
  name: "Home",
  components: {
    Input,
    Card,
    Carousel,
    VuePaginationTw,
  },
  data() {
    return {
      scenicSpotData: null,
      currentPage: 1,
      totalPage: 10,
      perPage: 10,
    };
  },
  created() {
    Api.getScenicSpotData().then((response) => {
      this.scenicSpotData = response.data;
    });
  },
  methods: {
    clickDate() {
      this.scenicSpotData.map((scenicSpotData) => {
        console.log(scenicSpotData.OpenTime);
      });
    },
    pageChanged(pageNumber) {
      console.log(pageNumber);
      this.currentPage = pageNumber;
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
}
h3 {
  margin-bottom: 24px;
}
::v-deep .vuePagination {
  display: flex;
  justify-content: center;
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
</style>
