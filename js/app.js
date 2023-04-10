const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const projection = d3.geoMercator()
  .scale(150)
  .translate([width / 2, height / 1.4]);

const path = d3.geoPath().projection(projection);

d3.json("https://d3js.org/world-110m.v1.json").then(data => {
  const countries = topojson.feature(data, data.objects.countries).features;

  svg.selectAll(".land")
    .data(countries)
    .enter()
    .append("path")
    .attr("class", "land")
    .attr("d", path);

  // Add a marker to the map
  const marker = svg.append("circle")
    .attr("class", "marker")
    .attr("r", 5)
    .attr("cx", projection([-74.0060, 40.7128])[0])
    .attr("cy", projection([-74.0060, 40.7128])[1])
    .on("click", () => {
      alert("You clicked on the New York City marker!");
    });
});
