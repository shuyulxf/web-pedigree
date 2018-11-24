'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/api/pedigree/search/:id', controller.api.pedigree.search);
};
