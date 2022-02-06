import type { NextPage } from 'next';
import { OrderedList, UnorderedList, DefinitionList, Paragraph } from '../components/typography'

const Home: NextPage = () => {
	return (
		<>
			<Paragraph context='display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
			<OrderedList>
				<li>Number 1</li>
				<li>Number 2</li>
				<li>Number 3</li>
			</OrderedList>
			<Paragraph context='display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
			<UnorderedList>
				<li>Item 1</li>
				<li>Item 2
					<UnorderedList>
						<li>Item A</li>
						<li>Item B</li>
						<li>Item C</li>
					</UnorderedList>
				</li>
				<li>Item 3</li>
			</UnorderedList>
			<DefinitionList>
				<dd>Defintion 1</dd>
				<dd>Defintion 2</dd>
				<dd>Defintion 3</dd>
			</DefinitionList>
			<Paragraph context='display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
		</>
	);
};

export default Home