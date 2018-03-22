'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/adas', controller.adas.index);
  router.get('/annotation-tool/:toolType', controller.annotationTool.index);
  router.get('/industries/:industry', controller.industries.index);
};
