ymaps.ready(init);
    var map;
    function init() {
      map = new ymaps.Map('yndxMap', {
        center: [59.948110, 30.282692],
        zoom: 13,
        controls: []
      });
      var placemark = new ymaps.Placemark([59.94811, 30.222692], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.png',
        iconImageSize: [40, 64]
      });
      map.geoObjects.add(placemark);
    }