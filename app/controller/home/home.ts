import { Controller } from 'egg';
export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    //ctx.body = await ctx.model.User.find();
    let res = await this.ctx.model.FamilyTreeInfo.find({}).exec();
    await ctx.render('home/index.js', res);
  }
}