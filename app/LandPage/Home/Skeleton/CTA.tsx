import React, { useState, useEffect } from 'react'
import CTA from '@/app/LandPage/Home/CTA'
import Link from 'next/link'

const SkeletonSingleCard = () => {
  return (
    <div className='w-full p-4 text-center bg-white border border-gray-200 rounded-xl shadow sm:p-8'>
      <h5 className='mb-2 text-3xl font-bold text-gray-900'>
        {/* Skeleton for title */}
      </h5>
      <p className='mb-5 text-base text-gray-500 sm:text-lg'>
        {/* Skeleton for description */}
      </p>
      <div className='items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse'>
        <a
          href='#'
          className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-xl inline-flex items-center justify-center px-4 py-2.5'
        >
          {/* Skeleton for App Store download button */}
        </a>
        <a
          href='#'
          className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-xl inline-flex items-center justify-center px-4 py-2.5'
        >
          {/* Skeleton for Google Play download button */}
        </a>
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

  return <div>{loading ? <SkeletonSingleCard /> : <CTA />}</div>
}

export default SkelSingle
