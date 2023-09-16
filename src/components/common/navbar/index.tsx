import React from 'react';
import { useTheme } from 'next-themes';
import { ConnectWallet } from '@thirdweb-dev/react';
import ThemeSwitcher from '../theme-switcher';

// Icons
import { PiAirplaneTakeoffDuotone } from 'react-icons/pi';

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div className='p-4 px-6'>
			<div className='flex flex-row items-center justify-between'>
				<div className='flex flex-row items-center gap-2'>
					<PiAirplaneTakeoffDuotone className='text-4xl text-blue-500' />
					<div className='hidden text-2xl font-bold sm:flex'>W3-Starter</div>
				</div>
				<div className='flex flex-row items-center gap-2'>
					<ThemeSwitcher />
					<ConnectWallet
						btnTitle='Connect'
						theme={!!theme && theme === 'dark' ? 'dark' : 'light'}
						className='!bg-blue-500 !p-3 !text-white'
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
