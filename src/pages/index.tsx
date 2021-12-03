import type { NextPage } from 'next';
import { Badge } from '../components/badge'
import { Icon } from '../components/icons'
import { Logo } from '../components/brand'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			{/* <Badge type='error'>
				<Icon icon='error' size='extraSmall' />Badge text
			</Badge> */}
			<Logo
				type='lockup'
				color='$colors$passionFruit500'
				width='500'
			/>
		</div>
	);
};

export default Home;
