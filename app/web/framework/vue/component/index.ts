import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Layout from 'component/layout/standard/index.ts';

Vue.component(Layout.name, Layout);
Vue.use(ElementUI);