import Vue from 'vue';
import iView from 'iview';
import '../../asset/style/_theme.less';
import '../component';
import '../directive';
import '../filter';
export default function render(options) {
  if (options.store && options.router) {
    return (context) => {
      options.router.push(context.state.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map((component) => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
          return null;
        }),
      ).then(() => {
        context.state = options.store.state;
        return new Vue(options);
      });
    };
  }
  return (context) => {
    Vue.use(iView);
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data: context.state });
    return new Promise((resolve) => {
      resolve(app);
    });
  };
}