import type { NextPage } from 'next';
import { Icon } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			<Icon icon='error' fill='black' size='large' />
		</div>
	);
};

export default Home;
