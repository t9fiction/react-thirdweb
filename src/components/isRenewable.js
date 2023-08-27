import React from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { binance24address } from '../configurations/config';
import { useAddress } from '@thirdweb-dev/react';

export default function useIsRenewable({_tokenId,_referrer}) {
  const { contract } = useContract(binance24address);
  const address = useAddress();
  
  const { data, isLoading } = useContractRead(contract, "isRenewable", [_tokenId, _referrer])

  return data;
}


