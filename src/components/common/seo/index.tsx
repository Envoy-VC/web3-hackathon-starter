import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title='Web3 Hackathon Starter'
			description='A opinionated starter template for building web3 applications with Next.js, Tailwind CSS, and thirdweb'
			openGraph={{
				url: 'https://w3-starter.vercel.app',
				title: 'Web3 Hackathon Starter',
				description:
					'A opinionated starter template for building web3 applications with Next.js, Tailwind CSS, and thirdweb',
				images: [
					{
						url: 'https://i.ibb.co/YhWLyTb/OG.png',
						width: 1200,
						height: 630,
						alt: 'W3S OG Image',
						type: 'image/png',
					},
				],
				siteName: 'Web3 Hackathon Starter',
			}}
			twitter={{
				handle: '@Envoy_1084',
				site: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export default SEO;
