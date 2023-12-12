import React from 'react'
import Empty from '../../components/empty/Empty'
import Products from '../../components/product/Products'
import { useSelector } from 'react-redux'

function Wishes() {
  const wishe = useSelector(state => state.viwe.value)
  
  return (
    <div className='container'>
      {
        !wishe.lenght ?
          <Products data={wishe}/>
          : 
          <Empty
          title="siz yoqqanini qoshing"
          b="/login"  
          btn="akkaunt"
          />
      }
      
     
    </div>
  )
}

export default Wishes