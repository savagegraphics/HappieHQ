import React from 'react'
import Cart from './Cart'
import Checkout from './Checks'
import Proceed from './Proceed'
import Checks from './Checks'
import Products from './Products'
import Completed from '../Deliveries/Completed'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Completed />
      <Cart />
      <Checkout />
    </div>
  )
}

export default page
