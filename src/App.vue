<template>
  <router-view />
  <footer>
    <p>資料來源: TDC API</p>
    <p>Built by: Stephanie Chang (UX/UI Design) ,XXXX (Front-End Developer)</p>
  </footer>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
footer {
  text-align: center;
  padding: 8px 0px 21px 0px;
  background-color: color.$primary_light;
  color: color.$Primary_A11y;
}
</style>
