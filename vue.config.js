const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  configureWebpack: {
    output: {
      filename: '[name].js', 
      chunkFilename: '[name].js' 
    },
  },
  
  chainWebpack: (config) => {
   
  },
};
