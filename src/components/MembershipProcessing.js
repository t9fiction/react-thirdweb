import React, { useEffect, useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { binance24address } from '../configurations/config';


export function MembershipProcessing() {
    const { contract } = useContract(binance24address);
    const { data: noOfOwners, isLoading } = useContractRead(contract, 'numberOfOwners');
    console.log(noOfOwners?.toString(),"data")
    
    useEffect(() => {
        if (noOfOwners !== null) {
            for (let i = 1; i <= noOfOwners.toNumber(); i++) {
        //   const { data:managerOf } = useContractRead(contract, "keyManagerOf", [{{i}}])
      }
    }
  }, [noOfOwners]);

  return (
    <div>
      {noOfOwners !== null ? (
        <p>No. of Owners: {noOfOwners?.toString()}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MembershipProcessing;
