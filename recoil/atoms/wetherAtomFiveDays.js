
import {
    atom
} from 'recoil';

const fiveDaysWeatherAtom = atom({
    key: 'weatherAtomFiveDays',
    default:
    {
        coord: {
            lon: -0.1257,
            lat: 51.5085
        },
        weather: [
            {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }
        ],
        base: "stations",
        main: {
            temp: 285.35,
            feels_like: 285.11,
            temp_min: 284.25,
            temp_max: 286.07,
            pressure: 1024,
            humidity: 95
        },
        visibility: 8000,
        wind: {
            speed: 2.06,
            deg: 200
        },
        clouds: {
            all: 90
        },
        dt: 1636583076,
        sys: {
            type: 2,
            id: 2019646,
            country: "GB",
            sunrise: 1636528204,
            sunset: 1636561134
        },
        timezone: 0,
        id: 2643743,
        name: "London",
        cod: 200
    }

})


export default fiveDaysWeatherAtom