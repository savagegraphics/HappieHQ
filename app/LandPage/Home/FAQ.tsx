import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid md:grid-cols-5 gap-10 lg:m-2 m-4'>
        <div className='md:col-span-2'>
          <div className='max-w-xs'>
            <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
              FAQs
            </h2>
            <p className='mt-1 hidden md:block text-gray-600 dark:text-gray-400'>
              We have carefully prepared a list of the most frequent inquiries
              for you. This will give you more insights on what Happie is about.{' '}
            </p>
          </div>
        </div>

        <div className='md:col-span-3'>
          <div className='hs-accordion-group'>
            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active'
              id='hs-basic-with-title-and-arrow-stretched-heading-one'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
              >
                What is Happie
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
                <svg
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <p className='text-gray-800 dark:text-gray-200'>
                  Happie, is a e-commerce logistics start-up with a mission to
                  that provide innovative, effective shipping and fulfillment
                  services for e-commerce businesses.
                </p>
              </div>
            </div>

            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]'
              id='hs-basic-with-title-and-arrow-stretched-heading-two'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-two'
              >
                Is my data secured?
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
                <svg
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-two'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-two'
              >
                <p className='text-gray-800 dark:text-gray-200'>
                  Happie, is a e-commerce logistics start-up with a mission to
                  that provide innovative, effective shipping and fulfillment
                  services for e-commerce businesses..
                </p>
              </div>
            </div>

            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]'
              id='hs-basic-with-title-and-arrow-stretched-heading-three'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-three'
              >
                Can I be a marketer for Happie?
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
                <svg
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-three'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-three'
              >
                <p className='text-gray-800 dark:text-gray-200'>
                  Happie, is a e-commerce logistics start-up with a mission to
                  that provide innovative, effective shipping and fulfillment
                  services for e-commerce businesses.
                </p>
              </div>
            </div>

            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]'
              id='hs-basic-with-title-and-arrow-stretched-heading-four'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-four'
              >
                Why should I use Happie for my fulfilment service?
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
                <svg
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-four'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-four'
              >
                <p className='text-gray-800 dark:text-gray-200'>
                  Happie, is a e-commerce logistics start-up with a mission to
                  that provide innovative, effective shipping and fulfillment
                  services for e-commerce businesses.
                </p>
              </div>
            </div>

            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]'
              id='hs-basic-with-title-and-arrow-stretched-heading-five'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-five'
              >
                Do I need internet to use happie?
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
                <svg
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
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
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>
              <div
                id='hs-basic-with-title-and-arrow-stretched-collapse-five'
                className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-five'
              >
                <p className='text-gray-800 dark:text-gray-200'>
                  Happie, is a e-commerce logistics start-up with a mission to
                  that provide innovative, effective shipping and fulfillment
                  services for e-commerce businesses.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
