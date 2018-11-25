'use strict';
import Vue from 'vue';
import Router from 'vue-router'
import pedigree from './pedigree';

Vue.use(Router);

let routes = [];
routes.push(pedigree);
const router = new Router({
    mode: 'hash',
    routes: routes
})