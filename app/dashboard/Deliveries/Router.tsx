import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
import Grid from './Grid'
import NavSearch from './NavSearch'
import Completed from './Completed'

type Props = {}

const Router = (props: Props) => {
  return (
    <Tabs variant='unstyled'>
      <TabList className='bg-white w-80 m-8 p-2 rounded-[0.6rem]'>
        <Tab
          _selected={{
            color: 'white',
            bg: 'blue.500',
            borderRadius: '0.375rem'
          }}
        >
          In Transit
        </Tab>
        <Tab
          _selected={{
            color: 'white',
            bg: 'blue.500',
            borderRadius: '0.375rem'
          }}
        >
          Prepaid
        </Tab>
        <Tab
          _selected={{
            color: 'white',
            bg: 'blue.500',
            borderRadius: '0.375rem'
          }}
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
