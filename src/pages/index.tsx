import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';
import { useAccount, useConnect } from 'wagmi';
import { Button } from 'antd';
const Home: NextPageWithLayout = () => {
	const { address, connector: activeConnector, isConnected } = useAccount();
	const { connect, connectors, error, isLoading, pendingConnector } =
		useConnect();
	return (
		<div className='h-screen p-24'>
			<div className='mx-auto flex max-w-xl flex-col gap-2'>
				{isConnected && (
					<div className='flex flex-col'>
						<div>Connected to {activeConnector?.name}</div>
						<div>Address: {address}</div>
					</div>
				)}
				{connectors.map((connector) => (
					<Button
						type='primary'
						size='large'
						disabled={!connector.ready}
						key={connector.id}
						onClick={() => connect({ connector })}
						className='bg-primary max-w-xs'
					>
						{connector.name}
						{isLoading && pendingConnector?.id === connector.id && ' (connecting)'}
					</Button>
				))}
			</div>

			{error && <div>{error.message}</div>}
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
