import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

function Navbar({data}) {
  const [value, setValue] = useState("")
  const [searchData, setsearchData] = useState([])
  useEffect(()=>{
    if(value.trim()){
      let filterdata = data.filter(el => el.title.toLowerCase().includes(value.toLowerCase().trim()))
      setsearchData(filterdata)
    }else{
      setsearchData([])
    }
   
  },[value])

  const {pathname} = useLocation()
  if(pathname.includes("login")){
    return <></>
  }
  return (
    <div className='container'>
<div className="navbar">
  <h2 className='nav__logo'>
    <NavLink to={"/"}>uzum market</NavLink>
  </h2>
  <button className='nav__category'>
    <span>Katalog</span>
    <IoIosMenu/>

  </button>
  <div className="nav__search">
    <input
     type="text" 
     value={value}
     onChange={(e) => setValue(e.target.value)}
     placeholder='Qidirish...' />
  <button>
    <IoSearchOutline/>
  </button>
  {
    value.trim() && <div className="nav__search-drop">
      {
        searchData.length ? <p>Natija: {searchData.length}</p> : <p></p>
      }
      {
        !searchData.length && <p>Natija</p> 
      }
      {
      searchData?.slice(0, 4)?.map((el) => <div key={el.id} className='nav__search-item'>
        <img src={el.url}  alt="" />
        <div>
        <p>{el.title}</p>
        <b>{el.price?.brm()} so'm</b>
        </div>
      </div>)
      
    }
    {
      !searchData.length && <h2>Natija yoq</h2> 
    }
    </div> 
  }
  </div>
<ul className='nav__colection'>
<li className='nav__item nav__home'>
  <NavLink to={"/"}> 
  <IoHomeOutline/>
  <span>Asosiy Sahifa</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/login"}> 
  <FaRegUser/>
  <span>Kirish</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/wishes"}>
    <IoMdHeartEmpty/>
<span>Sevimlilar</span>
  </NavLink>
</li>
<li className='nav__item'>
  <NavLink to={"/cart"}>
    <BsCart2/>
<span>Savat</span>
  </NavLink>
</li>

</ul>
</div>
    </div>
  )
}

export default Navbar