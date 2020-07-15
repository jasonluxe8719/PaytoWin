import { svg } from './canvas';
import { xScale, yScale } from './scale';
import { height, width } from './canvas';

export const visualize = (data) => {

  // let rects = svg.selectAll("rect").data(arr, function(d) {
  //   return d.Team;
  // });

  // rects.exit().remove();

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", "red")
    .attr("y", function(d) {
      return yScale(d);
    })
    .attr("x", function(d) {
      return xScale(d);
    })
    .attr("height", height)
    .attr("width", width)
    .attr("opacity", "85%");

}