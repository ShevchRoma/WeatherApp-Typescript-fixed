import { GetWeatherActionsEnum, GetWeatherState, WeatherAction } from "./types/getWeatherTypes"

const initialState: GetWeatherState ={
    data: [],
    isLoading: false,
    error: ''
}

export const getWeatherReducer = (state = initialState, action: WeatherAction) =>{
      switch(action.type){
           case GetWeatherActionsEnum.GET_WEATHER:
            return{
                ...state,
                data: action.payload
            }
            default:
                return state
      }
}