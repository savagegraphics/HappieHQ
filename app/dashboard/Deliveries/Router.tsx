import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
import Grid from './Grid'
import NavSearch from './NavSearch'
import Completed from './Completed'

type Props = {}

const Router = (props: Props) => {
  return (
    <Tabs variant='unstyled' className='w-[100%] mt-4'>
      <TabList className='bg-gray-100 p-[6px] w-[22rem] rounded-xl ml-6'>
        <Tab
          _selected={{
            color: 'black',
            bg: 'white',
            borderRadius: '0.75rem'
          }}
          className='mx-2 whitespace-wrap text-sm sm:text-xs'
        >
          In Transit
        </Tab>
        <Tab
          _selected={{
            color: 'black',
            bg: 'white',
            borderRadius: '0.75rem'
          }}
          className='mx-2 whitespace-wrap text-sm sm:text-xs'
        >
          Prepaid
        </Tab>
        <Tab
          _selected={{
            color: 'black',
            bg: 'white',
            borderRadius: '0.75rem'
          }}
          className='mx-2 whitespace-wrap text-sm sm:text-xs'
        >
          Completed
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NavSearch />
        </TabPanel>
        <TabPanel>
          <Grid />
        </TabPanel>
        <TabPanel>
          <Completed />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Router
