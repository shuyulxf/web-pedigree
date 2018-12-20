
import { Controller } from 'egg';
import * as Model from '../../mocks/pedigree/tree';
export default class PedigreeController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }
  async search(id: Number) {
    this.ctx.body = Model.getTree({x:1});
  }
}