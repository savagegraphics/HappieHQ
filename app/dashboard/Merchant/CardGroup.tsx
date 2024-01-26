import React from 'react'

type Props = {}

const CardGroup = (props: Props) => {
  return (
    <div>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6'>
          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    23
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Active Shipment</p>
            </div>
          </a>

          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    0
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Canceled</p>
            </div>
          </a>

          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    50
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Completed</p>
            </div>
          </a>

          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    10
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Deliveries</p>
            </div>
          </a>

          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    5
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Get Estimate</p>
            </div>
          </a>

          <a
            className='group flex flex-col bg-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='p-4 md:p-5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='group-hover:text-blue-600 font-bold text-3xl text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                    6
                  </h3>
                </div>
                <div className='ps-3'>
                  <svg
                    className='flex-shrink-0 w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m9 18 6-6-6-6' />
                  </svg>
                </div>
              </div>
              <p className='text-sm text-gray-500'>Track Shipment</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardGroup
