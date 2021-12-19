import type { NextPage } from 'next';
import { ExternalLink } from 'components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			<ExternalLink
				color='$passionFruit500'
				size='small'
			/>
		</div>
	);
};

export default Home