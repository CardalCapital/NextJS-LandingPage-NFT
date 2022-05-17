/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";

import "../../styles/globals.scss";
import Web3 from "web3";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />;
    </Web3ReactProvider>
  );
}

export default MyApp;