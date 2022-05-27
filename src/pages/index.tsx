import type { NextPage } from 'next';
import { Flex } from '@/components/layout';
import { Checkbox, Indicator } from '@/components/checkbox';
import { Check } from '@/components/icons';
import { Label } from '@/components/label'

const Home: NextPage = () => {
	return (
		<div>
			<Flex direction='row' align='center' gap='4'>
				<Checkbox defaultChecked size='default' id='c1'>
					<Indicator>
						<Check size='extraSmall' />
					</Indicator>
				</Checkbox>
				<Label htmlFor='c1' bold>
					Checkbox
				</Label>
			</Flex>
		</div>
	);
};

export default Home
