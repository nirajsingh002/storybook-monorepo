module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "refs": {
    "foundation": { 
      "title": "Foundation",
      "url": 'http://yrcw-demo-foundation.s3-website.us-east-2.amazonaws.com/'
    },
    "marketing": { 
      "title": "Insights & Marketing",
      "url": 'http://yrcw-demo-marketing.s3-website.us-east-2.amazonaws.com/' 
    },
  }
}