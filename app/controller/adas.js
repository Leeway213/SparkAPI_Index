'use strict';

const Controller = require('egg').Controller;

class AdasController extends Controller {
    async index() {
        await this.ctx.render('adas.nj');
    }
}

module.exports = AdasController;