import { styled } from '../../stitches.config';

export const Paragraph = styled('p', {
	color: '$blackberry900',

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
			},
		},
		{
			context: 'display',
			size: 'large',
			css: {
				fontSize: '$displayLarge',
			},
		},
		{
			context: 'display',
			size: 'small',
			css: {
				fontSize: '$displaySmall',
			},
		},
		{
			context: 'display',
			size: 'extraSmall',
			css: {
				fontSize: '$displayExtraSmall',
			},
		},
		{
			context: 'interface',
			size: 'base',
			css: {
				fontSize: '$interfaceBase',
			},
		},
		{
			context: 'interface',
			size: 'large',
			css: {
				fontSize: '$interfaceLarge',
			},
		},
		{
			context: 'interface',
			size: 'small',
			css: {
				fontSize: '$interfaceSmall',
			},
		},
		{
			context: 'interface',
			size: 'extraSmall',
			css: {
				fontSize: '$interfaceExtraSmall',
			},
		},
	],

	defaultVariants: {
		context: 'display',
		size: 'base',
	},
});
