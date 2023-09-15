import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Ethereum, Polygon } from '@thirdweb-dev/chains';

// Metadata
import { dAppMetadata } from 'config';

import { env } from '~/env.mjs';

interface Props {
	children: React.ReactNode;
}

const Web3Provider = ({ children }: Props) => {
	return (
		<ThirdwebProvider
			clientId={env.NEXT_PUBLIC_TW_CLIENT_ID}
			activeChain={Ethereum}
			supportedChains={[Ethereum, Polygon]}
			dAppMeta={dAppMetadata}
		>
			{children}
		</ThirdwebProvider>
	);
};

export default Web3Provider;
