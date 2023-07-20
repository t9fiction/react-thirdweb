import React from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const BalanceOf = () => {
    const address = useAddress();
    const { contract } = useContract("0x9ADe6Ed97678fe17D9f0277A7351D7aE698109d0");
    const { data, isLoading } = useContractRead(contract, "balanceOf", [address])
  return (
    <div className='text-center flex justify-center items-center'>
    {
        !isLoading ?
        <div className='flex flex-row'>Membership Status : {data.toString()}</div>
        : <p>Loading....</p>
    }
    </div>
    )
}

export default BalanceOf