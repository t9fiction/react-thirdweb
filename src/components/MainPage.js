import React from 'react'
import ExpirationTime from './ExpirationTime'
import BalanceOf from './BalanceOf'
import { useAddress } from "@thirdweb-dev/react";

const MainPage = () => {
    const address = useAddress();
  return (
    <div className='bg-slate-300 h-screen py-24 px-12'>
        {
            address ?
            <>
            <BalanceOf />
            <ExpirationTime />
            </>:
            <p>Connect wallet to check your membership</p> 

        }
    </div>
  )
}

export default MainPage