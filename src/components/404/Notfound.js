import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Notfund.css"
function Notfound() {
  return (
    <div className='notund'>
        <h1>404</h1>
        <NavLink to={"/"}> 
        <button className='notFund__item-btn'>bosh sahifaga qaytish</button>
        </NavLink>
    </div>
  )
}

export default Notfound