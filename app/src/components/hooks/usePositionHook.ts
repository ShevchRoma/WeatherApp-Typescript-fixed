import { useState, useEffect } from 'react';

export const usePosition = () =>{

const [latitude, setLatitude] = useState<any>('')
const [longitude, setLongitude] = useState<any>('')


/* const onChange = ({latitude,longitude}:any) =>{
      setPosition({latitude,longitude})
}
const onError = (error:any) =>{
      setError('error')
} */

useEffect(() =>{
  
  navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    });
  
   /* let watcher = navigator.geolocation.watchPosition(onChange, onError)
   return () => navigator.geolocation.clearWatch(watcher); */
},[])

return {latitude,longitude}

}

