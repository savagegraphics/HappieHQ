import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='grid lg:grid-cols-2 gap-6 mt-16'>
      <div className=''>
        <div className='group col-[50%] relative block max-w-[22rem] rounded-xl mx-8 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
          {/* <BalHero /> */}
          <div className='flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[250px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]'>
            <div
              className='w-full h-full absolute top-0 start-0 object-cover'
              style={{ backgroundColor: '#0F2B48' }}
            />
          </div>

          <div className='absolute top-0 inset-x-0 z-10'>
            <div className='flex flex-col h-full p-4 sm:p-6'>
              <div className='flex justify-between m-4'>
                <img src='/svg/Shipment/finbag.svg' alt='' />
                <div className='mr-4 mt-2'>
                  {' '}
                  <h4 className='font-bold text-white text-base'>Wallet</h4>
                </div>
              </div>
            </div>
          </div>

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

          <div className='absolute top-[2rem] inset-x-0 z-10'>
            <div className='flex justify-between'>
              <div className='mx-8 mt-12'>
                <h2 className='text-white text-4xl font-bold my-4'>N18,240</h2>
                <p className='text-white mb-4 text-opacity-50 text-sm font-thin font-[Inter]'>
                  Main Account
                </p>
              </div>
            </div>
          </div>

          <div className='absolute bottom-6 inset-x-0 z-10'>
            <div className='flex flex-col h-full p-4 sm:p-6'>
              <div className='flex justify-between'>
                <div className=''></div>
                <div className=' text-white mr-4 font-semibold'>
                  {' '}
                  <button
                    type='submit'
                    className='w-32 h-10 text-[#0F2B48] bg-white hover:bg-[#36C6EB] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
                  >
                    Fund Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex mx-6 my-4'>
          <div className='m-4'>
            {' '}
            <button
              type='submit'
              className='w-[9rem] h-10 text-white white bg-[#0a3742] hover:bg-white hover:text-[#0F2B48]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
            >
              Fund Wallet
            </button>
          </div>
          <div className='m-4'>
            {' '}
            <button
              type='submit'
              className='w-[9rem] h-10 text-white white bg-[#0a3742] hover:bg-white hover:text-[#0F2B48]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
            >
              Fund Wallet
            </button>
          </div>
        </div>
      </div>

      <div className='group relative block ml-8 lg:ml-0 lg:mr-1 rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
        <div className='lg:w-[32rem] lg:h-[24rem] w-[28rem] h-[24rem] bg-gray-400 rounded-xl'></div>
        {/* <div className='m-4'>
          {' '}
          <button
            type='submit'
            className='w-32 h-10 text-[#0F2B48] bg-white hover:bg-[#36C6EB] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
          >
            Fund Wallet
          </button>
        </div>
        <div className='m-4'>
          {' '}
          <button
            type='submit'
            className='w-32 h-10 text-[#0F2B48] white bg-[#0a3742] hover:bg-white hover:text- focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
          >
            Fund Wallet
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default page
