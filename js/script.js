function initMap() {
        var uluru = {lat: 49.589776, lng: 34.551192};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru,
          scrollwheel: false
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}