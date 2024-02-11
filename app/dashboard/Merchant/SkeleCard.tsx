import React, { useState, useEffect } from 'react'
import CardGroup from './CardGroup'

const SkeletonCardGroup = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6'>
        {/* Skeleton Card */}
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>
        <div className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          <div className='p-4 md:p-5'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='animate-pulse group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'></h3>
              </div>
              <div className='ps-3'>
                <div className='animate-pulse flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full'></div>
              </div>
            </div>
            <p className='animate-pulse text-sm text-gray-500 bg-gray-300 h-6 mt-2'></p>
          </div>
        </div>

        {/* Repeat Skeleton Cards for other items */}
      </div>
    </div>
  )
}

const SkeleCard = () => {
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 12000) // Change the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <SkeletonCardGroup /> : <CardGroup />}</div>
}

export default SkeleCard
