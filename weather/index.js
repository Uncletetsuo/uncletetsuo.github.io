let city = document.querySelector('.city');
let tem = document.querySelector('.temp');
let descriptio = document.querySelector('.description');
let ico = document.querySelector('.icon');
let humidit = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let input = document.querySelector('.search-bar');
let push = document.getElementById('push');


const weather = {
   apiKey : "a113ffd4a0c07ea175e8889fffc7dbc9",
   fetchWeather : function (city) {
       fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" +     // you can improve this with backticks
           city + 
           "&units=metric&appid=" + 
           this.apiKey
       )
       .then((Response) => Response.json())
       .then((data) => this.displayWeather(data))
       .catch((error) => console.error(error));
   },
   displayWeather : function (data) {
       const { name } = data;
       const { icon, description } = data.weather[0];
       const { temp, humidity } = data.main;
       const { speed } = data.wind;
        city.innerText = `Weather in ${name}`;
        ico.src = `https://openweathermap.org/img/wn/${icon}.png`;
        descriptio.innerText = description;
        tem.innerText = `${temp}° C `;
        humidit.innerText = `Humidity: ${humidity}%`;
        wind.innerText = `Wind speed: ${speed} km/h`;
        input.value = '';
        document.querySelector('.weather').classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`
   },
   search : function() {
       this.fetchWeather(input.value)
   }
}

push.addEventListener('click', function() {
    weather.search();
});

input.addEventListener("keyup",function(event) {        
    if(event.keyCode === 13) {
        event.preventDefault();
        push.click();
    }
});

weather.fetchWeather("Mexico city");