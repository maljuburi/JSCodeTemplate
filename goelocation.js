var map;
var d = document;

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('divMap'), {
    center: {
      lat: 43,
      lng: -76
    },
    zoom: 7
  });

  infoWindow = new google.maps.InfoWindow;
}

<
script src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIiDv7x_SziT_0Gj-v2SAv6sZaHQWWeEw&callback=initMap"
async > < /script>


  function findMe() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(15);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

d.getElementById("findMe").addEventListener('click', function() {
  findMe();
});

d.getElementById("clearMap").addEventListener('click', function() {
  initMap();
});
