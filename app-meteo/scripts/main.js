import orderWeek from './Utilitaire/gestionTemp.js';
//console.log(orderWeek);
const apiKey = "1cc7bcd5b1c69048dc53cfbccf8210be";
let apiResult;

const temps = document.querySelector(".temps");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".localisation");
const heure = document.querySelectorAll(".heure-nom-prevision");
const heureTemp = document.querySelectorAll(".heure-prevision-valeur");
const previDay = document.querySelectorAll(".jour-prevision-nom");
const previTemp = document.querySelectorAll(".jour-prevision-temp");
const weatherIcon = document.querySelector('.logo-meteo');
const loading = document.querySelector('.overlay-loading-icon')

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      apiCall(lon, lat);
    },
    () => {
      alert("You refus the geolocation");
    }
  );
}

function apiCall(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&lang=fr&appid=${apiKey}`
  )
    .then((response) => {
      //console.log(response.json());
      return response.json();
    })
    .then((data) => {
      apiResult = data;
      //console.log(apiResult);
      temps.innerText = apiResult.current.weather[0].description;
      temperature.innerText = `${Math.trunc(apiResult.current.temp)}°`;
      localisation.innerText = apiResult.timezone;

      let currentHour = new Date().getHours();

      for (let i = 0; i < heure.length; i++) {
        let hourInc = currentHour + i * 3;
        if (hourInc > 24) {
          heure[i].innerText = `${hourInc - 24} h`;
        } else if (hourInc === 24) {
          heure[i].innerText = `00 h`;
        } else {
          heure[i].innerText = `${hourInc} h`;
        }
      }

      for( let i =0; i < heureTemp.length; i++){
        heureTemp[i].innerText = `${Math.trunc(apiResult.hourly[i * 3].temp)}° `
      }

      for( let i = 0; i < orderWeek.length; i++){
        previDay[i].innerText = orderWeek[i].slice(0,3);
      }
      for (let i =0; i < 7 ; i++){
        previTemp[i].innerText = `${Math.trunc(apiResult.daily[i +1].temp.day)}°`

      }

      if( currentHour >= 6 && currentHour < 21){
        weatherIcon.src = `ressources/jour/${apiResult.current.weather[0].icon}.svg`
      }else{
        weatherIcon.src = `ressources/nuit/${apiResult.current.weather[0].icon}.svg`
      }


      loading.classList.add('disappear')
 

    });
  //console.log(lon, lat);
}
