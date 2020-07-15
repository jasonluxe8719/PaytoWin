import { svg, height, width } from './canvas';
import { xAxis, yAxis } from './paytowin';
import { xScale, yScale } from './scale';
import { visualize } from './visualize';



export const Paytowin = () => {
  d3.csv("../data/all_data.csv").then(data => {
    let sortedData = [
      { year: 2001, teams: [] }, 
      { year: 2002, teams: [] }, 
      { year: 2003, teams: [] }, 
      { year: 2004, teams: [] }, 
      { year: 2005, teams: [] }, 
      { year: 2006, teams: [] }, 
      { year: 2007, teams: [] }, 
      { year: 2008, teams: [] }, 
      { year: 2009, teams: [] }, 
      { year: 2010, teams: [] }, 
      { year: 2011, teams: [] }, 
      { year: 2012, teams: [] }, 
      { year: 2013, teams: [] }, 
      { year: 2014, teams: [] },
      { year: 2015, teams: [] },
      { year: 2016, teams: [] },
      { year: 2017, teams: [] },
      { year: 2018, teams: [] }

    ];

    for (let i = 0; i < data.length; i++) {
      let dataObj = data[i];

      for (let j = 0; j < sortedData.length; j++) {
        if (parseInt(dataObj.Year) === sortedData[j].year) {
          sortedData[j].teams.push(dataObj);
        }
      }
    }
    
    visualize(sortedData[0]);

  });

}
