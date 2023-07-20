import React from 'react'
import {ConnectWallet} from "@thirdweb-dev/react"
import { useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const address = useAddress();
  console.log("address",address)
  
  return (
    <div className='flex flex-row justify-between h-16 bg-slate-400 items-center px-12'>
      <h1 className='text-lg font-bold'>LOGO..</h1>
      <div className='flex flex-row space-x-8 text-lg font-bold'>
          <button>HOME</button>
          <button>ABOUT</button>
      </div>
      <ConnectWallet />
    </div>
  )
}

export default Navbar