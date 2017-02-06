$(document).ready(function(){
//галерея
  $('.gallery').slick({
    arrows: true,
    dots:true
  });


// карта
ymaps.ready(init);
    var map;
    function init() {
      map = new ymaps.Map('yndxMap', {
        center: [59.108469, 38.042164],
        iconContent: 'test',
        zoom: 13,
        controls: []
      });

      var placemark = new ymaps.Placemark([59.108469, 38.042164], {balloonContent: 'Череповецкий р-он, д.Борисово, д.8'}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-icon.svg',
        iconImageSize: [25, 35]
      });
      map.geoObjects.add(placemark);
    }

});

