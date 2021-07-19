// menu.json to html


// <b>{name}</b> {description}  <i>{price}</i><br><br>


var url = 'carta.json';

// use this to read a file in path
// https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
fetch(url)
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function(data) {
    appendData(data);
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
    // console.log("error")
  });

  // console.log("cats");

var PizzaBox = document.getElementById("pizzabox");
var SandwichBox = document.getElementById("sandwichbox");
var BeerBox = document.getElementById("beerbox");

  // thanks to https://howtocreateapps.com/fetch-and-display-json-html-javascript/
  function appendData(data) {
    // console.log("cats2");

    Pizzas = data["PIZZA"]
    Sandwich = data["SANDWICH"]
    Beers = data["BEER"]

    for (var i = 0; i < Pizzas.length; i++) {
      brsi = Pizzas[i]
      if (brsi.available == "Y") {
        // <b>{name}</b> {description} {alcohol}&#176; <i> {price} </i> por aprox {mls}ml <br><br>
        PizzaBox.innerHTML += "<b class='pinked'>"+brsi.name+"</b> "
        + "<b>"
        + brsi.description
        + " <i>"+ brsi.price + "</i> "
        + "</b>"
        + "<br><br>"; 
      }
    }

    for (var i = 0; i < Sandwich.length; i++) {
      brsi = Sandwich[i]
      if (brsi.available == "Y") {
        // <b>{name}</b> {description} {alcohol}&#176; <i> {price} </i> por aprox {mls}ml <br><br>
        SandwichBox.innerHTML += "<b class='pinked'>"+brsi.name+"</b> "
        + "<b>"
        + brsi.description
        + " <i>"+ brsi.price + "</i> "
        + "</b>"
        + "<br><br>"; 
      }
    }

    for (var i = 0; i < Beers.length; i++) {
      brsi = Beers[i]
      if (brsi.available == "Y") {
        // <b>{name}</b> {description} {alcohol}&#176; <i> {price} </i> por aprox {mls}ml <br><br>
        var mls = (brsi.mls != "")? "por aprox "+ brsi.mls + "ml. ": "";
        var alc = (brsi.alcohol != "")? brsi.alcohol + "&#176;":"";
        BeerBox.innerHTML += "<b class='pinked'>"+brsi.name+"</b> "
        + "<b>"
        + brsi.description
        + " <i>"+ brsi.price + "</i> "
        + mls
        + alc
        + "</b>"
        + "<br><br>"; 
      }
    }




  }