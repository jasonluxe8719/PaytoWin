import { g } from "./graph_area";

export const info = d3
  .tip()
  .attr("class", "info")
  .html(function(d) {
    
    return "<p>Total Points Gained: </p> <p>" + d.PointsGained + "</p><br>";

  });

g.call(info);


