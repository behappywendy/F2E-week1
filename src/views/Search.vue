<template>
  <Loading v-if="isLoading"></Loading>
  <main v-else>
    <p>搜尋結果{{ currentShowSpotData.length }}筆</p>
    <div class="tourist_content">
      <Card
        v-for="scenicSpot in currentShowSpotData"
        :key="scenicSpot.ScenicSpotID"
        :scenicSpot="scenicSpot"
      ></Card>
      <!-- <p>{{ currentShowSpotData }}</p> -->
    </div>
  </main>
</template>
<script>
import Card from "@/components/Card";
import Api from "@/services/Api";
import Loading from "@/components/Loading.vue";
export default {
  name: "Search",
  components: {
    Card,
    Loading,
  },
  data() {
    return {
      currentShowSpotData: [],
      isLoading: true,
    };
  },
  created() {
    this.submit();
  },
  methods: {
    async submit() {
      let { keyword } = this.$route.query;
      let getData = await Api.getSearchData(keyword);
      this.currentShowSpotData = getData.data;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  padding-top: 50px;
  > p {
    font-size: 30px;
    margin-bottom: 50px;
  }
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
</style>
