const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   name: "@storybook/preset-create-react-app",
    //   options: {
    //     craOverrides: {
    //       fileLoaderExcludes: ["less"],
    //     },
    //   },
    // },
    // "@storybook/preset-ant-design",
    // {
    //   name: "@storybook/preset-scss",
    //   options: {
    //     cssLoaderOptions: {
    //       modules: {
    //         auto: true,
    //       },
    //     },
    //   },
    // },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: { lessOptions: { javascriptEnabled: true } },
        },
      ],
      include: path.resolve(__dirname, "../src/"),
    });

    return config;
  },
};
