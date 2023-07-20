import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import PurchaseToken from "./PurchaseToken";

const ExpirationTime = () => {
  const address = useAddress();
  const { contract } = useContract(
    "0xF19F3Eef84CfB45C8a1eD8d3dBBa9842e1407da0"
  );
  const { data, isLoading } = useContractRead(
    contract,
    "keyExpirationTimestampFor",
    [1]
  );
  const expTime = data?.toString();
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold">Token Expiration Time</h2>{" "}
      {!isLoading ? (
        expTime !== "0" ? (
          <p>ExpirationTime : {expTime} </p>
        ) : (
            <>
          <p>No Token/Membership found</p>
          <PurchaseToken />
            </>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExpirationTime;
