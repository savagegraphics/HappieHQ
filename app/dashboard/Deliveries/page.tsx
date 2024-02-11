import React from 'react'
import Router from './Router'
import NextUI from '@/app/dashboard/Components/NextUI/NextUI'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <Router />
      <NextUI />
    </div>
  )
}

export default page
