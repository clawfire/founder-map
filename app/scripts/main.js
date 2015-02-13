/* jshint devel:true */
/*global foundermap, L, _, csv2json */

var _jsonData,
    _map,
    _featureLayer;

  $('form').on('submit',function(){
    'use strict';
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
      return result;
    },{});
    // We use an event to inform the dom that new data are ready to display
    $('.container').trigger('redrawTable.foundermap')
                   .trigger('redrawMap.foundermap');
    // Hide the config panel
    $('#config').toggle();
  });


  /**
   * Handlebars template handling
   */
  $('.container').on('redrawTable.foundermap',function(){
    'use strict';
    // This will render the template defined by App.header.hbs
    var tableData = {company : _jsonData};
    document.getElementById('data').innerHTML = foundermap.templates.founderTable(tableData);
  });

  /**
   * MapBox instaciation
   */
  $('.container').on('redrawMap.foundermap',function(){
    'use strict';
    L.mapbox.accessToken = 'pk.eyJ1IjoidGhpYmF1bHRtaWxhbiIsImEiOiJPTk5Sc1A0In0.cns6bkFRjcQfIfigb0uztg';
    var geojson = [];
    _.each(_jsonData,function(n){
      /*jshint camelcase: false */
      if (n.garage_latitude && n.garage_longitude) {
        geojson.push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [+n.garage_longitude,+n.garage_latitude]
          },
          'properties': {
            'title': n.company_name,
            'description': n.street + ', ' + n.city,
            'marker-color': '#fc4353',
            'marker-size': 'medium',
            'marker-symbol': 'warehouse'
          }
        });
      }
    });
    if (document.getElementById('map').children.length < 1) {
      _map = L.mapbox.map('map', 'examples.map-i86nkdio');
    }
    _featureLayer = _map.featureLayer;
    _featureLayer.setGeoJSON(geojson);
    _map.fitBounds(_featureLayer.getBounds());
  });
  /**
   * Display / Hide Config on desktop
   */
   $('#toggle-config').on('click',function(){
    'use strict';
    $('#config').toggle();
   });
   /*jshint camelcase: false */
  _jsonData = {
    0 : {
      id : 1,
      company_name : 'Apple',
      founder : 'Jobs S.',
      country : 'USA',
      city : 'Pao Alto',
      postal_code : 'L 3456',
      street : '1 infinite loop',
      photo : 'http://lorempixel.com/400/200/business',
      home_page : 'http://apple.com',
      garage_latitude : 37.3403188,
      garage_longitude : -122.0581469
    },

    1: {
      id : 2,
      company_name : 'Microsoft',
      founder : 'Gates B.',
      country : 'USA',
      city : 'Somewhere',
      postal_code : 'L 3456',
      street : '1 infinite loop',
      photo : 'http://lorempixel.com/400/200/business',
      home_page : 'http://microsoft.com',
      garage_latitude : 37.472189,
      garage_longitude : -122.190191
    }
  };
  $('.container').trigger('redrawTable.foundermap')
                 .trigger('redrawMap.foundermap');


