// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select("tbody");
console.log(tbody);


//function to bring in tableData

function makeTable(tableData) {
  tbody.html("");
  tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

makeTable(tableData);

//select the filter button
var button = d3.select("#filter-btn")

//create event handler
button.on("click", handleClick);

function handleClick() {
  //preventing page from refreshing by default
  d3.event.preventDefault()

    //selecting each input field
    var inputDate = d3.select("#datetime"); 
    var inputCity = d3.select("#cityfilter");
    var inputState = d3.select("#statefilter");

    //using .property to extract value
    var inputValue = inputDate.property("value");
    var inputValue2 = inputCity.property("value");
    var inputValue3 = inputState.property("value");

    var params = [];

    if (inputValue) {
      params.datetime === inputValue;
    }; 
    
    if (inputValue2) {
      params.city === inputValue2;
    };

    if (inputValue3) {
      params.state === inputValue3;
    };

    params.forEach((sighting) => {
        Object.entries(sighting).forEach(([key, value]) => {
        if (key === "datetime") {
          params.push(value);
        }
        if (key === "city") {
          params.push(value);
        }
        if (key === "state") {
          params.push(value);
        }
    });
  });

  console.log(params);
    
    //object.entries to search params list
    //forEach key value 07-08
    //use key, value pair to go through each value

    //filtering the data in the table by the input
    // var filteredData = tableData.filter((row) => row.key === row.value)
    // console.log(filteredData);
    // var filterEntry = tableData.filter(date => date.datetime === inputValue); 

    var filteredData = tableData.filter((row) => row.key === params);
    console.log(filteredData);

    makeTable(filteredData);

    // var filteredData = tableData.filter(function(row) {
    //   return row.key === row;
    // });  
    // console.log(filteredData);

    // var filteredData = tableData.filter(handleClick);
    // console.log(filteredData);

    // var filterDate = tableData.filter((date) => date.datetime === inputValue); 
    // var filterCity = filterDate.filter((city) => city.city === inputValue2);
    // var filterState = tableData.filter((state) => state.state === inputValue3);

    // if (filterDate.length === 0) {
    //   return ("date not found");
    // } else {

    // makeTable(filterDate);

    

  //   filterDate.forEach((date) => {
  //     var row = tbody.append("tr");
  //     Object.entries(date).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });

  //   filterCity.forEach((newFilter) => {
  //     var row = tbody.append("tr");
  //     Object.entries(newFilter).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });

  //   filterState.forEach((newFilter) => {
  //     var row = tbody.append("tr");
  //     Object.entries(newFilter).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //     });
  //   });

  // makeTable(newFilter);  
    //}
};
