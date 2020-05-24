import {combineReducers} from 'redux'

import fetchWeatherData from './fetch_weather'
import fetchLocation from './fetch_location'

const reducers= combineReducers({
    FetchWeatherReducer : fetchWeatherData,
    FetchWeatherLocation: fetchLocation,
});

export default reducers