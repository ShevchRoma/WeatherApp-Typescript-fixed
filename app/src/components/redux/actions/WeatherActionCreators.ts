import axios from "axios";
import { GetWeatherAction, GetWeatherActionsEnum, SetErrorAction, SetIsLoadingAction, WeatherData } from "../reducers/types/getWeatherTypes";
import { AppDispatch } from "../store";

export const WeatherActionCreators ={
    setError: (payload: string): SetErrorAction =>({type: GetWeatherActionsEnum.SET_ERROR, payload }),
    setIsLoading: (payload: boolean): SetIsLoadingAction =>({type: GetWeatherActionsEnum.SET_IS_LOADING, payload}),
    setWeatherData: (data: WeatherData): GetWeatherAction =>({type: GetWeatherActionsEnum.GET_WEATHER, payload: data}),
    getWeather: (city: string) => async(dispatch: AppDispatch) =>{
        try{
            dispatch(WeatherActionCreators.setIsLoading(true))
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d37b567e1b87787d02408aa49af09f32'}`)
            if(response){
            dispatch(WeatherActionCreators.setWeatherData(response.data))
            }
            dispatch(WeatherActionCreators.setIsLoading(false))
        }catch(e){
            dispatch(WeatherActionCreators.setError('ошибка при загрузке данных'))
        }
    }
}
