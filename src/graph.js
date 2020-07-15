import { svg, margin, height, width } from './canvas';
import { xScale, yScale } from './scale';

const xAxis = d3
  .axixBottom(xScale)

svg.append("svg")
  .attr("font-family", "Karla")
  .style("stroke", "red")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

const yAxis = d3
  .axisLeft(yScale)

svg.append("svg")
  .attr("font-family", "Karla")
  .style("stroke", "red")
  .attr("class", "y axis")
  .call(yAxis);
