import React from 'react'
import './Search.scss'
import { useDispatch } from 'react-redux'
import { addCityAction } from '../redux/actions/addCityActionCreators'
import { WeatherActionCreators } from '../redux/actions/WeatherActionCreators'

const Search = () => {
  const [city, setCity] = React.useState<string>('')
  const dispatch = useDispatch<any>()

   const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
      setCity(e.target.value)
   }
   const addCity = () =>{
       if(city.trim() === ''){
        alert('Строка поиска не заполнена')
       }else{
        setCity('')
        dispatch(WeatherActionCreators.getWeather(city))
        dispatch(addCityAction(city))
       }
   }
  return (
    <div className="search">
      <div className="search__body">
        <input type="search" onChange={onChangeHandler} value={city} placeholder="Enter city name"  />
        <button type="button" onClick={addCity}>Add</button>
      </div>
    </div>
  )
}

export default Search