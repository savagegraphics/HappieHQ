import React from 'react'

type Props = {}

const LandPage = (props: Props) => {
  return (
    <div className='flex flex-col w-full lg:flex-row mt-6'>
      <div className='grid flex-grow mx-4 mb-4 w-[90%] h-44 lg:w-[55%] rounded-2xl bg-[#0F2B48]'>
        <div className='flex justify-between m-4'>
          <div className='ml-4 text-white mt-6'>
            <h1 className='lg:text-2xl text-xl font-semibold'>
              Good Evening, David
            </h1>
            <p className='mb-4 mt-2 font-thin'>Welcome back!</p>
          </div>
          <div className='text-xl font-semibold text-white mr-6'>
            <button
              type='submit'
              className='ml-4 mt-4 w-36 h-12 text-white bg-[#36C6EB] hover:bg-[#36C6EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-sm px-4 py-2'
            >
              Start Shipping
            </button>
          </div>
        </div>
      </div>
      <div className='relative grid flex-grow mx-4 w-[90%] h-44 lg:w-[35%] rounded-xl bg-[#0F2B48]'>
        <div className=''>
          <div className='flex justify-between mx-6 mt-6'>
            <div className=''>
              <img src='./assets/wallet.svg' alt='' />
            </div>
            <div className='text-xl font-semibold text-white mr-4'>Wallet</div>
          </div>
          <div className='mt-2 ml-6'>
            <h3 className='text-2xl text-white font-medium'>N18,240</h3>
            <p className='font-thin text-white '>Main Account</p>
          </div>
          <div className='flex justify-end items-end mr-6 mb-4 -mt-4'>
            {' '}
            <button
              type='submit'
              className='w-32 h-10 text-[#0F2B48] bg-white hover:bg-[#36C6EB] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal font-Inter rounded-xl text-sm px-4 py-2'
            >
              Fund Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandPage
