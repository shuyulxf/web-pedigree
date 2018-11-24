
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller } = app;
  require('./router/pedigree')(app);
  router.get('/', controller.home.home.index);
};
