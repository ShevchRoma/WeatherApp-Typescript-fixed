import React from "react";
import { useDispatch } from "react-redux";
import "./Card.scss";
import { WeatherActionCreators } from "../redux/actions/WeatherActionCreators";
import { deleteCityAction } from "../redux/actions/addCityActionCreators";
import { WeatherData } from "../redux/reducers/types/getWeatherTypes";
import Moment from 'react-moment';

interface CardProps{
  city: string,
  id: number,
  data: WeatherData
}

const Card:React.FC<CardProps> = ({city,id,data}) => {
  const [c, setC] = React.useState<boolean>(false)
  const dispatch = useDispatch<any>()
  
  const celsius = (data.main?.temp - 273).toFixed(1);
  const toggleTemperature = () =>{
    setC(!c)
  }
  const getWeekDay = () =>{
       const date = new Date()
       const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
       return days[date.getDay()]
  }
  React.useEffect(() =>{
     dispatch(WeatherActionCreators.getWeather(city))
  },[dispatch,city])
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__top">
          <div className="card__column">
            <div className="card__location">{data.name},{data.sys.country}</div>
            <div className="card__date"><p>{getWeekDay()},</p><Moment format="DD MMMM HH:mm" /></div>
          </div>
          <div className="card__column">
            <span onClick={() =>dispatch(deleteCityAction(id))}>&times;</span>
          </div>
        </div>
        <div className="card__bottom">
          <div className="card__column column-card">
            <div className="column-card__temp">
              <p>
                {c ? data.main.temp : celsius}<sup onClick={toggleTemperature} className={!c ? 'active' : ''}>&#176;C | </sup>
                <sup className={!c ? '' : 'active'} onClick={toggleTemperature}>&#176;F</sup>
              </p>
            </div>
            <div className="column-card__feels">
              <p>Feels like:</p> <span>{celsius}</span>
            </div>
          </div>
          <div className="card__column">
            <div className="card__wind">
              <span>Wind:</span>
              <span>{data.wind.speed} m/s</span>
            </div>
            <div className="card__humidity">
              <span>Humidity:</span>
              <span>{data.main.humidity} %</span>
            </div>
            <div className="card__pressure">
              <span>Pressure:</span>
              <span>{data.main.pressure} Pa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
