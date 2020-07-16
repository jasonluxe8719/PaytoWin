
export const visualize = (teamData, idx) => {

  let margin = { top: 20, right: 20, bottom: 20, left: 100 };
  let height = 600 - margin.top - margin.bottom;
  let width = 1000 - margin.left - margin.right;

  let xScale = d3
    .scaleLinear()
    .domain([0, 300])
    .range([0, width - margin.left - margin.right]);

    let yScale = d3
    .scaleBand()
    .domain(teamData.map(d => d.Team))
    .range([0, height - margin.top - margin.bottom]);

  let svg = d3
    .select("#canvas-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  let xAxis = d3
    .axisBottom(xScale)
    .tickSize(10)
    .tickFormat(function(d) {
      return +d;
    });

  svg
    .append("g")
    .attr("font-family", "Helvetica")
    .attr("class", "canvas-x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  let yAxis = d3
    .axisLeft(yScale)
    .tickSize(20)
    .tickFormat(function(d) {
      return +d;
    });

  svg
    .append("g")
    .attr("font-family", "Helvetica")
    .attr("class", "canvas-y-axis")
    .call(yAxis);
  

  svg
    .selectAll("rect")
    .data(teamData)
    .enter()
    .append("rect")
    .attr("fill", "red")
    .attr("y", d => yScale(d.Team))
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d.SeasonWage))
    .attr("opacity", "85%");

}