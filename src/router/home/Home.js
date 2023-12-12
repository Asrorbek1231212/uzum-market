import React from 'react'
import Carusel from '../../components/carusles/Carusel'
import Products from '../../components/product/Products'
import { PRODUCTS } from '../../static'
function Home({data}) {
  
  return (
    <div className='container'>
      <Carusel/>
      <Products data={data}/>
    </div>
  )
}

export default Home