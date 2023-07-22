import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import Paywall from "@unlock-protocol/paywall";
import networks from "@unlock-protocol/networks";
import { paywallConfig } from "../configurations/config";


const PurchaseToken = () => {
  const address = useAddress();
  const { contract } = useContract(
    "0x9ADe6Ed97678fe17D9f0277A7351D7aE698109d0"
  );

  const signer = useSigner();
  const provider = signer.provider

  const { mutateAsync: purchase, isLoading } = useContractWrite(
    contract,
    "purchase"
  );

  const _values = ["50000000000000000000"];
  const _recipients = [address];
  const _referrers = ["0xa19E1Cf321F47ED1feAe8C4C320FEE91984ccD62"];
  const _keyManagers = [address];
  const _data = [0];

  const call = async () => {
    try {
      const data = await purchase({
        args: [_values, _recipients, _referrers, _keyManagers, _data],
      });
      console.info("contract call successs", data);
    } catch (err) {
      alert("contract call failure", err);
    }
  };

  const checkOut = async () => {
    
    console.log("provider",provider)
    const paywall = new Paywall(paywallConfig, networks, signer);
    const result =  await paywall.loadCheckoutModal(paywallConfig);
    console.log(result,"result")
  };

  return (
    <div className="py-6 flex flex-col space-y-2">
      <h2 className="font-bold text-lg">PurchaseToken Function</h2>
      <button
        onClick={call}
        className="bg-zinc-500 rounded-md py-2 px-4 hover:text-white hover:bg-black ease-in-out duration-300"
      >
        Purchase Using Token
      </button>
      <button
        onClick={checkOut}
        className="bg-zinc-500 rounded-md py-2 px-4 hover:text-white hover:bg-black ease-in-out duration-300"
      >
        Purchase using Paywall
      </button>
    </div>
  );
};

export default PurchaseToken;
