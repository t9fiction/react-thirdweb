import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { aprilAddress, binance24address, binanceAddress, goerli24, goerliAddress } from "./configurations/config";

function Component() {
  const { contract, isLoading } = useContract(binance24address);
  console.log(process.env.CLIENT_ID)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="binance"
      clientId='0cde6a874bb767cdcbf735bc99865f86' //Enter the clientID from the thirdweb dashboard
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
