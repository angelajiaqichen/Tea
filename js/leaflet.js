var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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
