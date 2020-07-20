export const margin = { top: 50, right: 20, bottom: 60, left: 200 };
export const height = 600;
export const width = 900;
export const innerHeight = height - margin.top - margin.bottom;
export const innerWidth = width - margin.left - margin.right;

export const g =
  d3
    .select("#graph-area")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

