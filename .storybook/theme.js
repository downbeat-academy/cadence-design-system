import { create } from '@storybook/theming';
import { Logo } from '../src/components/brand'

export default create({
	base: 'light',

	colorPrimary: '#5665EF',
	colorSecondary: '#23234B',

	brandTitle: 'Downbeat Academy',
	brandUrl: 'https://cadence.downbeatacademy.com',
	brandImage: 'logo.png',
});
