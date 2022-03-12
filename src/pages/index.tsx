import type { NextPage } from 'next';
import { Avatar } from '../components/avatar'
import { Flex } from '@/components/layout';
import { StyledLink } from '@/components/link';
import { Paragraph } from '@/components/typography';

const Home: NextPage = () => {
	return (
		<div>
			<Flex direction='row'>
				<Avatar name='samanthae' size='default' />
				<Paragraph size='small'>Article by <StyledLink style='expressive'>Jory Tindall</StyledLink></Paragraph>
			</Flex>
		</div>
	);
};

export default Home
