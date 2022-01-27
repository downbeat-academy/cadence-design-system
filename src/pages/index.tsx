import type { NextPage } from 'next';
import { Input, TextArea, Label, HelperText, Form } from '../components/form'
import { Flex } from '../components/layout'

const Home: NextPage = () => {
	return (
		<Form>
			<Flex direction='column' gap='2'>
				<Label>First Name</Label>
				<Input type='text' name='first-name' autoComplete='on' placeholder='John' />
				<HelperText>Your first name</HelperText>
			</Flex>
			<Flex direction='column' gap='2'>
				<Label>Last Name</Label>
				<Input type='text' name='last-name' autoComplete='on' placeholder='Coltrane' />
				<HelperText>Your last name</HelperText>
			</Flex>
			<Flex direction='column' gap='2'>
				<Label>Email</Label>
				<Input type='email' name='email' autoComplete='on' placeholder='john@coltrane.com' />
				<HelperText>Your email address</HelperText>
			</Flex>
			<Flex direction='column' gap='2'>
				<Label>Message</Label>
				<TextArea name='message' placeholder='Say hello...' rows={5} />
			</Flex>
		</Form>
	);
};

export default Home