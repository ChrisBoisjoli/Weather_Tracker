// ajax call for pulling weather
// full call link
// api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=9ac0788da70afdca53d6b9c82e029618

var city = "";

function searchWeather(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=9ac0788da70afdca53d6b9c82e029618";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var tBody = $("tbody");

        var tRow = $("<tr>");
        var cityName = $("<td>").text(response.name);

        var tempK = response.main.temp;
        var tempFa= (tempK - 273.15) * 1.80 + 32;
        console.log(tempF);   
        var tempF = tempFa.toFixed(2);
        var temperature = $("<td>").text(tempF + " &deg, F").html(tempF + "&deg;F");
        
        var humidity = $("<td>").text(response.main.humidity + " %");
        var windspeed = $("<td>").text(response.wind.speed + " meter/sec");

        
        
        tRow.append(cityName);
        tRow.append(temperature);
        tRow.append(humidity);
        tRow.append(windspeed);

        $("tbody").append(tRow);
        console.log(response);

    });
};
function temperatureConverter(temperature) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }
searchWeather("minneapolis");

// UV Index API CALL http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}

// var uvIndex = $("<td>").text(response.main.temp);