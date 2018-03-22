const Service  = require('egg').Service;

const AnnotationToolModel = require('../models/AnnotationToolModel');

class AnnotationToolService extends Service {
    generateAnnotationToolModel(toolType) {
        const model = new AnnotationToolModel();
        model.usecases = [];
        var index = 1;
        do {
            var key = 'toolsUsecasesItemContentTitle' + index + toolType;
            var value = this.ctx.__(key);
            if (key === value) {
                break;
            }
            model.usecases.push({
                toolsUsecasesItemContentTitle: this.ctx.__('toolsUsecasesItemContentTitle' + index + toolType),
                toolsUsecasesItemContentDescription: this.ctx.__('toolsUsecasesItemContentDescription', + index + toolType),
                toolsUsecasesItemImg:   this.ctx.__('toolsUsecasesItemImg' + index + toolType)
            });
            index++;
        } while(true);

        switch(toolType) {
            case 'BoundingBox':

            model.toolsBannerImg =              "/image/tools/headers/Bounding-Box.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Bounding-Box-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_BoundingBox");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_BoundingBox");
            model.time_per_annotation_value =   this.ctx.__("lowest");
            model.cost_per_annotation_value =   this.ctx.__("least_expensive");
            model.shape_perception_value =      this.ctx.__("absent");
            model.spatial_perception_value =    this.ctx.__("present");

            break;
        }
        return model;
    }
}

module.exports = AnnotationToolService;