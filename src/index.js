require('formdata-polyfill');
require('es6-promise').polyfill();


window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let callMeasurer = require('./parts/callMeasurer'),
        tabs = require('./parts/tabs'),
        popup = require('./parts/popup'),
        timer = require('./parts/timer');

    callMeasurer();
    tabs();
    popup();
    timer();


});