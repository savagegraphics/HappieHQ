import React from 'react'
import Component from '../Components/page'
import BalanceCard from './BalanceCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <BalanceCard />
      <Component />
    </div>
  )
}

export default page
