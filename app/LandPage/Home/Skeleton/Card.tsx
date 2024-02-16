import React, { useState, useEffect } from 'react'
import Card from '@/app/LandPage/Home/Card'
import Link from 'next/link'

const SkeletonSingleCard = () => {
  return (
    <div className='max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6'>
        <div className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition'>
          <div className='p-4 md:p-5'>
            <div className='flex'>
              <div className='mt-1 flex-shrink-0 w-5 h-5 text-gray-800'></div>
              <div className='grow ms-5'>
                <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
                <div className='h-4 w-full bg-gray-200'></div>
                <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition'>
          <div className='p-4 md:p-5'>
            <div className='flex'>
              <div className='mt-1 flex-shrink-0 w-5 h-5 text-gray-800 '></div>
              <div className='grow ms-5'>
                <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
                <div className='h-4 w-full bg-gray-200'></div>
                <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition '>
          <div className='p-4 md:p-5'>
            <div className='flex'>
              <div className='mt-1 flex-shrink-0 w-5 h-5 text-gray-800'></div>
              <div className='grow ms-5'>
                <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
                <div className='h-4 w-full bg-gray-200'></div>
                <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
              </div>
            </div>
          </div>
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
    },1000) // Change the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <SkeletonSingleCard /> : <Card />}</div>
}

export default SkelSingle
