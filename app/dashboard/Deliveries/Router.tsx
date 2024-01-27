import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import React from 'react'
// import Grid from './Grid'
// import NavSearch from './NavSearch'
// import Completed from './Completed'
import Prepaid from './Prepaid'
import InTransit from './InTransit'
import Complete from './Complete'

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
          <InTransit />
        </TabPanel>
        <TabPanel>
          <Prepaid />
        </TabPanel>
        <TabPanel>
          <Complete />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Router
