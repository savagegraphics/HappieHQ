import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className='p-4 lg:p-8 bg-white text-gray-800'>
      <div className='container mx-auto space-y-12 my-16'>
        <div className='flex flex-col-reverse p-4 bg-white overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <img
            src='./assets/Box3D.png'
            alt=''
            className='h-[24rem] rounded-2xl aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <h3 className='text-2xl font-semibold leading-10 text-gray-950'>
              Improved Logistics Service.
            </h3>
            <p className='my-6 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              eleifend quam at tincidunt aliquet. Vestibulum condimentum in eros
              ut ullamcorper. Integer et faucibus magna.
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse overflow-hidden p-4 rounded-md shadow-sm bg-white lg:flex-row'>
          <img
            src='./assets/trust-vector.png'
            alt=''
            className='h-[24rem] rounded-2xl aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <h3 className='text-2xl font-semibold leading-10 text-gray-950'>
              Reliable and secured customer service.
            </h3>
            <p className='my-6 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              eleifend quam at tincidunt aliquet. Vestibulum condimentum in eros
              ut ullamcorper. Integer et faucibus magna.
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse p-4 bg-white overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <img
            src='./assets/Location3d.png'
            alt=''
            className='h-[24rem] rounded-2xl aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 mx-1 lg:mx-12 p-6 bg-white'>
            <h3 className='text-2xl font-semibold leading-10 text-gray-950'>
              Hitch Free Process.
            </h3>
            <p className='my-6 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              eleifend quam at tincidunt aliquet. Vestibulum condimentum in eros
              ut ullamcorper. Integer et faucibus magna.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
