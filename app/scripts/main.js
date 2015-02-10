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

require(['templates/founderTable.js','jquery'], function(template) {
  'use strict';
  $('form').on('click','button',function(e){
    require(['csv2json','lodash'],function(){
      var rawData = document.getElementById('config').getElementsByTagName('textarea')[0].value;
      // create a new parser from any character
      var parser = csv2json.dsv(',','text/plain',1);
      var parsedData = parser.parse(rawData);
      // we iterate over all the values to sanitize the name
      var sanitizedData = _.reduce(parsedData,function(result,n,key){
        result[key] = _.reduce(n,function(sanitizedArray, value , key){
          sanitizedArray[key.toLowerCase().trim().replace(' ','-')] = value;
          return sanitizedArray;
        }, {});
        return result
      },{});
      // We use an event to inform the dom that new data are ready to display
      $('.container').trigger('redrawTable.foundermap',sanitizedData);
    });
  });

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
