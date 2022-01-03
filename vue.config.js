module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @use "@/assets/scss/base/_color.scss";
          @use "@/assets/scss/base/_reset.scss";
        `,
      },
    },
  },
};
