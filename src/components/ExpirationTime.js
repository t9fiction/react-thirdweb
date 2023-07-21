import React, { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const ExpirationTime = () => {
  const address = useAddress();
  const [tokenId, setTokenId] = useState()
  const { contract } = useContract(
    "0xF19F3Eef84CfB45C8a1eD8d3dBBa9842e1407da0"
  );
  const { data, isLoading } = useContractRead(
    contract,
    "keyExpirationTimestampFor",
    [tokenId]
  );

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTokenId(value)
  };
  const expTime = data?.toString();
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold">Token Expiration Time</h2>{" "}
      <h3>Enter TokenID : </h3>
      <input onChange={handleChange} />
      {!isLoading && (
        expTime !== "0" ? (
          <p>ExpirationTime : {expTime} </p>
        ) : (
          <>
            <p>TokenId doesnt exist yet</p>
          </>
        )
      )}
    </div>
  );
};

export default ExpirationTime;
