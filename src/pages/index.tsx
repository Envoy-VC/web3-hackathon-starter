import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import { create } from 'zustand';
import { Button } from 'antd';
import toast from 'react-hot-toast';
import { PiCaretUpBold, PiCaretDownBold } from 'react-icons/pi';

interface HackathonWinsState {
	wins: number;
	increase: () => void;
	decrease: () => void;
}

const useHackathon = create<HackathonWinsState>()((set) => ({
	wins: 0,
	increase: () => set((state) => ({ wins: state.wins + 1 })),
	decrease: () =>
		set((state) => {
			if (state.wins !== 0) return { wins: state.wins - 1 };
			return { wins: 0 };
		}),
}));

const Home: NextPageWithLayout = () => {
	const { wins, increase, decrease } = useHackathon();
	return (
		<div className='flex h-screen items-center justify-center p-24'>
			<div className='flex flex-col items-center gap-4 text-center text-3xl font-bold sm:flex-row'>
				<span className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent'>
					Hackathon Wins
				</span>
				<span>🏆x {wins}</span>
				<div className='flex flex-row gap-4 '>
					<Button
						icon={<PiCaretUpBold size={24} className='text-blue-400' />}
						size='large'
						onClick={() => {
							increase();
							toast.success('Hurray!', { icon: '😄' });
						}}
					/>
					<Button
						icon={<PiCaretDownBold size={24} className='text-blue-400' />}
						size='large'
						onClick={() => {
							decrease();
							toast.success('NVM!', { icon: '😢' });
						}}
					/>
				</div>
			</div>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
