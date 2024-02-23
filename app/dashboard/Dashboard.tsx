'use client'
import React from 'react'
// import Hero from './Merchant/Hero'
// import Cards from './Merchant/Cards'
// import Grid fr'use client''use client'om './Merchant/Grid'
// import Container from './Merchant/Container'
import UserHero from './Merchant/UserHero'
import Two from './Components/Two'
import RoutePrices from './Merchant/RoutePrices'
import Grid from './Merchant/Grid'
import Container from './Merchant/Container'
// import Cards from '@/app/dashboard/table/table'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='mx-8 my-8 mt-20'>
      <UserHero />
      <Grid />
      <Container />
    </div>
  )
}

export default Dashboard
