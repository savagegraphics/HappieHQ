'use client'
import React from 'react'
import UserHero from './Merchant/UserHero'
import Grid from './Merchant/Grid'
import Container from './Merchant/Container'
// import Cards from '@/app/dashboard/table/table'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='mx-8 my-8 mt-20 overflow-x-auto'>
      <UserHero />
      <Grid />
      <Container />
    </div>
  )
}

export default Dashboard
