import type { NextPage } from 'next';
import { Icon } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			<Icon icon='info' color='$colors$passionFruit500' size='small' />
			<Icon icon='info' color='black' size='small' />
		</div>
	);
};

export default Home;
