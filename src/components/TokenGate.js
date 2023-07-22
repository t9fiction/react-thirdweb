import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
// import { PublicLockV13 } from "@unlock-protocol/contracts";


const TokenGate = ({ children }) => {
    // const address = useAddress();
    // const { contract } = useContract("0xF19F3Eef84CfB45C8a1eD8d3dBBa9842e1407da0");
    // const { data, isLoading } = useContractRead(contract, "balanceOf", [address])
    // if(isLoading){
    //     return <p>Loading.........</p>
    // }
    // if(data.eq(0)){
    //     <p>You need a token to access the NFT</p>
    // }

  return children;
};

export default TokenGate;
