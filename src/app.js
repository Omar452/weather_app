const form = document.querySelector('form');
const weather = new Weather();
const cityInput = document.querySelector('#city');
const weatherDiv = document.querySelector('.weather');

const showWeather = (city) => {
    weather.getDetails(city)
    .then(data => {
        const {cityDetails, weatherDetails} = data;
        const timeImage = weatherDetails.IsDayTime ? 'src/img/day.svg' : 'src/img/night.svg';
        const html = 
            `<div class="card shadow">
                <img class="card-img-top" src="${timeImage}" alt="time image">
                <div class="bg-white rounded-circle icon">
                    <img src="src/img/icons/${weatherDetails.WeatherIcon}.svg" alt="weather icon">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${cityDetails.EnglishName},${cityDetails.Country.ID}</h3>
                    <p class="card-text">${weatherDetails.WeatherText}</p>
                    <p class="card-text fs-2">${weatherDetails.Temperature.Metric.Value}&#176;C</p>
                </div>
            </div>`;
        weatherDiv.innerHTML = html;        
    })
    .catch(error => {
        console.log(error);
    });
}

if(localStorage.getItem('city')){
    showWeather(localStorage.getItem('city'));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    localStorage.setItem('city', city);
    if(city.length >= 2){
        showWeather(city);
    }
});