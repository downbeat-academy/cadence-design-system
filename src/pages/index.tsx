import type { NextPage } from 'next';
import { Play } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<Play
				color='black'
				style='outlined'
			/>
			<p>Paragraph</p>
		</div>
	);
};

export default Home
