import { g } from "./graph_area";

export const info = d3
  .tip()
  .attr("class", "info")
  .html(function(d) {
    let infotext = "<p>Season: </p> <p>" + d.Year + "</p><br>";

    infotext += "<p>Team Name: </p> <p>" + d.Team + "</p><br>";

    infotext += 
      "<p>Final League Standing: </p> <p>" + d.FinalLeagueStanding +
      "</p><br>";
    
    infotext +=
      "<p>Total Points Gained: </p> <p>" + d.PointsGained + "</p><br>";

    return infotext;
  });

g.call(info);

