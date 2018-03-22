const Service = require('egg').Service;

class IndustriesService extends Service {
    generateModel(industry) {
        let model = {};

        model.usecases = [];

        let index = 1;
        do {
            let key = "usecase_title_" + index + "_" + industry;
            let value = this.ctx.__(key);
            if (key === value) {
                break;
            }

            model.usecases.push({
                title: this.ctx.__("usecase_title_" + index + "_" + industry),
                description: this.ctx.__("usecase_description_" + index + "_" + industry),
                img: this.ctx.__("usecase_img_" + index + "_" + industry),
            });
            index++;
        } while(true);

        switch(industry) {
            case "autonomous_vehicles":

            model.title = this.ctx.__("autonomous_driving");
            model.slogon = this.ctx.__("autonomous_slogon");

            break;

            case "e_commerce":

            model.title = this.ctx.__("e_commerce");
            model.slogon = this.ctx.__("e_commerce_slogon");

            break;

            case "fintech":

            model.title = this.ctx.__("finance_title");
            model.slogon = this.ctx.__("finance_slogon");
            
            break;

            default:
            
            model = undefined;

            break;
        }

        return model
    }
}

module.exports = IndustriesService;
