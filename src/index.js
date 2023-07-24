import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { aprilAddress, binanceAddress, goerliAddress } from "./configurations/config";

function Component() {
  const { contract, isLoading } = useContract(binanceAddress, aprilAddress);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="binance"
      clientId="0cde6a874bb767cdcbf735bc99865f86"
    >
      <App />
      <Component />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
