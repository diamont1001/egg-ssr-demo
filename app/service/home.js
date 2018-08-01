'use strict';

module.exports = app => {

  class HomeSerivce extends app.Service {
    constructor(ctx) {
      super(ctx);

    }

    async getTestDate() {
      return {
        name: 'egg-seo-demo',
      };
    }
  }

  return HomeSerivce;
};
