import type { NextPage } from 'next';
import { InputField } from '../components/form'
import { Flex } from '../components/layout'

const Home: NextPage = () => {
	return (
		<Flex
			direction='column'
			gap='6'
			css={{
				maxWidth: '500px',
			}}
		>
			<InputField
				inputType='input'
				type='text'
				name='first-name'
				helperText='Your first name'
				label='First name'
				placeholder='John'
			/>
			<InputField
				inputType='input'
				type='text'
				name='last-name'
				helperText='Your last name'
				label='Last name'
				placeholder='Coltrane'
			/>
			<InputField
				inputType='input'
				type='tel'
				name='phone'
				label='Phone number'
				placeholder='john@coltrane.com'
			/>
			<InputField
				inputType='textarea'
				name='message'
				label='Message'
				placeholder='Show me what you got'
			/>
		</Flex>
	);
};

export default Home