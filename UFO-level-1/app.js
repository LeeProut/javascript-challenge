// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

//bring in tableData to populate table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//select the filter button
var button = d3.select("#filter-btn")

//preventing page from refreshing by default
//d3.event.preventDefault()

button.on("click", function() {
    let inputHTML = d3.select("#datetime"); 
    let inputValue = inputHTML.property("value");
    console.log("the user entered a date");
    var filterEntry = tableData.filter(date => date.datetime === inputValue); 
    console.log(filterEntry);
    tbody.html("");

    filterEntry.forEach((newDate) => {
      var row = tbody.append("tr");
      Object.entries(newDate).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});






