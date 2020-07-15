import { height, width } from './canvas';

export const xScale = data => d3
  .scaleLinear()
  .domain([0, max(data, d => d.SeasonWage)])
  .range([0, width]);

export const yScale = data => d3
  .scaleBand()
  .domain(data.map(d => d.Team))
  .range([0, height])