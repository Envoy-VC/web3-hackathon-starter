import React from 'react';

// WAGMI Imports
import { publicProvider } from 'wagmi/providers/public';
import { createConfig, configureChains, mainnet, WagmiConfig } from 'wagmi';

// Connectors
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { env } from '~/env.mjs';

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet],
	[publicProvider()]
);

const config = createConfig({
	connectors: [
		new InjectedConnector({ chains }),
		new MetaMaskConnector({
			chains,
			options: {
				shimDisconnect: true,
				UNSTABLE_shimOnConnectSelectAccount: true,
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				projectId: env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
			},
		}),
	],
	publicClient,
	webSocketPublicClient,
});

interface Props {
	children: React.ReactNode;
}

const Web3Provider = ({ children }: Props) => {
	return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default Web3Provider;
