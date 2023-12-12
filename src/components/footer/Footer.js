import React from 'react'
import "./Footer.css"
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
function Footer() {
    const {pathname} = useLocation()
  if(pathname.includes("login")){
    return <></>
  }
  return (
    <div className='container'>
        <br />
       <div className="Footer">
        <button className='footer__btn'>Показать ещё 20</button>
            <div className='footer'>
            <ul className="footer__items">
                <li className="footer__li__items"><h2>О нас</h2></li>
                <br />
                <li className="footer__li__items">Пункты выдачи</li>
                <li className="footer__li__items">Вакансии</li>
            </ul>
            <ul className="footer__items">
                <li className="footer__li__items"><h2>Пользователям</h2></li>
                <br />
                <li className="footer__li__items">Связаться с нами</li>
                <li className="footer__li__items">Вопрос - Ответ</li>
            </ul>
            <ul className="footer__items">
                <li className="footer__li__items"><h2>Для предпринимателей</h2></li>
                <br />
                <li className="footer__li__items">Продавайте на Uzum</li>
                <li className="footer__li__items">Вход для продавцов</li>
            </ul>
            <ul className="footer__items">
                <li className="footer__li__items"><h2>Скачать приложение</h2></li>
                <br />
                <li className="footer__li__items"><FaApple/> AppStore</li>
                <li className="footer__li__items"><FaGooglePlay/> Google Play</li>
                <br />
                <li className='footer__li__items'>Uzum в соцсетях</li>

                <div className="instagra__uzum">
                <li className='footer__li__items'><FaInstagram/></li>
                <li className='footer__li__items'><FaTelegram/></li>
                <li className='footer__li__items'><FaYoutube/></li>
                <li className='footer__li__items'><FaFacebookSquare/></li>
                </div>
               
            </ul>
            </div>
       </div>
    </div>
  )
}

export default Footer