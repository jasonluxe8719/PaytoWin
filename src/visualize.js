
export const visualize = (teamData) => {

  const margin = { top: 50, right: 20, bottom: 60, left: 200 };
  const height = 600;
  const width = 900;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = d3
    .scaleLinear()
    .domain([0, 300])
    .range([0, innerWidth]);

  const yScale = d3
  .scaleBand()
  .domain(teamData.map(d => d.Team))
  .range([0, innerHeight])
  .padding(0.2)

  const g = d3
    .select("#graph-area")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const xAxis = d3
    .axisBottom(xScale)
    .tickSize(10)
    .tickFormat(function(d) {
      return +d;
    });

  g
    .append("g")
    .attr("class", "graph-x-axis")
    .call(xAxis)
    .attr("transform", "translate(0," + innerHeight + ")")

  const yAxis = d3
    .axisLeft(yScale)
    .tickSize(20)
    .tickFormat(function(d) {
      return d;
    });

  g
    .append("g")
    .attr("font-family", "Helvetica")
    .attr("class", "graph-y-axis")
    .call(yAxis)
    .selectAll('.domain, .tick line')
      .remove();

  //x-axis Label
  g
    .append("text")
    .attr("y", innerHeight + 55)
    .attr("x", innerWidth / 2)
    .attr("text-anchor", "middle")
    .attr("font-family", "Helvetica")
    .attr("font-size", "20px")
    .text("Season Wage by Team (in million pounds)")
    .style("stroke", "blue");

  //y-axis Label
  g
    .append("text")
    .attr("y", -150)
    .attr("x", 0 - innerHeight / 2)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("font-family", "Helvetica")
    .attr("font-size", "20px")
    .attr("class", "y-axis-text")
    .text("Premier League Team")
    .style("stroke", "blue");

    
    g
    .selectAll("rect")
    .data(teamData)
    .enter()
    .append("rect")
    .attr("fill", "red")
    .attr("y", d => yScale(d.Team))
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d.SeasonWage))
    .attr("opacity", "85%");
    
    // let rectangles = g.selectAll("rect").data(function(d) {
    //   return d.Team;
    // });
  
    // rectangles.exit().remove();
}