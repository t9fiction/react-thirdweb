import React, { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

const ExpirationTime = () => {
  const [expTime, setExpTime] = useState();
  const address = useAddress();
  const [tokenId, setTokenId] = useState();
  const { contract } = useContract(
    "0x9ADe6Ed97678fe17D9f0277A7351D7aE698109d0"
  );
  const { data, isLoading } = useContractRead(
    contract,
    "keyExpirationTimestampFor",
    [tokenId]
  );

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setTokenId(value);
  };

  useEffect(() => {
    const isTime = new Date(data?.toNumber() * 1000).toString().slice(4, 15);
    setExpTime(isTime)
    console.log(isTime,"isTime")
    if(isTime === "Jan 01 1970"){
      setExpTime("Not a Valid Token")
    }
    if(isTime === "lid Date"){
      setExpTime("Enter a Token")
    }
  }, [data])
  

  // const expTime = data?.toString();
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold">Token Expiration Time</h2>{" "}
      <h3>Enter TokenID : </h3>
      <input onChange={handleChange} />
      {!isLoading &&
        (expTime !== "0" ? (
          <p>
            <span className="font-semibold text-lg">ExpirationTime : </span>
            {expTime}{" "}
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
