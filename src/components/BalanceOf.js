import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import PurchaseToken from "./PurchaseToken";
import { goerliAddress } from "../configurations/config";

const BalanceOf = () => {
  const address = useAddress();
  const { contract } = useContract(goerliAddress);
  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl py-2">Membership Function</h1>
      {!isLoading ? (
        parseInt(data, 16) !== 0 ? (
          <>
            <div className="flex flex-row">
              Membership Status :{" "}
              <span className="font-semibold"> Already a Member,</span> no more
              purchase allowed
            </div>
          </>
        ) : (
          <>
            <p>
              <span className="font-semibold"> Not a Member,</span> Make a
              purchase
            </p>
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
