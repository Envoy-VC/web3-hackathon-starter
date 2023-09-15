import React from 'react';
import { Web3Provider } from '~/providers';
import { ThemeProvider } from 'next-themes';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<ThemeProvider attribute='class'>
			<Web3Provider>{children}</Web3Provider>
		</ThemeProvider>
	);
};

export default Layout;
