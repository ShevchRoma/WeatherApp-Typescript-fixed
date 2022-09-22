import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AddCityActionEnum, CityAction } from "../reducers/types/addCityTypes";
import { RootState } from "../store";

export const addCityAction = (city: string):ThunkAction<Promise<any>,RootState,{},CityAction> => async(dispatch: ThunkDispatch<{},{},CityAction>) =>{
       try{
          dispatch({
            type: AddCityActionEnum.ADD_CITY,
            payload: city
          })
       }catch(e){
           
       }
}
export const deleteCityAction = (id: number):ThunkAction<Promise<any>,RootState,{},CityAction> => async(dispatch: ThunkDispatch<{},{},CityAction>) =>{
    try{
       dispatch({
         type: AddCityActionEnum.DELETE_CITY,
         payload: id
       })
    }catch(e){
        
    }
}