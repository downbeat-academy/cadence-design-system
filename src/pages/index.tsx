import type { NextPage } from 'next';
import { Flex } from '@/components/layout';
import { Checkbox, Indicator } from '@/components/checkbox';
import { Check } from '@/components/icons';

const Home: NextPage = () => {
	return (
		<div>
			<Flex direction='row' align='center' gap='4'>
				<Checkbox defaultChecked size='default' id='c1'>
					<Indicator>
						<Check size='extraSmall' />
					</Indicator>
				</Checkbox>
				<label htmlFor='c1'>
					Checkbox
				</label>
			</Flex>
		</div>
	);
};

export default Home
