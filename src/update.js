import { margin, height, width, innerHeight, innerWidth, g } from './graph_area';
import { info } from './info';

export const update = (teamData) => {

  let rects = g.selectAll("rect, g").remove().exit().data(teamData);


  const xScale = d3
    .scaleLinear()
    .domain([0, 300])
    .range([0, innerWidth]);

  const yScale = d3
    .scaleBand()
    .domain(teamData.map(d => d.Team))
    .range([0, innerHeight])
    .padding(0.2);


  const xAxis = d3
    .axisBottom(xScale)
    .tickSize(10)
    .tickFormat(function (d) {
      return +d;
    });

  g
    .append("g")
    .attr("class", "graph-x-axis")
    .call(xAxis)
    .attr("transform", "translate(0," + innerHeight + ")");

  const yAxis = d3
    .axisLeft(yScale)
    .tickSize(20)
    .tickFormat(function (d) {
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
    .text("Premier League Team (by Final Standings)")
    .style("stroke", "blue");

  rects
    .enter()
    .append("rect")
    .attr("fill", "steelblue")
    .attr("y", d => yScale(d.Team))
    .attr("height", yScale.bandwidth())
    .attr("width", d => xScale(d.SeasonWage))
    .on("mouseover", info.show)
    .on("mouseout", info.hide);

}
