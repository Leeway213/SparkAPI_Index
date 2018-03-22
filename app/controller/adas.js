'use strict';

const Controller = require('egg').Controller;

class AdasController extends Controller {
    async index() {
        this.ctx.body = "adas controller";
    }
}

module.exports = AdasController;