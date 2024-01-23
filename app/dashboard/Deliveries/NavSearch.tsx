'use client'

import { Button, Timeline } from 'flowbite-react'
import React from 'react'
import type { FC } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {}

const TimelineExample: FC = function () {
  return (
    <Timeline className='m-8'>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <div className='mx-2'>
            <dt className='flex justify-between mt-4 mx-4 '>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                Relaxer Cream 2 set
              </div>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                2 Packets - 30 kg
              </div>
            </dt>
            <div className='mx-6 my-2'>
              <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
                <div
                  className='bg-[#0F2B48] h-1 rounded-full'
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <dt className='flex justify-between mb-4 mx-4 '>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Arrived Warehouse
              </div>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Ext Delivery 12 Dec 2022 11:00PM
              </div>
            </dt>
          </div>
          <hr />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <div className='mx-2'>
            <dt className='flex justify-between mt-4 mx-4 '>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                Relaxer Cream 2 set
              </div>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                2 Packets - 30 kg
              </div>
            </dt>
            <div className='mx-6 my-2'>
              <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
                <div
                  className='bg-[#0F2B48] h-1 rounded-full'
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <dt className='flex justify-between mb-4 mx-4 '>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Arrived Warehouse
              </div>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Ext Delivery 12 Dec 2022 11:00PM
              </div>
            </dt>
          </div>
          <hr />
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <div className='mx-2'>
            <dt className='flex justify-between mt-4 mx-4 '>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                Relaxer Cream 2 set
              </div>
              <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
                2 Packets - 30 kg
              </div>
            </dt>
            <div className='mx-6 my-2'>
              <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
                <div
                  className='bg-[#0F2B48] h-1 rounded-full'
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <dt className='flex justify-between mb-4 mx-4 '>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Arrived Warehouse
              </div>
              <div className='text-gray-400 text-[10px] font-normal font-Inter'>
                Ext Delivery 12 Dec 2022 11:00PM
              </div>
            </dt>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}

export default TimelineExample
