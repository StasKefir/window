require('formdata-polyfill');
require('es6-promise').polyfill();


window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let callMeasurer = require('./parts/callMeasurer'),
        tabs = require('./parts/tabs'),
        popup = require('./parts/popup'),
        timer = require('./parts/timer'),
        sixForms = require('./parts/sixForms'),
        glazTabs = require('./parts/glazTabs'),
        popupTime = require('./parts/popupTime'),
        gallery = require('./parts/gallery'),
        calc =require('./parts/calc');

    callMeasurer();
    tabs();
    popup();
    timer();
    sixForms();
    glazTabs();
    popupTime();
    gallery();
    calc();
});