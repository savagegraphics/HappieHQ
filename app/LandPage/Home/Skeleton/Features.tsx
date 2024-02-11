import React, { useState, useEffect } from 'react'
import Features from '@/app/LandPage/Home/Feature'
import Link from 'next/link'

const SkeletonSingleCard = () => {
  return (
    <section className='p-4 lg:p-8 bg-white text-gray-800'>
      <div className='container mx-auto space-y-12 my-16'>
        <div className='flex flex-col-reverse p-4 bg-white overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <div className='h-[24rem] rounded-2xl aspect-video bg-gray-200'></div>
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
            <div className='h-4 w-full bg-gray-200'></div>
            <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
            <div className='h-4 w-3/4 bg-gray-200 mt-2'></div>
            <div className='h-4 w-2/3 bg-gray-200 mt-2'></div>
            <div className='h-4 w-4/5 bg-gray-200 mt-2'></div>
          </div>
        </div>
        <div className='flex flex-col-reverse overflow-hidden p-4 rounded-md shadow-sm bg-white lg:flex-row'>
          <div className='h-[24rem] rounded-2xl aspect-video bg-gray-200'></div>
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
            <div className='h-4 w-full bg-gray-200'></div>
            <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
            <div className='h-4 w-3/4 bg-gray-200 mt-2'></div>
            <div className='h-4 w-2/3 bg-gray-200 mt-2'></div>
            <div className='h-4 w-4/5 bg-gray-200 mt-2'></div>
          </div>
        </div>
        <div className='flex flex-col-reverse p-4 bg-white overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <div className='h-[24rem] rounded-2xl aspect-video bg-gray-200'></div>
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
            <div className='h-4 w-full bg-gray-200'></div>
            <div className='h-4 w-5/6 bg-gray-200 mt-2'></div>
            <div className='h-4 w-3/4 bg-gray-200 mt-2'></div>
            <div className='h-4 w-2/3 bg-gray-200 mt-2'></div>
            <div className='h-4 w-4/5 bg-gray-200 mt-2'></div>
          </div>
        </div>
      </div>
    </section>
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

  return <div>{loading ? <SkeletonSingleCard /> : <Features />}</div>
}

export default SkelSingle
