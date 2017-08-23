function initMap() {
        var uluru = {lat: 49.589776, lng: 34.551192};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,
          scrollwheel: false
        });

        var icons = {
          markerPic: {
            icon: {
              url: 'img/map-marker.png',
              size: new google.maps.Size(40, 50),
              scaledSize: new google.maps.Size(40, 50)
            }
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(49.589776, 34.551192),
            type: 'markerPic',
            contentString: 'Бургерная Mr.Burger',
            content: 'Корпусный сад'
          },
          {
            position: new google.maps.LatLng(49.589637, 34.555360),
            type: 'markerPic',
            contentString: 'Бургерная Mr.Burger',
            content: 'Художественный музей'
          },
          {
            position: new google.maps.LatLng(49.588612, 34.553276),
            type: 'markerPic',
            contentString: 'Бургерная Mr.Burger',
            content: 'ТЦ "Злато Мисто"'
          }
        ];

        var infowindow = new google.maps.InfoWindow();

        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            title: feature.contentString
          });

          marker.addListener('click', function() {
          infowindow.setContent(feature.content);
          infowindow.open(map, marker);
          });

        });
}

$(function() {
  $('.reviews__btn').fancybox({
    
  });
});