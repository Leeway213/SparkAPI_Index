const Controller = require('egg').Controller;

class ThanksController extends Controller {
    async index() {
        await this.ctx.render('thankyou.nj');
    }
}

module.exports = ThanksController;