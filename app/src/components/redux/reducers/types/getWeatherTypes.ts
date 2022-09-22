
export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
  }

export interface WeatherData {
    base: string;
    clouds: {
      all: number;
    };
    cod: number;
    coord: {
      lon: number;
      lat: number;
    };
    dt: number;
    id: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
      speed: number;
      deg: number;
    };

  }

export interface GetWeatherState{
    data: WeatherData[];
    isLoading: boolean;
    error: string
}

export const enum GetWeatherActionsEnum{
    GET_WEATHER = 'GET_WEATHER',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface GetWeatherAction{
     type: GetWeatherActionsEnum.GET_WEATHER
     payload: WeatherData
}
export interface SetIsLoadingAction{
    type: GetWeatherActionsEnum.SET_IS_LOADING
    payload: boolean
}
export interface SetErrorAction{
  type: GetWeatherActionsEnum.SET_ERROR
  payload: string
}

export type WeatherAction = GetWeatherAction | SetIsLoadingAction | SetErrorAction