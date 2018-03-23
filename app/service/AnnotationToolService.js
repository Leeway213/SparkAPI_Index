const Service  = require('egg').Service;

const AnnotationToolModel = require('../models/AnnotationToolModel');

class AnnotationToolService extends Service {
    generateAnnotationToolModel(toolType) {
        let model = new AnnotationToolModel();
        model.usecases = [];
        var index = 1;
        do {
            var key = 'toolsUsecasesItemContentTitle' + index + '_' + toolType;
            var value = this.ctx.__(key);
            if (key === value) {
                break;
            }
            model.usecases.push({
                toolsUsecasesItemContentTitle: this.ctx.__('toolsUsecasesItemContentTitle' + index + '_' + toolType),
                toolsUsecasesItemContentDescription: this.ctx.__('toolsUsecasesItemContentDescription' + index + '_' + toolType),
                toolsUsecasesItemImg:   this.ctx.__('toolsUsecasesItemImg' + index + '_' + toolType)
            });
            index++;
        } while(true);

        switch(toolType) {
            case 'boundingbox':

            model.toolsBannerImg =              "/image/tools/headers/Bounding-Box.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Bounding-Box-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_BoundingBox");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_BoundingBox");
            model.time_per_annotation_value =   this.ctx.__("lowest");
            model.cost_per_annotation_value =   this.ctx.__("least_expensive");
            model.shape_perception_value =      this.ctx.__("absent");
            model.spatial_perception_value =    this.ctx.__("present");

            break;

            case 'polygon':

            model.toolsBannerImg =              "/image/tools/headers/Polygon.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Polygon-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_Polygon");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_Polygon");
            model.time_per_annotation_value =   this.ctx.__("moderate");
            model.cost_per_annotation_value =   this.ctx.__("expensive");
            model.shape_perception_value =      this.ctx.__("present");
            model.spatial_perception_value =    this.ctx.__("absent");

            break;

            case 'segmentation':

            model.toolsBannerImg =              "/image/tools/headers/Semantic-Seg.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Semantic-Seg-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_Segmentation");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_Segmentation");
            model.time_per_annotation_value =   this.ctx.__("highest");
            model.cost_per_annotation_value =   this.ctx.__("most_expensive");
            model.shape_perception_value =      this.ctx.__("present");
            model.spatial_perception_value =    this.ctx.__("absent"); 

            break;

            case 'landmark':

            model.toolsBannerImg =              "/image/tools/headers/Face-Reco.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Face-Reco-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_Landmark");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_Landmark");
            model.time_per_annotation_value =   this.ctx.__("high");
            model.cost_per_annotation_value =   this.ctx.__("expensive");
            model.shape_perception_value =      this.ctx.__("absent");
            model.spatial_perception_value =    this.ctx.__("present"); 

            break;

            case 'line':

            model.toolsBannerImg =              "/image/tools/headers/lane.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/lane-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_Line");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_Line");
            model.time_per_annotation_value =   this.ctx.__("high");
            model.cost_per_annotation_value =   this.ctx.__("expensive");
            model.shape_perception_value =      this.ctx.__("present");
            model.spatial_perception_value =    this.ctx.__("absent"); 

            break;

            case '3dcuboid':

            model.toolsBannerImg =              "/image/tools/headers/Cuboid.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/Cuboid-Anno.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_3DCuboid");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_3DCuboid");
            model.time_per_annotation_value =   this.ctx.__("high");
            model.cost_per_annotation_value =   this.ctx.__("expensive");
            model.shape_perception_value =      this.ctx.__("absent");
            model.spatial_perception_value =    this.ctx.__("present"); 

            break;

            case 'video':

            model.toolsBannerImg =              "/image/tools/headers/VideoAnnotation.png";
            model.toolsBannerImgOverlay =       "/image/tools/headers/VideoAnnotationTop.png";
            model.toolsBannerTextTitle =        this.ctx.__("toolsBannerTextTitle_Video");
            model.toolsBannerTextDescription =  this.ctx.__("toolsBannerTextDescription_Video");
            model.time_per_annotation_value =   this.ctx.__("low");
            model.cost_per_annotation_value =   this.ctx.__("least_expensive");
            model.shape_perception_value =      this.ctx.__("absent");
            model.spatial_perception_value =    this.ctx.__("absent"); 

            break;

            default:

            model = undefined;

            break;
        }
        return model;
    }
}

module.exports = AnnotationToolService;