var map = L.map('map').setView([30, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var points = [    
  ["ZANZIBAR",-6.13, 39.31],
  ["TOKYO",35.68, 139.76],
  ["AUCKLAND",-36.85, 174.78],
  ["BANGKOK",13.75, 100.48],
  ["DELHI",29.01, 77.38],
  ["SINGAPORE",1.36, 103.75],
  ["BRASILIA",-15.67, -47.43],
  ["RIO DE JANEIRO",-22.9, -43.24],
  ["TORONTO",43.64, -79.4],
  ["EASTER ISLAND",-27.11, -109.36],
  ["SEATTLE",47.61, -122.33],
  ["LONDON",51.5072, -0.1275]
];

var greenIcon = new L.icon({
  iconUrl: 'https://raw.githubusercontent.com/angelajiaqichen/Tea/main/img/roundicon.png',
  // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 25],
  // iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  // shadowSize: [41, 41]
});


for (var i = 0; i < points.length; i++) {
      L.marker([points[i][1], points[i][2]], {icon: greenIcon}).bindPopup(points[i][0]).addTo(map);
  }

// Add a GeoJSON layer to the map
const geojsonLayer = L.geoJSON(worldGeoJSON).addTo(map);

// Add a click event listener to the GeoJSON layer
geojsonLayer.on("click", function (e) {
  const name = e.layer.feature.properties.name;
  document.getElementById("info").innerHTML = "<h2>" + name + "</h2>";
});

// Load the world GeoJSON data
fetch("world-110m.geojson")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Add the GeoJSON data to the GeoJSON layer
    geojsonLayer.addData(data);
  });
