import React from "react";
import ExpirationTime from "./ExpirationTime";
import BalanceOf from "./BalanceOf";
import { useAddress } from "@thirdweb-dev/react";
import { useChainId } from "@thirdweb-dev/react";

const MainPage = () => {
  const address = useAddress();
  const chainId = useChainId();
  return (
    <div className="bg-slate-300 h-screen py-24 px-12">
      {address ? (
        chainId === 56 ? (
          <>
            <BalanceOf />
            <ExpirationTime />
          </>
        ) : (
          <p className="font-semibold text-lg">
            Pleae select Binance Chain and then try again
          </p>
        )
      ) : (
        <p>Connect wallet to check your membership</p>
      )}
    </div>
  );
};

export default MainPage;
