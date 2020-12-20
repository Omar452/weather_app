class Weather{
    contructor(){
        this.key = 'v4EVVooWoFFNObRYXntceqTJMGZHaYMp';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async getCityDetails(city){
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=v4EVVooWoFFNObRYXntceqTJMGZHaYMp&q=${city}`);
        const data = await response.json();
        return data[0];
    }
    async getWeatherDetails(cityKey){
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=v4EVVooWoFFNObRYXntceqTJMGZHaYMp`)
    }
}