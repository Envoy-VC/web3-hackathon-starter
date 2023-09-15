import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from 'next-themes';

import { useIsMounted } from 'usehooks-ts';

interface Props {
	children: React.ReactNode;
}

const AntDesignConfigProvider = ({ children }: Props) => {
	const { theme: defaultTheme } = useTheme();
	const [mounted, setMounted] = React.useState<boolean>(false);

	const isMounted = useIsMounted();

	React.useEffect(() => {
		if (isMounted()) {
			setMounted(true);
		}
	}, [isMounted]);

	return (
		<ConfigProvider
			theme={{
				algorithm:
					!!defaultTheme && defaultTheme === 'dark'
						? theme.darkAlgorithm
						: theme.defaultAlgorithm,
			}}
		>
			{mounted && children}
		</ConfigProvider>
	);
};

export default AntDesignConfigProvider;
