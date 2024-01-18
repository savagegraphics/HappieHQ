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

const TheCard = (props: Props) => {
  return (
    <div className=''>
      {products.map(product => (
        <div key={product.id} className='flex mb-4 bg-gray-100 rounded-3xl'>
          <div className=''>
            <img
              src={product.imageSrc}
              className='m-4 rounded-xl h-24'
              alt=''
            />
          </div>
          <div className='m-4'>
            <p className='font-semibold text-sm'>{product.name}</p>
            <p className='font-thin text-gray-700 text-sm'>{product.number}</p>
            <p className='font-thin text-gray-700 text-sm'>{product.address}</p>
            <p className='font-semibold mt-2 text-sm'>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TheCard
