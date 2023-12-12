import React, { useState} from 'react'
import "./Login.css"
import { IoIosClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Login() {
    const [data, setData] = useState("block")
    const navgate = useNavigate()
  return (
    
      <div className="Login">
        <h2 style={{color: "blue", paddingTop: "50px", textAlign: "center"}} onClick={()=> navgate("/")}>UZUM MARKET</h2>
        <div  className="inder__login">
          <div  className='logind'>
          
          </div>
          <h2 className='login__p'>Telefon raqamini kiriting</h2>
          <p className='login__p'>Tasdiqlash kodini SMS orqali yuboramiz</p>
          <br />
          <input className='inp__login' type="text" placeholder='gmail' />
          <br />
          <br />
          <input className='inp__login'  type="password" placeholder='password' />
          <br />
          <br />
          <button className='inp__login batn'>Kodni olish</button>
          <br />
          <br />
          <p>Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</p>
        </div>
      </div>
    
    
  )
}

export default Login