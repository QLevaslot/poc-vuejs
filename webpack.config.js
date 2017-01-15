module.exports = {
  entry: './app/main',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    // https://vuejs.org/v2/guide/installation.html#Standalone-vs-Runtime-only-Build
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}