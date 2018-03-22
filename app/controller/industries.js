const Controller = require('egg').Controller;

class IndustriesController extends Controller {
    async index() {
        const industry = this.ctx.params.industry;
        const model = this.ctx.service.industriesService.generateModel(industry);
        if (model) {
            await this.ctx.render('industries.nj', {
                title: model.title,
                slogon: model.slogon,
                usecases: model.usecases
            });
        } else {
            this.ctx.status = 404;
        }
    }
}

module.exports = IndustriesController;