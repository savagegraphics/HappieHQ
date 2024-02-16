import React, { useState, useEffect } from 'react'
import FAQ from '@/app/LandPage/Home/FAQ'
import Link from 'next/link'

const SkeletonSingleCard = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid md:grid-cols-5 gap-10 lg:m-2 m-4'>
        <div className='md:col-span-2'>
          <div className='max-w-xs rounded-xl'>
            <div className='grow ms-5 rounded-xl'>
              <div className='h-8 w-2/3 bg-gray-200 mb-4'></div>
              <div className='h-4 w-full bg-gray-200 lg:block hidden'></div>
            </div>
          </div>
        </div>

        <div className='md:col-span-3'>
          <div className='hs-accordion-group'>
            {/* FAQ items */}
            {/* FAQ 1 */}
            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active'
              id='hs-basic-with-title-and-arrow-stretched-heading-one'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
              >
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500'
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
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500'
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
                <p className='text-gray-800'></p>
              </div>
            </div>
            <div
              className='hs-accordion hs-accordion-active:bg-gray-100 mt-4 rounded-xl p-6 active'
              id='hs-basic-with-title-and-arrow-stretched-heading-one'
            >
              <button
                className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500'
                aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
              >
                <svg
                  className='hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500'
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
                  className='hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500'
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
                <p className='text-gray-800'></p>
              </div>
            </div>
            {/* FAQ 2 */}
            {/* FAQ 3 */}
            {/* FAQ 4 */}
            {/* FAQ 5 */}
          </div>
        </div>
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
    },1000) // Change the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <SkeletonSingleCard /> : <FAQ />}</div>
}

export default SkelSingle
