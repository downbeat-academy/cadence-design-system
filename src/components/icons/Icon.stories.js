import React from 'react';
import { 
	Info,
	Award,
	BookAlt,
	Book,
	Calendar,
	CalendarX,
	CalendarCheck,
	CalendarPlus,
	CalendarMinus,
	CalendarExclamation,
	CalendarEdit,
	CalendarEvent,
	CalendarHeart,
	CalendarStar,
	CalendarWeek,
	Close,
	Megaphone,
	Warning,
	Error,
	CheckCircle,
	ExternalLink,
	QuoteLeft,
	QuoteRight,
} from './index';

export default {
	title: 'Foundations/Icons',
	component: Icon,
	decorators: [withDesign],
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

// export const Icons = (args) => <Icon {...args} />;
// export const Arrows = (args) => <Arrow {...args} />;
// export const SocialIcons = (args) => <SocialIcon {...args} />;

// Icons.args = {
// 	icon: 'info',
// 	size: 'small',
// 	color: '$blackberry1000',
// };

// Arrows.args = {
// 	icon: 'arrow',
// 	size: 'small',
// 	color: '$blackberry1000',
// 	direction: 'down',
// };

// SocialIcons.args = {
// 	icon: 'facebook',
// 	size: 'small',
// 	color: '$blackberry1000',
// };
