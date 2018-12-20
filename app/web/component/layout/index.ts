
import MainLayout from './main.vue';

const content = '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{title}}</title>
  <meta name="keywords" :content="keywords">
  <meta name="description" :content="description">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>
<body :class="baseClass">
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  components: {
    MainLayout,
  },
  computed: {
  },
  name: 'Layout',
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    keywords: {
      type: String,
      required: false
    },
    baseClass: {
      type: String,
      required: false
    }
  },
  template: EASY_ENV_IS_NODE ? template : content,
};
