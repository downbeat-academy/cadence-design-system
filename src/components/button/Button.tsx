import { styled } from '../../stitches.config';

export const Button = styled('button', {
	fontFamily: '$interfaceBody',
	fontWeight: 700,
	lineHeight: '$interfaceBody',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	gap: '$4',
	boxSizing: 'border-box',
	border: '1px solid transparent',
	borderRadius: 0,
	transition: '$1',

	'&:hover': {
		cursor: 'pointer',
	},

	variants: {
		size: {
			large: {
				fontSize: '$interfaceBase',
				padding: '$4 $5',
			},
			medium: {
				fontSize: '$interfaceSmall',
				padding: '$4',
			},
			small: {
				fontSize: '$interfaceExtraSmall',
				padding: '$3 $4',
			},
		},
		variant: {
			primary: {
				background: '$passionFruit500',
				color: '$grayscale000',
				'&:hover': { background: '$passionFruit600' },
				'&:focus': {
					borderColor: '$passionFruit500',
					boxShadow: 'inset 0 0 0 2px $colors$passionFruit500, inset 0 0 0 3px $colors$grayscale100',
				},
				'&:active': { background: '$passionFruit500' },
				':disabled': {
					color: '$grayscale200',
				},
			},
			secondary: {
				background: '$blackberry900',
				color: '$grayscale000',
				'&:hover': { background: '$blackberry800' },
				'&:focus': {
					borderColor: '$blackberry900',
					boxShadow: 'inset 0 0 0 2px $colors$blackberry900, inset 0 0 0 3px $colors$grayscale100',
				},
				'&:active': { background: '$blackberry900' },
			},
			tertiary: {
				background: 'none',
				border: 'solid 1px $passionFruit600',
				color: '$passionFruit600',
				'&:hover': {
					background: '$passionFruit600',
					borderColor: '$passionFruit600',
					color: '$grayscale000',
				},
				'&:focus': {
					borderColor: '$passionFruit600',
					boxShadow: 'inset 0 0 0 2px $colors$passionFruit500, inset 0 0 0 3px $colors$grayscale100',
				},
				'&:active': {
					color: '$grayscale000',
					background: '$passionFruit600',
				},
			},
			ghost: {
				background: 'none',
				color: '$passionFruit600',
				'&:hover': { background: '$passionFruit000' },
				'&:focus': {
					borderColor: '$passionFruit600',
					boxShadow: 'inset 0 0 0 2px $colors$passionFruit000, inset 0 0 0 3px $colors$passionFruit500',
				},
				'&:active': { background: 'transparent' },
			},
			destructive: {
				background: '$pomegranate500',
				color: '$grayscale000',
				'&:hover': { background: '$pomegranate600' },
				'&:focus': {
					background: '$pomegranate500',
					boxShadow: 'inset 0 0 0 2px $colors$pomegranate500, inset 0 0 0 3px $colors$grayscale100',
				},
				'&:active': { background: '$pomegranate700' },
			},
		},
	},

	defaultVariants: {
		size: 'large',
		variant: 'primary',
	},
});
