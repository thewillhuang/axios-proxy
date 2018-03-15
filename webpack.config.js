const config = {
  target: 'node',

  node: { __dirname: true },

  output: {
    libraryTarget: 'commonjs',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  externals: {
    'aws-sdk': 'aws-sdk',
  },

};

module.exports = config;
