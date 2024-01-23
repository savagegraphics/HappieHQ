import React from 'react'

type Props = {}

const BalHero = (props: Props) => {
  return (
    <div className='mx-auto my-10 bg-[#0F2B48] flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left'>
      <div className=''>
        <p className='text-xl font-medium text-gray-700'>James Edward</p>
        <p className='mb-4 text-sm font-medium text-gray-500'>Senior Editor</p>
        <div className='flex space-x-2'>
          <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
            <p className='text-sm font-medium text-gray-500'>Articles</p>
            <p className='text-3xl font-medium text-gray-600'>13</p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
            <p className='text-sm font-medium text-gray-500'>Papers</p>
            <p className='text-3xl font-medium text-gray-600'>7</p>
          </div>
          <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
            <p className='text-sm font-medium text-gray-500'>Followers</p>
            <p className='text-3xl font-medium text-gray-600'>2.5k</p>
          </div>
          <div className=''></div>
        </div>
        <div className='mb-3'></div>
        <div className='flex space-x-2'>
          <button className='w-full rounded-xl border-2 bg-white px-4 py-2 font-medium text-gray-500'>
            Message
          </button>
          <button className='w-full rounded-xl border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white'>
            Follow
          </button>
        </div>
      </div>
      <div className='mb-4 md:mr-6 md:mb-0'>
        <div className='absolute bottom-12 lg:top-8 right-4 z-10'>
          <div className='flex h-full p-4 sm:p-6'>
            <div className='ml-16'>
              <img src='./assets/Ellipse24.svg' alt='' />
            </div>
            <div className='-ml-[8rem]'>
              <img src='./assets/Ellipse24.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalHero
