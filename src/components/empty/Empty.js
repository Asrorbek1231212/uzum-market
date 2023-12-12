import React from 'react'
import "./Empty.css"
import { useNavigate } from 'react-router-dom'
function Empty({title, p, btn, b}) {
    const navgate = useNavigate()
  return (
    <div className='Empty'>
        <h2>{title}</h2>
        <p>{p}</p>
        <button onClick={()=> navgate(b)}>{btn}</button>
    </div>
  )
}

export default Empty