// from data.js
var tableData = data;

//reference to table body
var tbody = d3.select("tbody");

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

//render table on page with all data
makeTable(tableData);

//select the filter button
var button = d3.select("#filter-btn")

//create event handler
button.on("click", handleClick);

//function to define what happens after the user enters a search parameter and clicks the "Filter Data" button
function handleClick() {
  //preventing page from refreshing by default
  d3.event.preventDefault()

    //selecting each input field
    var inputDate = d3.select("#datetime"); 
    var inputCity = d3.select("#cityfilter");
    var inputState = d3.select("#statefilter");
    var inputCountry = d3.select("#countryfilter");
    var inputShape = d3.select("#shapefilter");

    //using .property to extract value
    var inputValue = inputDate.property("value");
    var inputValue2 = inputCity.property("value");
    var inputValue3 = inputState.property("value");
    var inputValue4 = inputCountry.property("value");
    var inputValue5 = inputShape.property("value");

  //filtering the tableData by user input
  var filterData = tableData;

  if (inputValue.length > 0) {
    filterData = filterData.filter(date => date.datetime === inputValue);
  } 
  if (inputValue2.length > 0) {
    filterData = filterData.filter(city => city.city === inputValue2);
  }
  if (inputValue3.length > 0) {
    filterData = filterData.filter(state => state.state === inputValue3);
  }  
  if (inputValue4.length > 0) {
    filterData = filterData.filter(country => country.country === inputValue4);
  }
  if (inputValue5.length > 0) {
    filterData = filterData.filter(shape => shape.shape === inputValue5);
  }

  if (filterData.length > 0) {
  makeTable(filterData)
  } else {
    console.log("Data not found")
  };

  }; 

  //in html, render this error message on the page, but also need to remove in the makeTable function. 
  //Template page is written in Bootstrap 3 (would need to add jquery if using a Bootstrap 4 element)
  
  //experimenting with a different method of creating an object to store user-entered values 

    // var params = {datetime:"", city: "", state: ""};

    // if (inputValue) {
    //   params.datetime = inputValue;
    // }; 
    
    // if (inputValue2) {
    //   params.city = inputValue2;
    // };

    // if (inputValue3) {
    //   params.state = inputValue3;
    // };

    // tableData.forEach((sighting) => {
    //     Object.entries(sighting).forEach(([key, value]) => {  
    //     if (key === "datetime") {
    //       params.push(value);
    //     }
    //     if (key === "city") {
    //       params.push(value);
    //     }
    //     if (key === "state") {
    //       params.push(value);
    //     }
    //});

    // params.forEach((sighting) => {
    //   Object.entries(sighting).forEach(([key, value]) => {
    //     console.log(key, value);
    //   });
    // });

    // Object.entries(params).forEach(([key, value]) => console.log(key, value));

    // var filteredData = tableData.filter((row) => row.key === row.value);
    // console.log(filteredData);

    // makeTable(filteredData);
  //});  
  