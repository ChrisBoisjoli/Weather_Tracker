// ajax call for pulling weather
// full call link
// api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=9ac0788da70afdca53d6b9c82e029618
$("button").on("click", function(event){
    event.preventDefault();
    
    var cityInput = $("#city-input").val().trim();
    
    
    console.log(cityInput);
    

    var queryURLCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput +  "&appid=9ac0788da70afdca53d6b9c82e029618";

    $.ajax({
        url: queryURLCurrent,
        method: "GET"
    }).then(function(response){

        var tBody = $("tbody");

        var tRow = $("<tr>");
        var cityName = $("<td>").text(response.name);

        var tempK = response.main.temp;
        var tempFa= (tempK - 273.15) * 1.80 + 32;
        console.log(tempFa);   
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

    
});
// 5 day forecast need to be able to retrieve city input should put in local storage
var queryURLFiveDay= "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&cnt=5&appid=9ac0788da70afdca53d6b9c82e029618";
    $.ajax({
        url: queryURLFiveDay,
        method: "GET"
    }).then(function(response){
        var results = response.data;
        console.log(response);
          for (var i = 0; i < results.length; i++) {
              var dayDiv = $("<div>");

              var fiveDate = results[i].list.dt;
            //   icon
              var fiveTemp = results[i].list.main.temp;
              var fiveHumid = results[i].list.main.humidity;
              
          };


    });

// UV Index API CALL http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}

// var uvIndex = $("<td>").text(response.main.temp);