import React from 'react';
import {
	Web3Provider,
	AntDesignConfigProvider,
	NotificationProvider,
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
			<AntDesignConfigProvider>
				<Web3Provider>
					<NotificationProvider>
						<div className={clsx(inter.className)}>
							<SEO />
							<Navbar />
							{children}
						</div>
					</NotificationProvider>
				</Web3Provider>
			</AntDesignConfigProvider>
		</ThemeProvider>
	);
};

export default Layout;
