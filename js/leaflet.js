const map = L.map("map").setView([51.505, -0.09], 3);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker to the map
const marker = L.marker([40.7128, -74.0060]).addTo(map);
marker.bindPopup("<b>New York City</b>").openPopup();
