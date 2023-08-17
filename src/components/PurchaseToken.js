import React, { useState } from 'react';
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import { useAddress, useSigner } from '@thirdweb-dev/react';
import Paywall from '@unlock-protocol/paywall';
import networks from '@unlock-protocol/networks';
import { binanceAddress, paywallConfig } from '../configurations/config';
import { ethers } from 'ethers';
import useCall from './useCall';

const PurchaseToken = () => {
  const address = useAddress();
  const { contract } = useContract(binanceAddress);
  const approveCall = useCall();
  const [referrer, setReferrer] = useState('');

  const signer = useSigner();
  // const provider = signer.provider;
  // console.log(provider, "provider");

  const { mutateAsync: purchase } = useContractWrite(contract, 'purchase');

  const _values = ['50000000000000000000'];
  const _recipients = [address];
  const _referrers = [referrer];
  const _keyManagers = [address];
  const _data = [0];

  const pruchaseCall = async () => {
    try {
      const data = await purchase({
        args: [_values, _recipients, _referrers, _keyManagers, _data],
      });
      if (data) {
        // Display the message with the received data
        alert('Membership Purchased');
      }
    } catch (err) {
      alert('contract call failure', err);
    }
  };
  // const pruchaseCall = async () => {
  //   try {
  //     const data = await purchase({
  //       args: [_values, _recipients, _referrers, _keyManagers, _data],
  //       overrides: {
  //         gasLimit: 1000000, // override default gas limit
  //         value: ethers.utils.parseEther("0.001"), // send 0.1 native token with the contract call
  //       },
  //     });
  //     if (data) {
  //       // Display the message with the received data
  //       alert("Membership Purchased");
  //     }
  //   } catch (err) {
  //     alert("contract call failure", err);
  //   }
  // };

  const checkOut = async () => {
    const provider = await signer.provider;
    const paywall = new Paywall(paywallConfig, networks, signer);
    const result = await paywall?.loadCheckoutModal(paywallConfig);
    console.log(result, 'result');
  };

  const mainCall = async () => {
    console.log("Inside MainCall")
    try {
      await approveCall();
      await pruchaseCall();
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setReferrer(e.target.value);
  };

  return (
    <div className="py-6 flex flex-col space-y-2">
      <h2 className="font-bold text-lg">PurchaseToken Function</h2>
      <p>Referrer :</p>
      <input
        onChange={handleChange}
        value={referrer}
        placeholder="Referral wallet address"
        className="px-4 py-2 min-w-[80px]"
      />
      <button
        onClick={mainCall}
        disabled={!referrer}
        className="bg-zinc-500 rounded-md py-2 px-4 cursor-pointer ease-in-out duration-300"
      >
        Purchase Using Token
      </button>
      {/* <button
        onClick={checkOut}
        className="bg-zinc-500 rounded-md py-2 px-4 hover:text-white hover:bg-black ease-in-out duration-300"
      >
        Purchase using Paywall
      </button> */}
    </div>
  );
};

export default PurchaseToken;
