import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='grid lg:grid-cols-2 gap-6'>
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
              className='w-[9rem] h-18 text-white white bg-[#0F2B48] hover:bg-white hover:text-[#0F2B48]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
            >
              <div className='flex'>
                <div className=''>
                  <svg
                    width='32'
                    height='34'
                    className='hover:text-[#0F2B48]'
                    color='[#0F2B48]'
                    viewBox='0 0 43 42'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.18233 7.875C7.6974 7.875 6.27328 8.45117 5.22327 9.47676C4.17326 10.5023 3.58337 11.8933 3.58337 13.3438V16.1875H39.4167V13.3438C39.4167 11.8933 38.8268 10.5023 37.7768 9.47676C36.7268 8.45117 35.3027 7.875 33.8178 7.875H9.18233ZM3.58337 28.6562V18.375H39.4167V28.6562C39.4167 30.1067 38.8268 31.4977 37.7768 32.5232C36.7268 33.5488 35.3027 34.125 33.8178 34.125H9.18233C7.6974 34.125 6.27328 33.5488 5.22327 32.5232C4.17326 31.4977 3.58337 30.1067 3.58337 28.6562ZM27.9948 25.8125C27.6978 25.8125 27.413 25.9277 27.203 26.1329C26.993 26.338 26.875 26.6162 26.875 26.9062C26.875 27.1963 26.993 27.4745 27.203 27.6796C27.413 27.8848 27.6978 28 27.9948 28H32.9219C33.2189 28 33.5037 27.8848 33.7137 27.6796C33.9237 27.4745 34.0417 27.1963 34.0417 26.9062C34.0417 26.6162 33.9237 26.338 33.7137 26.1329C33.5037 25.9277 33.2189 25.8125 32.9219 25.8125H27.9948Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='pt-2 pl-2'> Fund Wallet</div>
              </div>
            </button>
          </div>
          <div className='m-4'>
            {' '}
            <button
              type='submit'
              className='w-[9rem] h-18 text-white white bg-[#0F2B48] hover:bg-white hover:text-[#0F2B48]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-xl text-xs px-4 py-2'
            >
              <div className='flex'>
                <div className=''>
                  <svg
                    width='35'
                    height='36'
                    viewBox='0 0 35 36'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21.875 18L29.1666 12.1667L21.875 6.33337V10.7069H2.91663V13.6236H21.875V18ZM32.0833 22.375H13.125V18L5.83329 23.8334L13.125 29.6667V25.2917H32.0833V22.375Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <div className='pt-2 pl-2'> Fund Wallet</div>
              </div>
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
