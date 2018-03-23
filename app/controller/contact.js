const Controller = require('egg').Controller;

class ContactController extends Controller {
    async index() {
        this.ctx.status = 302;
        this.ctx.body = 'ok';
        const body = this.ctx.request.body;
        await this.ctx.service.contactService.sendEmail('leewayzhang@outlook.com', '来客人啦，快接客', JSON.stringify(body));
    }
}

module.exports = ContactController;