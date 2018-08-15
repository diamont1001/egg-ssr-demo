'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const testData = await this.service.home.getTestDate(); // get test data from service

    // await this.ctx.render('pages/home/index.ejs', {
    //   name: 'home',
    //   title: 'I am title',
    //   keywords: 'keywords',
    //   data: testData,
    // }, {
    //   layout: 'layout.ejs',
    // });
    
    await this.ctx.layoutRender('pages/home/index.ejs', {
      name: 'home',
      title: 'I am title',
      keywords: 'keywords',
      data: testData,
    });
  }
}

module.exports = HomeController;
