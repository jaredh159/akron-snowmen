const path = require(`path`);

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
  ],
  presets: [path.resolve(__dirname, "./next-preset.js")],
  typescript: {
    check: false,
    reactDocgen: false,
  },
};
