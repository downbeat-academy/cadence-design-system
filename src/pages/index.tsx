import type { NextPage } from 'next';
import { Link } from 'components/link'
import { Paragraph } from 'components/typography'

const Home: NextPage = () => {
	return (
		<div>
			<p>Home Page</p>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus. Vestibulum rhoncus est pellentesque elit. Venenatis lectus magna fringilla urna porttitor. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Dui ut ornare lectus sit amet est. Erat velit scelerisque in dictum non consectetur a. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. <Link>Odio euismod lacinia</Link> at quis risus sed vulputate. Dignissim enim sit amet venenatis. Sapien eget mi proin sed. Neque vitae tempus quam pellentesque nec nam. Dictum varius duis at consectetur. Sit amet porttitor eget dolor morbi non. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Suscipit adipiscing bibendum est ultricies integer quis auctor elit.</Paragraph>
		</div>
	);
};

export default Home;
