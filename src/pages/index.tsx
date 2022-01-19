import type { NextPage } from 'next';
import { Divider } from '../components/divider'
import { Mega, H1, H2, H3, H4, H5, H6 } from '../components/typography'

const Home: NextPage = () => {
	return (
		<div>
			<Mega>Mega headline</Mega>
			<H1 context='display'>Heading 1</H1>
			<H2 context='display'>Heading 2</H2>
			<H3 context='display'>Heading 3</H3>
			<H4 context='display'>Heading 4</H4>
			<H5 context='display'>Heading 5</H5>
			<H6 context='display'>Heading 6</H6>
			<Divider />
			<H1 context='interface'>Heading 1</H1>
			<H2 context='interface'>Heading 2</H2>
			<H3 context='interface'>Heading 3</H3>
			<H4 context='interface'>Heading 4</H4>
			<H5 context='interface'>Heading 5</H5>
			<H6 context='interface'>Heading 6</H6>
		</div>
	);
};

export default Home