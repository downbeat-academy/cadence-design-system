import { styled } from '../../stitches.config';

export const Paragraph = styled('p', {
	color: '$blackberry900',

	'& code': {
		fontFamily: '$mono',
	},

	variants: {
		context: {
			display: {
				fontFamily: '$displayBody',
				lineHeight: '$displayBody',
			},
			interface: {
				fontFamily: '$interfaceBody',
				lineHeight: '$interfaceBody',
			},
		},
		size: {
			base: {},
			large: {},
			small: {},
			extraSmall: {},
		},
	},

	compoundVariants: [
		{
			context: 'display',
			size: 'base',
			css: {
				fontSize: '$displayBase',
				marginBottom: '$fontSizes$displayBase',
			},
		},
		{
			context: 'display',
			size: 'large',
			css: {
				fontSize: '$displayLarge',
				marginBottom: '$fontSizes$displayLarge',
			},
		},
		{
			context: 'display',
			size: 'small',
			css: {
				fontSize: '$displaySmall',
				marginBottom: '$fontSizes$displaySmall',
			},
		},
		{
			context: 'display',
			size: 'extraSmall',
			css: {
				fontSize: '$displayExtraSmall',
				marginBottom: '$fontSizes$displayExtraSmall',
			},
		},
		{
			context: 'interface',
			size: 'base',
			css: {
				fontSize: '$interfaceBase',
				marginBottom: '$fontSizes$interfaceBase',
			},
		},
		{
			context: 'interface',
			size: 'large',
			css: {
				fontSize: '$interfaceLarge',
				marginBottom: '$fontSizes$interfaceLarge',
			},
		},
		{
			context: 'interface',
			size: 'small',
			css: {
				fontSize: '$interfaceSmall',
				marginBottom: '$fontSizes$interfaceSmall',
			},
		},
		{
			context: 'interface',
			size: 'extraSmall',
			css: {
				fontSize: '$interfaceExtraSmall',
				marginBottom: '$fontSizes$interfaceExtraSmall',
			},
		},
	],

	defaultVariants: {
		context: 'display',
		size: 'base',
	},
});
