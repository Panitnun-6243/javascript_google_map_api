function myMap(){
    var mapLatLng = {lat: 17.9004781, lng: 99.604355}
    var mapCanvas = document.getElementById("map")
    var mapOptions = {center: mapLatLng, zoom: 8, mapTypeId: 'roadmap'} 
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        positon: mapLatLng,
        title: "I'm here",
    })
    marker.setMap(map)
    marker.setAnimation(google.maps.Animation.BOUNCE);
        
}