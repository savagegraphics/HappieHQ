import React from 'react'
import Router from './Router'
import NavSearch from './NavSearch'
import TheCard from './TheCard'
import Grid from './Grid'
import SearchNav from './SearchNav'
import Navig from './Navig'
import One from '../TailwindComp/One'
import Two from '../TailwindComp/Two'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='-mt-8'>
      {/* <Two />
      <One /> */}
      <SearchNav />
      <Router />
    </div>
  )
}

export default page
