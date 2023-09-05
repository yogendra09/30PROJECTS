const api_key = "e166f7fb23eaf582528305bc9e3219b2";
const api_Url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const search = $("input");
const btn = $(".search button");

async function checkWeather(city) {
 
  const res = await fetch(api_Url + city + `&appid=${api_key}`);
  var data = await res.json();
  console.log(data);
  if(data.cod == 200){
    $('.err').css('display','none');
    $('.weather').css("display","initial")
    $(".city").html(data.name);
    $(".temp").html(Math.floor(data.main.temp) + "°C");
    $(".humidity").html(data.main.humidity);
    $(".wind").html(Math.floor(data.wind.speed) + "km/h");
  
    if (data.weather[0].main === "Clouds") {
      $(".weather-icon").attr("src", "./images/clouds.png");
    } else if (data.weather[0].main === "Clear") {
      $(".weather-icon").attr("src", "./images/clear.png");
    } else if (data.weather[0].main === "Humidity") {
      $(".weather-icon").attr("src", "./images/clear.png");
    } else if (data.weather[0].main === "Rain") {
      $(".weather-icon").attr("src", "./images/rain.png");
    } else if (data.weather[0].main === "Wind") {
      $(".weather-icon").attr("src", "./images/wind.png");
    } else if (data.weather[0].main === "Mist") {
      $(".weather-icon").attr("src", "./images/mist.png");
    } else if (data.weather[0].main === "Drizzle") {
      $(".weather-icon").attr("src", "./images/drizzle.png");
    } else if (data.weather[0].main === "Snow") {
      $(".weather-icon").attr("src", "./images/snow.png");
    }
  
}else{

      $('.err').css('display','initial');
 
}
}

btn.click(function (e) {
  console.log(search.val());
  checkWeather(search.val());
});
