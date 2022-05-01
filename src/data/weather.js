import { faSun, faCloudSun, faSnowflake, faCloudRain, faBoltLightning } from '@fortawesome/free-solid-svg-icons';


const fetchWeather = (latitude, longitude) => {
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit`)
        .then(data => data.json())
        .then(json => {
            const temp = json.current_weather.temperature;
            const code = json.current_weather.weathercode;
            const icon = weatherCodeToIcon(code);
            return { temperature: temp, icon: icon }
        })
}

const weatherCodeToIcon = (code) => {
    switch (code) {
        case 0: return faSun;

        case 1: return faCloudSun;
        case 2: return faCloudSun;
        case 3: return faCloudSun;

        case 45: return faCloudRain;
        case 48: return faCloudRain;

        case 51: return faCloudRain;
        case 53: return faCloudRain;
        case 55: return faCloudRain;

        case 56: return faSnowflake;
        case 57: return faSnowflake;

        case 61: return faCloudRain;
        case 63: return faCloudRain;
        case 65: return faCloudRain;

        case 66: return faSnowflake;
        case 67: return faSnowflake;

        case 71: return faSnowflake;
        case 73: return faSnowflake;
        case 75: return faSnowflake;

        case 77: return faSnowflake;

        case 80: return faSnowflake;
        case 81: return faSnowflake;
        case 82: return faSnowflake;

        case 85: return faSnowflake;
        case 86: return faSnowflake;

        case 95: return faBoltLightning;
        case 96: return faBoltLightning;
        case 99: return faBoltLightning;
    }
}
/*
Code	Description
-0	Clear sky
-1, 2, 3	Mainly clear, partly cloudy, and overcast
-45, 48	Fog and depositing rime fog
-51, 53, 55	Drizzle: Light, moderate, and dense intensity
-56, 57	Freezing Drizzle: Light and dense intensity
-61, 63, 65	Rain: Slight, moderate and heavy intensity
-66, 67	Freezing Rain: Light and heavy intensity
-71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
-77	Snow grains
-80, 81, 82	Rain showers: Slight, moderate, and violent
-85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
*/

export default fetchWeather