import React from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import { aprilAddress, binance24address } from '../configurations/config';
import { useAddress } from '@thirdweb-dev/react';
import useCallTokenId from './getTokenId';

const RenewMembership = () => {
  const { contract } = useContract(binance24address);
  const address = useAddress();

  // Argument Values
  const _value = '50000000000000000000';
  const _referrer = address;
  const _data = [0];
  const _tokenId = useCallTokenId();
  console.log(_tokenId, 'tokenID');
  const { mutateAsync: extend, isLoading } = useContractWrite(
    contract,
    'extend'
  );

  const call = async () => {
    try {
      const data = await extend({ args: [_value, _tokenId, _referrer, _data] });
      console.info('contract call successs', data);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  return (
    <>
      <div>RenewMembership</div>

      <button onClick={call} className="bg-slate-700 py-2 px-4 rounded-md">
        Renew Membership
      </button>
    </>
  );
};

export default RenewMembership;