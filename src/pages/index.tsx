import type { NextPage } from 'next';
import { Arrow } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			<Arrow icon='chevron' fill='black' size='small' direction='up' />
		</div>
	);
};

export default Home;
