import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { throttle } from "lodash";
import { getWeatherReducer } from './reducers/getWeatherReducer';
import { addCityReducer } from './reducers/addCityReducer';


const rootReducer = combineReducers({
    weather: getWeatherReducer,
    city: addCityReducer
})

const saveState = (state: any) =>{
    const json = JSON.stringify(state)
    localStorage.setItem('state', json)
 }
 
 const loadState = () =>{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null){
      return undefined
    }else{
     return JSON.parse(serializedState)
    }
 }
 const persistedState = loadState()

export const store = createStore(rootReducer,persistedState,applyMiddleware(thunk))

store.subscribe(throttle(() =>{
    saveState(store.getState())
},1000))

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch

