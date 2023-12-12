import React, {useState} from 'react'
import "./CartProdact.css"
import { PRODUCTS } from "../../static"
import { IoTrashSharp } from "react-icons/io5";                     
function CartProdact() {    
  const [val,  setVal] = useState('') 
  const [telefon,  setTelefon] = useState('')               
  const [manzil,  setManzil] = useState('') 
  const [habar,  setHabar] = useState('') 
  return (
    <div className='cart__wrapper'>
       <div className="cart__products">
        {
            PRODUCTS?.map(el => <div key={el.id} className='cart__item' >
                <div className="cart__item-left">
                <img src={el.url} alt=""/>
                <div>
                    <h4>{el.title}</h4>
                    <p>Katigoriya: {el.category}</p>
                </div>
                </div>
                <div className="cart__item-right">
                    <div className='cart__counter'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <div>
                        <button className='cart__trash-btn'><IoTrashSharp/></button>
                        <h3>{el.price?.brm()} so'm</h3>
                    </div>
                </div>
            </div>)
        }
       </div>
       <div className="cart__register">
        <h3>Quidagi malumotlarni toldiring</h3>
        <input value={val} onChange={(e) => setVal(e.target.value)} className='cart__regiser__itme' type="text" placeholder='Toliq ismingiz' />
        <input value={telefon} onChange={(e) => setTelefon(e.target.value)}   className='cart__regiser__itme' type="text" placeholder='+998 00_000_00_00' />
        <input value={manzil} onChange={(e) => setManzil(e.target.value)}   className='cart__regiser__itme' type="text" placeholder='Manzilingiz' />
        <input value={habar} onChange={(e) => setHabar(e.target.value)}   className='cart__regiser__itme' type="text" placeholder='Habar yolash' />
        <h2 className='item__riht-h2'>Umumiy narx: 23030</h2>
        <button className='rigth__itme-btn'>Rasmiylashtitishga o'tish</button>
       </div>
    </div>
  )
}

export default CartProdact