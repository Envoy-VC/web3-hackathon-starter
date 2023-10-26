import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
}

const NotificationProvider = ({ children }: Props) => {
	const { theme } = useTheme();
	return (
		<>
			{children}
			<Toaster
				position='bottom-left'
				toastOptions={{
					className: clsx(
						!!theme && theme === 'dark' && '!bg-[#333333] !text-white'
					),
				}}
			/>
		</>
	);
};

export default NotificationProvider;
