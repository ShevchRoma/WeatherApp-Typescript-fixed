import React from 'react'
import Langsvg from '../../assets/Icon material-language.svg'
import './Header.scss'

const Header:React.FC = () => {
  return (
    <div className="header">
    <div className="container">
      <div className="header__body">
          <div className="header__top language">
               <ul className="language__list">
                  <li>
                      <a href="*" className="language__link"><img src={Langsvg} alt="language"/><span>EN</span></a>
                      <ul className="submenu">
                          <li><a href="*">EN</a></li>
                          <li><a href="*">UA</a></li>
                          <li><a href="*">HE</a></li>
                      </ul>
                  </li>
               </ul>
          </div>
          <div className="header__bottom">
          </div>
      </div>
    </div>
  </div>
  )
}

export default Header