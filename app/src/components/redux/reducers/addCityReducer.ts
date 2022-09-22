import { AddCityActionEnum, AddCityState, CityAction } from "./types/addCityTypes"

const initialState: AddCityState = {
    cities: []
}
export const addCityReducer = (state = initialState,action: CityAction) =>{
             switch(action.type){
                case AddCityActionEnum.ADD_CITY:
                    return{
                        ...state,
                      cities: [...state.cities,action.payload]
                    }
                case AddCityActionEnum.DELETE_CITY:
                    return{
                        cities: [
                            ...state.cities.slice(0,action.payload),
                            ...state.cities.slice(action.payload + 1)
                        ]
                    }
                default:
                    return state;
             } 
}