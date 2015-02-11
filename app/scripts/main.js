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
        lodash : '../../bower_components/lodash/lodash',
        mapbox : '../../bower_components/mapbox.js/mapbox'
    }
});

var _jsonData,
    _map,
    _featureLayer;

require(['jquery'], function() {
  'use strict';

  $('form').on('submit',function(e){
    require(['csv2json','lodash'],function(){
      var rawData = document.getElementById('config').getElementsByTagName('textarea')[0].value;
      // create a new parser from any character
      var delimiter = $('form select').val(),
          parser = csv2json.dsv(delimiter,'text/plain',1),
          parsedData = parser.parse(rawData);
      // we iterate over all the values to sanitize the name
      _jsonData = _.reduce(parsedData,function(result,n,key){
        result[key] = _.reduce(n,function(sanitizedArray, value , key){
          sanitizedArray[key.toLowerCase().trim().replace(' ','_')] = value;
          return sanitizedArray;
        }, {});
        return result
      },{});
      // We use an event to inform the dom that new data are ready to display
      $('.container').trigger('redrawTable.foundermap')
                     .trigger('redrawMap.foundermap');
    });
  });


  /**
   * Handlebars template handling
   */
  $('.container').on('redrawTable.foundermap',function(){
    require(['templates/founderTable.js'],function(template){
      // This will render the template defined by App.header.hbs
      var tableData = {company : _jsonData};
      document.getElementById('data').innerHTML = template(tableData);
    })
  });

  /**
   * MapBox instaciation
   */
  $('.container').on('redrawMap.foundermap',function(e,data){
    require(['mapbox'],function(){
      L.mapbox.accessToken = 'pk.eyJ1IjoidGhpYmF1bHRtaWxhbiIsImEiOiJPTk5Sc1A0In0.cns6bkFRjcQfIfigb0uztg';
      var geojson = [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-77.03238901390978,38.913188059745586]
          },
          "properties": {
            "title": "Mapbox DC",
            "description": "1714 14th St NW, Washington DC",
            "marker-color": "#fc4353",
            "marker-size": "large",
            "marker-symbol": "monument"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-122.414, 37.776]
          },
          "properties": {
            "title": "Mapbox SF",
            "description": "155 9th St, San Francisco",
            "marker-color": "#fc4353",
            "marker-size": "large",
            "marker-symbol": "harbor"
          }
        }
      ];

      L.mapbox.map('map', 'examples.map-i86nkdio')
        .setView([37.8, -96], 4)
        .featureLayer.setGeoJSON(geojson);
    })
  });



  _jsonData = {
    0 : {
      id : 1,
      company_name : 'Apple',
      founder : 'Jobs S.',
      country : 'USA',
      city : 'Pao Alto',
      zip : 'L 3456',
      street : '1 infinite loop',
      photo : 'http://lorempixel.com/400/200/business',
      home_page : 'http://apple.com'
    },
    1: {
      id : 2,
      company_name : 'Microsoft',
      founder : 'Gates B.',
      country : 'USA',
      city : 'Somewhere',
      zip : 'L 3456',
      street : '1 infinite loop',
      photo : 'http://lorempixel.com/400/200/business',
      home_page : 'http://microsoft.com'
    }
  };
  $('.container').trigger('redrawTable.foundermap')
                 .trigger('redrawMap.foundermap');


});
