import React from 'react'
import Empty from '../../components/empty/Empty'
import CartProdact from '../../components/cart-prodact/CartProdact'

function Cart() {
  const cart = true
  return (
    <div className='container'>
      {
        !cart ? <Empty
        title="korzina"
        p="Mahsulotlar belgilash bosing. Akkauntga kiring va barcha saralang"
        btn="bosh sahifa"
        b="/"
        /> :
        <CartProdact/>
      }
      
    </div>
  )
}

export default Cart