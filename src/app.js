const form = document.querySelector('form');
const weather = new Weather();
const cityInput = document.querySelector('#city');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    console.log(city);
    if(city.length >= 2){
        weather.getCityDetails(city)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
});