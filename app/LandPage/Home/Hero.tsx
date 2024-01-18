import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center lg:m-2 m-4'>
        <div className='lg:col-span-3'>
          <h1 className='block text-xl font-bold text-gray-800 sm:text-3xl md:text-2xl lg:text-4xl dark:text-white'>
            Get an effective shipping and fufillment services for your
            <span className='text-blue'>{''} e-commerce</span> business.
          </h1>
          <p className='mt-3 text-md text-gray-800 dark:text-gray-400'>
            Welcome to a Happie life! Use Happie to send items to your
            customers, friends, and family locally and internationally. Say
            goodbye to stressful shipping forever!
          </p>

          <div className='mt-7 grid gap-3 w-full sm:inline-flex'>
            <Link
              className='py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='/Auth'
            >
              Start Shipping
              <svg
                className='flex-shrink-0 w-4 h-4'
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
            </Link>
            <a
              className='py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='#'
            >
              Get A Quote
            </a>
          </div>
          <div className='mt-6 lg:mt-12'>
            <span className='text-xs font-medium text-gray-800 uppercase dark:text-gray-200'>
              Trusted by:
            </span>

            <div className='mt-4 flex gap-x-8'>
              <img src='./assets/dhl-icon.png' alt='' className='w-20 h-16' />
              <img src='./assets/fedex-icon.png' alt='' className='w-20 h-16' />
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 mt-10 lg:mt-0'>
          <img
            className='w-full rounded-xl'
            src='./assets/hero-illustration.jpg'
            alt='Image Description'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
