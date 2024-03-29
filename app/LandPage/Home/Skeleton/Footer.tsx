import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '../Footer'

const SkeletonSingleCard = () => {
  return (
    <footer className='bg-footer bg-blve'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>{/* Logo Placeholder */}</div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>{/* Company Links Placeholder */}</div>
            <div>{/* Resources Links Placeholder */}</div>
            <div>{/* Contact Links Placeholder */}</div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-200 sm:text-center'>
            {/* Copyright Placeholder */}
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            {/* Social Media Links Placeholder */}
          </div>
        </div>
      </div>
    </footer>
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

  return <div>{loading ? <SkeletonSingleCard /> : <Footer />}</div>
}

export default SkelSingle
