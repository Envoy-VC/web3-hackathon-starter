import React from 'react';
import { Web3Provider } from '~/providers';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return <Web3Provider>{children}</Web3Provider>;
};

export default Layout;
