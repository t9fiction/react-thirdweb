import React from 'react';
import {
  useContract,
  useContractWrite,
  useContractRead,
} from '@thirdweb-dev/react';
import { binanceAddress } from '../configurations/config';
import { useAddress } from '@thirdweb-dev/react';

export default function useCall() {
  const { contract } = useContract(binanceAddress);
  const address = useAddress();
  const _index = 0;

  const { data, isLoading } = useContractRead(contract, 'tokenOfOwnerByIndex', [
    address,
    _index,
  ]);

  return data;
}
