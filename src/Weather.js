class Weather{
    contructor(){
        this.key = 'A7qB8l5cN90PWcZMHo9nYGsTG9qtkwIi';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async getCityDetails(city){
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=A7qB8l5cN90PWcZMHo9nYGsTG9qtkwIi&q=${city}`);
        const data = await response.json();
        return data[0];
    }
    async getWeatherDetails(cityKey){
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=A7qB8l5cN90PWcZMHo9nYGsTG9qtkwIi`);
        const data = await response.json();
        return data[0];
    }
    async getDetails(city){
        const cityDetails = await this.getCityDetails(city);
        const weatherDetails = await this.getWeatherDetails(cityDetails.Key);
        return {cityDetails, weatherDetails};
    }
}