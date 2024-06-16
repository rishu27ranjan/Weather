$(document).ready(function() {
    $("#fetchWeatherBtn").click(function() {
        var location = $("#locationInput").val();
        var apiKey = "7042f956dd37ee25e408f150abc244a9"; 
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;

    
        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function(response) {
               
                var weatherInfo = "<h2>Weather Forecast for " + location + "</h2>";
                weatherInfo += "<p>Temperature: " + (response.main.temp - 273.15).toFixed(2) + "°C</p>";
                weatherInfo += "<p>Weather: " + response.weather[0].main + "</p>";
                weatherInfo += "<p>Humidity: " + response.main.humidity + "%</p>";
                weatherInfo += "<p>Wind Speed: " + response.wind.speed + " m/s</p>";
                
   
                var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
                weatherInfo += "<img src='" + iconUrl + "' alt='Weather Icon'>";
                
                $("#weatherInfo").html(weatherInfo);
            },
            error: function(xhr, status, error) {
               
                $("#weatherInfo").html("<p>error fetching weather forecast.</p>");
                console.log("Error:", status, error);
            }
        });
    });
});