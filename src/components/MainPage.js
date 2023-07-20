import React from 'react'
import ExpirationTime from './ExpirationTime'
import BalanceOf from './BalanceOf'

const MainPage = () => {
  return (
    <div className='bg-slate-300 h-screen py-24 px-12'>
        <BalanceOf />
        <ExpirationTime />
    </div>
  )
}

export default MainPage