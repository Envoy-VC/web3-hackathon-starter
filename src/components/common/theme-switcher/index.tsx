import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'antd';

// Icons
import { PiCloudSun, PiCloudMoon } from 'react-icons/pi';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	return (
		<Button
			type='text'
			shape='circle'
			size='large'
			icon={
				theme === 'dark' ? <PiCloudSun size={24} /> : <PiCloudMoon size={24} />
			}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		/>
	);
};

export default ThemeSwitcher;
