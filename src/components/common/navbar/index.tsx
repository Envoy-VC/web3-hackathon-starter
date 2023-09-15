import React from 'react';

import ThemeSwitcher from '../theme-switcher';

const Navbar = () => {
	return (
		<div className='border-2 p-4 px-6'>
			<div className='flex flex-row items-center justify-between'>
				<span>Web3 Hackathon Starter</span>
				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default Navbar;
