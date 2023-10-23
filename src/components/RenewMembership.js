import React from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import { aprilAddress, binance24address } from '../configurations/config';
import { useAddress } from '@thirdweb-dev/react';
import useCallTokenId from './getTokenId';
import useIsRenewable from './isRenewable';

const RenewMembership = () => {
  const { contract } = useContract(binance24address);
  const address = useAddress();

  // Argument Values
  const _referrer = address;
  const _tokenId = useCallTokenId();
  console.log(_tokenId, 'tokenID');
  const { mutateAsync: renewMembershipFor, isLoading } = useContractWrite(
    contract,
    'renewMembershipFor'
  );
  // const isRenewable = useIsRenewable({_tokenId, _referrer})
  // const { mutateAsync: extend, isLoading } = useContractWrite(
  //   contract,
  //   'extend'
  // );

  console.log(renewMembershipFor,"renewmembership")
  const call = async () => {
    try {
      const data = await renewMembershipFor({ args: [_tokenId, _referrer] });
      console.info('contract call successs', data);
    } catch (err) {
      console.error('contract call failure', err);
    }
  };

  return (
    <>
      <div>Renew Membership</div>

      <button onClick={call} className="bg-slate-700 py-2 px-4 rounded-md">
        Approval
      </button>
    </>
  );
};

export default RenewMembership;
