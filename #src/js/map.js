$(document).ready(function(){

  ymaps.ready(init);

  function init() {

    // КАРТА 1

    const centerMap1 = [52.03594886466843,113.47665050073238];

    var myMap1 = new ymaps.Map("map-1", {
        center: centerMap1,
        controls: [],
        zoom: 12
      });

      point1_1 =  new ymaps.Placemark([52.05924733435378,113.45635154290767], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-blue.svg',
        iconImageSize: [50, 55],
        iconImageOffset: [-30, -60]
      });

      point1_2 =  new ymaps.Placemark([52.02518686268175,113.44257621534928], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-blue.svg',
        iconImageSize: [50, 55],
        iconImageOffset: [-30, -60]
      });

      point1_3 =  new ymaps.Placemark([52.09173765491263,113.52277589796353], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-blue.svg',
        iconImageSize: [50, 55],
        iconImageOffset: [-30, -60]
      });

      point1_4 =  new ymaps.Placemark([52.02832673712577,113.5026448668398], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-blue.svg',
        iconImageSize: [50, 55],
        iconImageOffset: [-30, -60]
      });


      myMap1.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
      // myMap.behaviors.disable('scrollZoom');
      // myMap.controls.add('zoomControl');

      myMap1.geoObjects.add(point1_1);
      myMap1.geoObjects.add(point1_2);
      myMap1.geoObjects.add(point1_3);
      myMap1.geoObjects.add(point1_4);

    // КАРТА 2

    // const centerMap2 = [52.03594886466843,113.47665050073238];

    var myMap2 = new ymaps.Map("map-2", {
        center: centerMap1,
        controls: [],
        zoom: 9
      });

      point2_1 =  new ymaps.Placemark([52.04142457205223,113.50766049999996], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-white.svg',
        iconImageSize: [100, 110],
        iconImageOffset: [-30, -60]
      });

    myMap2.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
    // myMap2.behaviors.disable('scrollZoom');
    // myMap2.controls.add('zoomControl');

    myMap2.geoObjects.add(point2_1);
  }
});
