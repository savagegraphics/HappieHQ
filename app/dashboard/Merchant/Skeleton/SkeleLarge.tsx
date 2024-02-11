import React, { useState, useEffect } from 'react'
import LargeGrid from '../LargeGrid'

const SkeletonSingleCard = () => {
  return (
    <div className='rounded-2xl mt-4 bg-white lg:w-full lg:h-[20rem] w-full h-[20rem]  border border-gray-200'>
      <dt className='flex justify-between m-4 text-3xl font-semibold leading-9 '>
        <div className='text-sky-950 ml-2 text-lg font-bold font-Inter mt-2'></div>
        <div className=''>
          <button
            type='button'
            className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-[#0F2B48] text-white hover:bg-[#284b70] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-Inter'
          ></button>
        </div>
      </dt>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mt-4 mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
        </dt>
        <div className='mx-6 my-2'>
          <div className='w-full bg-gray-300 rounded-full h-1 '></div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
        </dt>
      </div>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mx-4 my-2 text-3xl font-semibold leading-9 '>
          <div className='text-gray-400 text-sm font-semibold font-Inter'></div>
        </dt>
        <dt className='flex justify-between mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
        </dt>
        <div className='mx-6 my-2'>
          <div className='w-full bg-gray-300 rounded-full h-1 '></div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
        </dt>
      </div>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mx-4 my-2 text-3xl font-semibold leading-9 '>
          <div className='text-gray-400 text-sm font-semibold font-Inter'></div>
        </dt>
        <dt className='flex justify-between mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'></div>
        </dt>
        <div className='mx-6 my-2'>
          <div className='w-full bg-gray-300 rounded-full h-1 '></div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'></div>
        </dt>
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

  return <div>{loading ? <SkeletonSingleCard /> : <LargeGrid />}</div>
}

export default SkelSingle
