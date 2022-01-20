import type { NextPage } from 'next';
import { Divider } from '../components/divider'
import { Mega, H1, H2, H3, H4, H5, H6, Paragraph } from '../components/typography'

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
			<Divider />
			<Paragraph context='display' size='base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Libero nunc consequat interdum varius sit amet mattis. Justo donec enim diam vulputate ut. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sagittis aliquam malesuada bibendum arcu. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vitae purus faucibus ornare suspendisse sed nisi. Volutpat est velit egestas dui. Ac feugiat sed lectus vestibulum mattis ullamcorper. Vitae nunc sed velit dignissim sodales ut eu sem integer. Velit egestas dui id ornare arcu odio ut sem nulla. Scelerisque in dictum non consectetur a erat nam at. Mi ipsum faucibus vitae aliquet nec. Lorem ipsum dolor sit amet consectetur adipiscing elit. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Id interdum velit laoreet id. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Interdum consectetur libero id faucibus nisl tincidunt.</Paragraph>
			<Paragraph context='display' size='base'>Tristique senectus et netus et malesuada fames ac turpis egestas. Eros donec ac odio tempor orci. Eget lorem dolor sed viverra ipsum. Facilisi nullam vehicula ipsum a arcu cursus. Ut faucibus pulvinar elementum integer. Dolor sit amet consectetur adipiscing elit duis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Nisl nunc mi ipsum faucibus. Ut morbi tincidunt augue interdum velit euismod. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Consequat interdum varius sit amet mattis vulputate. Iaculis urna id volutpat lacus. Etiam non quam lacus suspendisse faucibus. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Et netus et malesuada fames ac turpis egestas sed tempus. In fermentum posuere urna nec tincidunt praesent semper.</Paragraph>
			<Paragraph context='display' size='base'>In fermentum posuere urna nec tincidunt. Sagittis eu volutpat odio facilisis mauris. Donec et odio pellentesque diam. Pretium fusce id velit ut tortor pretium. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Fermentum dui faucibus in ornare quam viverra. Facilisis volutpat est velit egestas dui id ornare arcu odio. Purus gravida quis blandit turpis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Fermentum et sollicitudin ac orci. Iaculis urna id volutpat lacus laoreet non. Habitant morbi tristique senectus et netus et. Nisl rhoncus mattis rhoncus urna neque viverra. Diam ut venenatis tellus in.</Paragraph>
			<Paragraph context='display' size='base'>Tristique senectus et netus et malesuada fames ac turpis egestas. Eros donec ac odio tempor orci. Eget lorem dolor sed viverra ipsum. Facilisi nullam vehicula ipsum a arcu cursus. Ut faucibus pulvinar elementum integer. Dolor sit amet consectetur adipiscing elit duis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Nisl nunc mi ipsum faucibus. Ut morbi tincidunt augue interdum velit euismod. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Consequat interdum varius sit amet mattis vulputate. Iaculis urna id volutpat lacus. Etiam non quam lacus suspendisse faucibus. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Et netus et malesuada fames ac turpis egestas sed tempus. In fermentum posuere urna nec tincidunt praesent semper.</Paragraph>
		</div>
	);
};

export default Home