import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import PurchaseToken from "./PurchaseToken";

const BalanceOf = () => {
  const address = useAddress();
  const { contract } = useContract(
    "0xF19F3Eef84CfB45C8a1eD8d3dBBa9842e1407da0"
  );
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl py-2">Membership Function</h1>
      {!isLoading ? (
        data.toString() == 0 && (
          <>
            <div className="flex flex-row">
              Membership Status : {data !== undefined && data.toString()}
            </div>
            <PurchaseToken />
          </>
        )
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default BalanceOf;
