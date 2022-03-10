import type { NextPage } from 'next';
import { Avatar } from '../components/avatar'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<div>
			<Avatar name='brian' size='small'><img src='https://via.placeholder.com/80x80' /></Avatar>
			<Avatar name='kelly' size='small' />
			<Avatar name='brian' size='default'><img src='https://via.placeholder.com/80x80' /></Avatar>
			<Avatar name='samanthae' size='default' />
			<Avatar name='brian' size='large'><img src='https://via.placeholder.com/80x80' /></Avatar>
			<Avatar name='samanthae' size='large' />
			<Avatar name='brian' size='large'><Image src='https://via.placeholder.com/80x80' layout='fixed' width={80} height={80} /></Avatar>
		</div>
	);
};

export default Home
