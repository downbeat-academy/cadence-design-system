import type { NextPage } from 'next';
import { Facebook, Spotify, Instagram, Soundcloud, YouTube, TikTok, Twitter } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<Facebook />
			<Spotify />
			<Instagram />
			<Soundcloud />
			<YouTube />
			<TikTok />
			<Twitter />
		</div>
	);
};

export default Home
