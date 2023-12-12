import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTLike } from "../../context/viwe";
function Products({data}) {
  const wishes = useSelector(s => s.viwe.value)
  const dispatch = useDispatch()
  return (
    <div className="products__wrapper">
        {
            data?.map((el) => <div key={el.id} className="products__card">
            <Link to={"/login"} className="products__image">
              <img src={el.url} alt="" />
            </Link>
            <div className="products__body">
              <p className="products__title">{el.title}</p>
              <div style={{flex: 1}}>
                <span className="products__monthly">
                    {(el.price * 1.5 / 12)?.brm()} so'm/oyiga
                </span>
              </div>
              <del>{(el.price * 1.2)?.brm()} so'm</del>
              <p className="products__price">{el.price?.brm()} so'm</p>
            </div>
            <div onClick={()=> dispatch(addTLike(el))}  className="products__wishes">  
              {
                wishes?.some(itme => itme.id === el.id) ? <FaHeart style={{color: "var(--bg-py)"}}/> : <FaRegHeart />
              }
                
            </div>
            <div className="products__cart">
              <IoCartOutline /> 
            </div>
          </div>)
        }
    </div>
  );
}

export default Products;
