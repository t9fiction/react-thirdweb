import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { aprilAddress, binanceAddress, binanceAddressmine } from "../configurations/config";
import { useAddress } from "@thirdweb-dev/react";

export default function useCall() {
    const { contract } = useContract(aprilAddress);
    const address = useAddress();
    const { mutateAsync: approve, isLoading } = useContractWrite(contract, "approve")
  
    const call = React.useCallback(async () => {
      try {
        const data = await approve({ args: [binanceAddress, 50] })
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }, [approve]);
    
    return call;
  }