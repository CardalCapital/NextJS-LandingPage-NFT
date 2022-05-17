/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from 'next/app';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import 'regenerator-runtime/runtime';

import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [1, 4, 137, 56];
  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
