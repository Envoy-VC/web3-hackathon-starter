import React from 'react';
import { Web3Provider, AntDesignConfigProvider } from '~/providers';
import { ThemeProvider } from 'next-themes';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<ThemeProvider attribute='class' enableSystem={false}>	
			<AntDesignConfigProvider>
				<Web3Provider>{children}</Web3Provider>
			</AntDesignConfigProvider>
		</ThemeProvider>
	);
};

export default Layout;
