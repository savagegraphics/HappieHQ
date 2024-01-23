import React from 'react'
import Router from './Router'

type Props = {}

const Navig = (props: Props) => {
  return (
    <section className=''>
      <div className='flex justify-around'>
      <div className=''>Shipments</div>
        <div className=''>
          <Router />
        </div>
        <div className=''>Shipments</div>
      </div>
    </section>
  )
}

export default Navig
