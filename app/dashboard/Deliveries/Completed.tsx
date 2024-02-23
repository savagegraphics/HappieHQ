import React from 'react'
import { Input } from '@nextui-org/react'

export default function App () {
  const sizes = ['sm', 'md', 'lg']

  return (
    <div className='w-full flex flex-col gap-4'>
      {sizes.map(size => (
        <div
          key={size}
          className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'
        >
          <Input
            size={size as 'sm' | 'md' | 'lg'}
            type='email'
            label='Email'
            className='border-none'
          />
          <Input
            size={size as 'sm' | 'md' | 'lg'}
            type='email'
            label='Email'
            placeholder='Enter your email'
            className='border-none'
          />
        </div>
      ))}
    </div>
  )
}
