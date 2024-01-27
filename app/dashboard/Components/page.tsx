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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Tabs variant='unstyled'>
        <TabList className='bg-white w-56 m-8 p-2 rounded-[0.6rem]'>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
              borderRadius: '0.375rem'
            }}
          >
            One
          </Tab>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
              borderRadius: '0.375rem'
            }}
          >
            Two
          </Tab>
          <Tab
            _selected={{
              color: 'white',
              bg: 'blue.500',
              borderRadius: '0.375rem'
            }}
          >
            Three
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <One />
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
      <ReplaceCarousel /> */}
      {/* <SignIn /> */}
    </div>
  )
}

export default page
