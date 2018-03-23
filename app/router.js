'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/annotation-tool/:toolType', controller.annotationTool.index);
  router.get('/industries/:industry', controller.industries.index);

  router.post('/contact', controller.contact.index);
  router.get('/thanks', controller.thanks.index);
};
