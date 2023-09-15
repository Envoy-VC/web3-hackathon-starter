import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from 'next-themes';

interface Props {
	children: React.ReactNode;
}

const AntDesignConfigProvider = ({ children }: Props) => {
	const { theme: defaultTheme } = useTheme();
	return (
		<ConfigProvider
			theme={{
				algorithm:
					!!defaultTheme && defaultTheme === 'dark'
						? theme.darkAlgorithm
						: theme.defaultAlgorithm,
			}}
		>
			{children}
		</ConfigProvider>
	);
};

export default AntDesignConfigProvider;
