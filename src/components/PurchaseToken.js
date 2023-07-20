import React from 'react'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const PurchaseToken = () => {
    const address = useAddress();    
    const { contract } = useContract("0x9ADe6Ed97678fe17D9f0277A7351D7aE698109d0");

    const { mutateAsync: purchase, isLoading } = useContractWrite(contract, "purchase")

    const _values = ["50000000000000000000"]
    const _recipients = [address]
    const _referrers = ["0xCfAD1AB2149104eB1524552Ef54E0c64552ad99e"]
    const _keyManagers = ["0xCfAD1AB2149104eB1524552Ef54E0c64552ad99e"]
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
    <div>
        <h2>
        PurchaseToken
        </h2>
        <button onClick={()=>call()} className='bg-zinc-500 rounded-md py-2 px-4'>
            Purchase Membership
        </button>
        </div>
  )
}

export default PurchaseToken