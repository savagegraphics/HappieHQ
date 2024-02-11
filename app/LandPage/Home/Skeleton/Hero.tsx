import React, { useState, useEffect } from 'react'
import Hero from '@/app/LandPage/Home/Hero'
import Link from 'next/link'

const SkeletonSingleCard = () => {
  return (
    <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center lg:m-2 m-4'>
        <div className='lg:col-span-3 rounded-xl'>
          <div className='block rounded-xl text-xl font-bold text-gray-800 sm:text-3xl md:text-2xl lg:text-4xl dark:text-white'>
            {/* Skeleton for heading */}
            <div className='w-64 h-8 mb-4 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
          </div>
          <div className='mt-3 text-md rounded-xl text-gray-800 dark:text-gray-400'>
            {/* Skeleton for paragraph */}
            <div className='w-full h-6 mb-2 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
            <div className='w-full h-6 mb-2 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
            <div className='w-full h-6 mb-2 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
          </div>

          <div className='mt-7 rounded-xl grid gap-3 w-full sm:inline-flex'>
            {/* Skeleton for Start Shipping button */}
            <div className='w-36 h-12 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
            {/* Skeleton for Get A Quote button */}
            <div className='w-36 h-12 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
          </div>
          <div className='mt-6 lg:mt-12 rounded-xl'>
            <span className='text-xs font-medium text-gray-800 uppercase dark:text-gray-200'>
              Trusted by:
            </span>

            <div className='mt-4 flex gap-x-8 rounded-xl'>
              {/* Skeleton for Trusted logos */}
              <div className='w-20 h-16 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
              <div className='w-20 h-16 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 mt-10 lg:mt-0 rounded-xl'>
          {/* Skeleton for image */}
          <div className='w-full h-96 rounded-xl bg-gray-300 dark:bg-gray-700'></div>
        </div>
      </div>
    </div>
  )
}

const SkelSingle = () => {
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 12000) // Change the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <SkeletonSingleCard /> : <Hero />}</div>
}

export default SkelSingle
