function myMap() {
  var mapLatLng = { lat: 13.7597, lng: 100.3442 }; //map location(latitude and longtitude)
  var mapCanvas = document.getElementById("map"); //choose html element
  var mapOptions = { center: mapLatLng, zoom: 10, mapTypeId: "roadmap" }; //map detail
  var map = new google.maps.Map(mapCanvas, mapOptions); //real map object
  var marker = new google.maps.Marker({
    position: mapLatLng,
    title: "I'm lived here",
    draggable: true,
  }); //map marker

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(13.6513, 100.4964),
    title: "My univerity",
    draggable: true,
  }); //map marker2

  marker.setMap(map); //set map for marker
  marker.setAnimation(google.maps.Animation.BOUNCE); //marker animation
  marker2.setMap(map); //set map for marker2
  marker2.setAnimation(google.maps.Animation.DROP); //marker2 animation

  // setTimeout(
  //   () => {
  //     marker.setMap(null);
  //     marker = null;
  //   },

  //   15000
  // ); //set marker timeout

  // setTimeout(
  //   () => {
  //     marker2.setMap(null);
  //     marker2 = null;
  //   },

  //   15000
  // ); //set marker2 timeout

  google.maps.event.addListener(marker, "dragend", function (evt) {
    document.getElementById("marker1").innerHTML =
      "<div>Marker1 dropped: Current Lat: " +
      evt.latLng.lat().toFixed(3) +
      " Current Lng: " +
      evt.latLng.lng().toFixed(3) +
      "</div>";
  });

  google.maps.event.addListener(marker, "dragstart", function (evt) {
    document.getElementById("marker1").innerHTML =
      "<div>Currently dragging marker...</div>";
  });//get Lat Lng from marker1

  google.maps.event.addListener(marker2, "dragend", function (evt) {
    document.getElementById("marker2").innerHTML =
      "<div>Marker2 dropped: Current Lat: " +
      evt.latLng.lat().toFixed(3) +
      " Current Lng: " +
      evt.latLng.lng().toFixed(3) +
      "</div>";
  });

  google.maps.event.addListener(marker2, "dragstart", function (evt) {
    document.getElementById("marker2").innerHTML =
      "<div>Currently dragging marker...</div>";
  });//get Lat Lng from marker2
}
