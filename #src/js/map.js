$(document).ready(function(){

  ymaps.ready(init);

  function init() {

    try{
    const centerMap1 = [52.03594886466843,113.47665050073238];

    var map1 = new ymaps.Map("map-1", {
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


      map1.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
      // myMap.behaviors.disable('scrollZoom');
      // myMap.controls.add('zoomControl');

      map1.geoObjects.add(point1_1);
      map1.geoObjects.add(point1_2);
      map1.geoObjects.add(point1_3);
      map1.geoObjects.add(point1_4);

    }catch(e){}

    try{
      const centerMap2 = [52.03594886466843,113.47665050073238];

      let map2 = new ymaps.Map("map-2", {
          center: centerMap2,
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

      map2.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
      // map2.behaviors.disable('scrollZoom');
      // map2.controls.add('zoomControl');

      map2.geoObjects.add(point2_1);
    }catch(e){}

    try{
      // КАРТА ДЛЯ СТРАНИЦЫ "КОНТАКТЫ"

      const centerContactMap = [52.03594886466843,113.47665050073238];

      let contactsMap = new ymaps.Map("contacts-map", {
        center: centerContactMap ,
        controls: [],
        zoom: 9
      });

      point3_1 =  new ymaps.Placemark([52.04142457205223,113.50766049999996], {
        balloonContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pointer-white.svg',
        iconImageSize: [100, 110],
        iconImageOffset: [-30, -60]
      });

      contactsMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
      // contactsMap.behaviors.disable('scrollZoom');
      // contactsMap.controls.add('zoomControl');

      contactsMap.geoObjects.add(point3_1);
    }catch(e){}   
  }
});
