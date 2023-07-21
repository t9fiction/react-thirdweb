import React from 'react'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const PurchaseToken = () => {
    const address = useAddress();    
    const { contract } = useContract("0xF19F3Eef84CfB45C8a1eD8d3dBBa9842e1407da0");

    const { mutateAsync: purchase, isLoading } = useContractWrite(contract, "purchase")

    const _values = ["50000000000000000000"]
    const _recipients = [address]
    const _referrers = ["0xa19E1Cf321F47ED1feAe8C4C320FEE91984ccD62"]
    const _keyManagers = ["0x1401119b17EFb739D3Ed0E37599A6144802F3cdC"]
    const _data = [0]

    const call = async () => {
        try {
          const data = await purchase({ args: [_values, _recipients, _referrers, _keyManagers, _data] });
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }

  return (
    <div className='py-6'>
        <h2 className='font-bold text-lg'>
        PurchaseToken Function
        </h2>
        <button onClick={()=>call()} className='bg-zinc-500 rounded-md py-2 px-4 hover:text-white hover:bg-black ease-in-out duration-300'>
            Purchase Membership
        </button>
        </div>
  )
}

export default PurchaseToken