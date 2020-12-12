// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

// YOUR CODE HERE!
//write a function called makeTable to bring in tableData


function makeTable() {
  tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  //return makeTable(tableData);
};

//listen for user-entered date

var button = d3.select("#filter-btn")

function handleClick() {
  //preventing page from refreshing by default
  d3.event.preventDefault()

    //selecting each input field
    var inputDate = d3.select("#datetime"); 
    var inputCity = d3.select("#cityfilter");
    var inputState = d3.select("#statefilter")

    //using .property to extract value
    var inputValue = inputDate.property("value");
    var inputValue2 = inputCity.property("value");
    var inputValue3 = inputState.property("value");

    //filtering the data in the table by the input
    var filterDate = tableData.filter((date) => date.datetime === inputValue); 
    var filterCity = tableData.filter((city) => city.city === inputValue2);
    var filterState = tableData.filter((state) => state.state === inputValue3);


    tbody.html("");

    // if (filterDate.length === 0) {
    //   return ("date not found");
    // } else {

    
    filterDate.forEach((date) => {
      var row = tbody.append("tr");
      Object.entries(date).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

    filterCity.forEach((newFilter) => {
      var row = tbody.append("tr");
      Object.entries(newFilter).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

    filterState.forEach((newFilter) => {
      var row = tbody.append("tr");
      Object.entries(newFilter).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

  return makeTable(newFilter);  
    //}
};

button.on("click", handleClick);



//use same makeTable function to filter data and makeTable with user input date


