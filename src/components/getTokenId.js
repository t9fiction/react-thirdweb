import React from 'react';
import {
  useContract,
  useContractWrite,
  useContractRead,
} from '@thirdweb-dev/react';
import { binance24address } from '../configurations/config';
import { useAddress } from '@thirdweb-dev/react';

export default function useCall() {
  const { contract } = useContract(binance24address);
  const address = useAddress();
  const _index = 0;

  const { data, isLoading } = useContractRead(contract, 'tokenOfOwnerByIndex', [
    address,
    _index,
  ]);
  console.log(data,"tokenid")

  return data;
}
