let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = ''


//Add Mapbox Geocoder
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
});




var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 new mapboxgl.Marker({
    elment:img1
})
.setLngLat([75.81533, 26.98547])
.addTo(map);
// Create a  Gateway of India, Mumbai Marker and add it to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl: mapboxgl
    })
)
// Create a India Gate Marker and add it to the map.


// Create a Lotus Temple, Delhi Marker and add it to the map.


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
