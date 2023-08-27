import React, { useEffect, useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
import { useAddress } from '@thirdweb-dev/react';
import { binance24address } from '../configurations/config';
import useCall from './getTokenId';

const ExpirationTime = () => {
  const [expTime, setExpTime] = useState();
  const address = useAddress();
  const [tokenId, setTokenId] = useState();
  const { contract } = useContract(binance24address);
  const { data, isLoading } = useContractRead(
    contract,
    'keyExpirationTimestampFor',
    [tokenId]
  );

  const tokenIDofOwner = useCall();
  const tokeninString = tokenIDofOwner?.toString()
  
  useEffect(() => {
    // setTokenId(tokeninString);
    setTokenId('2');
    const isTime = new Date(data?.toNumber() * 1000).toString().slice(4, 21);
    // const isTime = new Date(data).toString().slice(4, 15);
    setExpTime(isTime);
    console.log(isTime, 'isTime');
    if (isTime.includes('Jan 01 1970')) {
      setExpTime('Not a Member');
    }
    if (isTime === 'lid Date') {
      setExpTime('Not a Member');
    }
  }, [data,tokeninString]);

  // const expTime = data?.toString();
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold">Token Expiration Time</h2>{' '}
      {/* <h3>Enter TokenID : </h3> */}
      {!isLoading &&
        (expTime !== '0' ? (
          <p>
            <span className="font-semibold text-lg">ExpirationTime : </span>
            {expTime}{' '}
          </p>
        ) : (
          <>
            <p>TokenId doesnt exist yet</p>
          </>
        ))}
    </div>
  );
};

export default ExpirationTime;
