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
  publicPath: process.env.NODE_ENV === "production" ? " /F2E-week1/" : "/",
};
