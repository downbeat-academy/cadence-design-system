import type { NextPage } from 'next';
import { Badge } from '../components/badge'
import { Info } from '../components/icons'
import { H1 } from '../components/typography'

const Home: NextPage = () => {
	return (
		<div>
			<H1 context='display'>Headline 1</H1>
			<Badge
				type='positive'
				style='outline'
			>Information</Badge>
		</div>
	);
};

export default Home
