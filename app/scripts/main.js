/* jshint devel:true */

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        handlebars: '../../bower_components/handlebars/handlebars.amd',
        jquery : '../../bower_components/jquery/dist/jquery',
        csv2json : '../../bower_components/csv2json/csv2json',
        lodash : '../../bower_components/lodash/lodash'
    }
});

require(['templates/founderTable.js'], function(template) {
  'use strict';
  var data = {
  $('.container').on('redrawTable.foundermap',function(e,data){
    // This will render the template defined by App.header.hbs
    document.getElementById('data').innerHTML = template(data);
  });

  var initData = {
    company : [
      {
        id : 1,
        name : 'Apple',
        founder : 'Jobs S.',
        country : 'USA',
        city : 'Pao Alto',
        zip : 'L 3456',
        streetAdress : '1 infinite loop',
        image : 'http://lorempixel.com/400/200/business',
        homepage : 'http://apple.com'
      },{
        id : 2,
        name : 'Microsoft',
        founder : 'Gates B.',
        country : 'USA',
        city : 'Somewhere',
        zip : 'L 3456',
        streetAdress : '1 infinite loop',
        image : 'http://lorempixel.com/400/200/business',
        homepage : 'http://microsoft.com'
      }
    ]
  }
  $('.container').trigger('redrawTable.foundermap',initData);



});
