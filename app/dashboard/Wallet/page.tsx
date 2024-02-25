import React from 'react'
import BalanceCard from './BalanceCard'
import Container from './Container'
import Selector from './Selecter/Selector'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Selector />
      <Container />
    </div>
  )
}

export default page
