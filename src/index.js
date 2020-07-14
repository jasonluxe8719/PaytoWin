document.addEventListener("DOMContentLoaded", () => {
  d3.csv('../data/all_data.csv').then(data => {
    console.log(data)
  })
});