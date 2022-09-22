import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { useTypedSelector } from './components/redux/hooks/useTypedSelector';



function App() {
   const { cities } = useTypedSelector(state => state.city)
   const {data} = useTypedSelector(state => state.weather)
  
  return (
    <div className="wrapper">
       <div className="app">
         <div className="container">
           <div className="app__header">
            <div className="app__top">
               <Header />
            </div>
            <div className="app__bottom">
               <Search />
            </div>
           </div>
           <div className="app__content">
               <div className="app__body">
                  {cities.map((city,id) => <Card city={city} key={city} id={id}  data={data} />)}
               </div>
           </div>
           </div>
       </div>
    </div>
  );
}

export default App;
