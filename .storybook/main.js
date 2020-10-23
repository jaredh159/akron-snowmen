module.exports = {
  "stories": [
    "../stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      }
    }
  ],
  typescript: {
    check: false,
    reactDocgen: false
  }
}
