// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

// YOUR CODE HERE!
//write a function called makeTable to bring in tableData


function makeTable(tableData) {
  tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  return tableData;
};

// keep the page from refreshing when hitting the filter button 
//d3.event.preventDefault();

//listen for user-entered date

var button = d3.select("#filter-btn")

function handleClick() {
    let inputDate = d3.select("#datetime"); 
    let inputValue = inputDate.property("value");
    console.log("the user entered a date");
    let inputCity = d3.select("#cityfilter");
    var filterDate = tableData.filter(date => date.datetime === inputValue); 
    var filterCity = tableData.filter(city => city.city === inputValue);
    console.log(filterDate);
    console.log(filterCity);
    tbody.html("");

    filterEntry.forEach((newDate) => {
      var row = tbody.append("tr");
      Object.entries(newDate).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  return makeTable();  
};

button.on("click", handleClick);



//use same makeTable function to filter data and makeTable with user input date


