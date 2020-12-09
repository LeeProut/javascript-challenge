// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

// YOUR CODE HERE!
//write a function called makeTable to bring in tableData


tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//listen for user-entered date

var button = d3.select("#filter-btn")

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



//use same makeTable function to filter data and makeTable with user input date


