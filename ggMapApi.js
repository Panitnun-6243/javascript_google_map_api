function myMap() {
  var mapLatLng = { lat: 13.7597, lng: 100.3442 };
  var mapCanvas = document.getElementById("map");
  var mapOptions = { center: mapLatLng, zoom: 8, mapTypeId: "roadmap" };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: mapLatLng,
    title: "I'm here",
  });
  marker.setMap(map);
  marker.setAnimation(google.maps.Animation.BOUNCE);

  setTimeout(
    () => {
      marker.setMap(null);
      marker = null;
    },

    6000
  );
}
