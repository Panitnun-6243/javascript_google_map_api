function myMap(){
    var mapCanvas = document.getElementById("map")
    var mapOptions = {center: new google.maps.LatLng(18.6916598,97.6683007), zoom: 8, mapTypeId: 'roadmap'} 
    var map = new google.maps.Map(mapCanvas, mapOptions)
}