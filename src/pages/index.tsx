import type { NextPage } from 'next';
import { Badge } from '../components/badge'
import { Info } from '../components/icons'

const Home: NextPage = () => {
	return (
		<div>
			<Badge
				type='positive'
				size='large'
				style='outline'
			><Info />Information</Badge>
		</div>
	);
};

export default Home
