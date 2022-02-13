import type { NextPage } from 'next';
import { styled, darkTheme } from '../stitches.config'
import { Blockquote, Paragraph } from '../components/typography'

const Home: NextPage = () => {
	return (
		<Wrapper>
			<Paragraph context='display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
			<Blockquote attribution='Somebody cool' source='https://google.com'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Blockquote>
			<Paragraph context='display'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
		</Wrapper>
	);
};

export default Home

const Wrapper = styled('div', {
	background: '$surface',
	color: '$onSurface',
})