import React from 'react';
import {
	AntDesignConfigProvider,
	NotificationProvider,
	Web3Provider,
} from '~/providers';
import { ThemeProvider } from 'next-themes';

import clsx from 'clsx';
import { Navbar, SEO } from '~/components/common';

// Font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<ThemeProvider attribute='class' enableSystem={false}>
			<SEO />
			<Web3Provider>
				<NotificationProvider>
					<AntDesignConfigProvider>
						<div className={clsx(inter.className)}>
							<Navbar />
							{children}
						</div>
					</AntDesignConfigProvider>
				</NotificationProvider>
			</Web3Provider>
		</ThemeProvider>
	);
};

export default Layout;
