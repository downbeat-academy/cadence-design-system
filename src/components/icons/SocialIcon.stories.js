import React from 'react';
import { SocialIcon } from './index';

export default {
	title: 'Foundations/Icons',
	argTypes: {
		size: {
			options: ['extraSmall', 'small', 'medium', 'large'],
			control: { type: 'radio' },
		},
		color: 'color',
		direction: {
			options: ['up', 'down', 'left', 'right'],
			control: { type: 'radio' },
		},
	},
};

export const Icons = (args) => <Icon {...args} />;
export const Arrows = (args) => <Arrow {...args} />;
export const SocialIcons = (args) => <SocialIcon {...args} />;

Icons.args = {
	icon: 'info',
	size: 'small',
	color: '$blackberry1000',
};

SocialIcons.args = {
	icon: 'facebook',
	size: 'small',
	color: '$blackberry1000',
};
