import React from 'react'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import Six from './Six'
import Seven from './Seven'
import SignIn from './SignIn'
import Pricing from './Pricing'
import ReplaceCarousel from './ReplaceCarousel'
import Products from './Products'
import Preview from './Preview'
import LastChecked from './LastChecked'
import CheckOut from './CheckOut'
import Checked from './Checked'
import BalanceHero from './BalanceHero'
import AuthorCard from './AuthorCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <AuthorCard />
      <BalanceHero />
      <Checked />
      <CheckOut />
      <LastChecked />
      <Preview />
      <Pricing />
      <Products />
      <ReplaceCarousel />
      {/* <SignIn /> */}
    </div>
  )
}

export default page
