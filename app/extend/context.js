'use strict';

module.exports = {
  async layoutRender(tpl, locals) {
    const data = Object.assign({
      layoutVersion: this.app.config.layoutVersion,
    }, locals);

    return this.render(tpl, data, {
      layout: 'layout.ejs',
      rmWhitespace: true,
    });
  },
};
