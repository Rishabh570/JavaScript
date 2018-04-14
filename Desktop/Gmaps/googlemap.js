function initMap() {
    var pos = {lat: 23.363, lng:79.44};
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom:5,
       center: pos
    });
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat : position.coords.latitude,
                lng : position.coords.longitude
            };
            console.log(pos);
            map.setCenter(pos);
        });
        var marker = new google.maps.Marker({
            position: pos,
            map : map,
            draggable:true,
            title:"Drag me!"
        });


    }

    google.maps.event.addListener(marker, 'dragend', function(evt){
        document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
    });

    google.maps.event.addListener(marker, 'dragstart', function(evt){
        document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });
}

// var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//     zoom: 4,
//     center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
// // Place a draggable marker on the map
// var marker = new google.maps.Marker({
//     position: myLatlng,
//     map: map,
//     draggable:true,
//     title:"Drag me!"
// });
