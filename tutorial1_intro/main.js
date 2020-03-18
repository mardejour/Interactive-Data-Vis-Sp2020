// load in csv
d3.csv("../../data/top2018.csv").then(data => {
    // once the data loads, console log it
    console.log("data", data);
  
    // select the `table` container in the HTML
    const table = d3.select("#d3-table");
  
    /** HEADER */
    const thead = table.append("thead");
    thead
      .append("tr")
      .append("th")
      .attr("colspan", "16")
      .text("Top Spotify Tracks of 2018");
  
    thead
      .append("tr")
      .selectAll("th")
      .data(data.columns)
      .join("td")
      .text(d => d);
  
    /** BODY */
    // rows
    const rows = table
      .append("tbody")
      .selectAll("tr")
      .data(data)
      .join("tr");
  
    // cells
    rows
      .selectAll("td")
      .data(d => Object.values(d))
      .join("td")
  
  
      // update the below logic to apply to your dataset
      .attr("class", d => +d < 5 ? 'low' : null)
      .text(d => d);
  });
  