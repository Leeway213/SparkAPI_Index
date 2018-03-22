'use strict';

const Controller = require('egg').Controller;

class AnnotationToolController extends Controller {

    async index() {
        const toolType = this.ctx.params.toolType;
        const model = this.ctx.service.annotationToolService.generateAnnotationToolModel(toolType);
        await this.ctx.render('annotation-tool.nj', {
            toolsBannerImg: model.toolsBannerImg,
            toolsBannerImgOverlay: model.toolsBannerImgOverlay,
            toolsBannerTextTitle: model.toolsBannerTextTitle,
            toolsBannerTextDescription: model.toolsBannerTextDescription,
            time_per_annotation_value: model.time_per_annotation_value,
            cost_per_annotation_value: model.cost_per_annotation_value,
            shape_perception_value: model.shape_perception_value,
            spatial_perception_value: model.spatial_perception_value
        });
    }
}

module.exports = AnnotationToolController;