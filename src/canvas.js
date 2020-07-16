export const margin = { left: 20, right: 20, top: 20, bottom: 20 }
export const height = 750 - margin.top - margin.bottom;
export const width = 900 - margin.left - margin.right;

export const canvas = d3
  .select("#canvas-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("canvas")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");