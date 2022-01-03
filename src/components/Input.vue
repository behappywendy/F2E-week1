<template>
  <input type="search" placeholder="試試看 台北古蹟" />
</template>
<script>
export default {
  name: "Input",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
input[type="search"] {
  width: 358px;
  height: 48px;
  border-radius: 30px;
  border: 1px solid black;
  bottom: 1px;
  background: require("../image/放大鏡.svg") no-repeat white;
  background-position: 3% 50%;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 20px 50px;
  &:focus {
    outline: none;
    background-image: none;
  }
}

@media (min-width: 768px) {
  input[type="search"] {
    width: 508px;
  }
}
</style>
