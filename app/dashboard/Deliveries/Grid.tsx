import React from 'react'

type Props = {}

const products = [
  {
    id: 1,
    name: 'Hisense Washing Machine',
    number: 6516154854,
    address: '17, Airport Road, Benin City, Nigeria',
    price: '$120',
    imageSrc: './assets/image.png'
  },
  {
    id: 1,
    name: 'Hisense Washing Machine',
    number: 6516154854,
    address: '17, Airport Road, Benin City, Nigeria',
    price: '$120',
    imageSrc: './assets/image.png'
  },
  {
    id: 1,
    name: 'Hisense Washing Machine',
    number: 6516154854,
    address: '17, Airport Road, Benin City, Nigeria',
    price: '$120',
    imageSrc: './assets/image.png'
  },
  {
    id: 1,
    name: 'Hisense Washing Machine',
    number: 6516154854,
    address: '17, Airport Road, Benin City, Nigeria',
    price: '$120',
    imageSrc: './assets/image.png'
  }
]

const Grid = (props: Props) => {
  return (
    <section className='bg-white text-gray-100 rounded-xl'>
      <div className='container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl'>
        <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
          <div
            className='
            '
          >
            {products.map(product => (
              <div
                key={product.id}
                className='p-6 rounded-2xl bg-gray-100 my-4'
              >
                <div className='space-y-12'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <div className='flex items-center justify-center w-full rounded-xl bg-white text-gray-900'>
                        <div className='rounded-xl border-black'>
                          <img src={product.imageSrc} alt='' className='mx-2' />
                        </div>
                      </div>
                    </div>
                    <div className='ml-4 -mt-4'>
                      <p className='text-md font-medium  text-gray-700'>
                        {product.name}
                      </p>
                      <p className=' text-gray-600 text-sm'>{product.number}</p>
                      <p className=' text-gray-600 text-sm'>
                        {product.address}
                      </p>
                      <p className='text-gray-600 font-semibold mt-2 text-sm'>
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div aria-hidden='true' className='mt-8 lg:-mt-12'>
            <img
              src='./assets/map.png'
              alt=''
              className='mx-auto rounded-xl shadow-lg bg-gray-500'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid
