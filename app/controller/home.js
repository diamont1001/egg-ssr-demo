'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('pages/home.ejs', {
      name: 'home',
      title: '爱玩品',
      keywords: '爱玩品',
    }, {
      layout: 'layout.ejs',
    });
  }
}

module.exports = HomeController;
