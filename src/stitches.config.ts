import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
} = createStitches({
	theme: {
		colors: {
			// Global tokens
			passionFruit100: '#eaebff',
			passionFruit200: '#c6c8fe',
			passionFruit300: '#a3a7fd',
			passionFruit400: '#848afa',
			passionFruit500: '#6b75f6',
			passionFruit600: '#5665ef',
			passionFruit700: '#4949e0',
			passionFruit800: '#4639ba',
			passionFruit900: '#312273',
			passionFruit1000: '#190F33',

			kale100: '#e4fff5',
			kale200: '#c6ffee',
			kale300: '#8ff4dc',
			kale400: '#61dcd1',
			kale500: '#4ccad1',
			kale600: '#47b0c5',
			kale700: '#298998',
			kale800: '#13646b',
			kale900: '#063d3f',
			kale1000: '#001211',

			pomegranate100: '#ffe1ea',
			pomegranate200: '#fd9fb5',
			pomegranate300: '#f24866',
			pomegranate400: '#d11a32',
			pomegranate500: '#b10010',
			pomegranate600: '#900009',
			pomegranate700: '#6f0005',
			pomegranate800: '#4e0002',
			pomegranate900: '#2e0001',
			pomegranate1000: '#0d0000',

			pineapple100: '#fff9e3',
			pineapple200: '#fff1c2',
			pineapple300: '#f8dc6e',
			pineapple400: '#d7ba47',
			pineapple500: '#b69a2c',
			pineapple600: '#947b1a',
			pineapple700: '#735c0f',
			pineapple800: '#524009',
			pineapple900: '#312504',
			pineapple1000: '#0f0b01',

			blueberry100: '#e6f6ff',
			blueberry200: '#b8e1ff',
			blueberry300: '#8dcfff',
			blueberry400: '#65c9ff',
			blueberry500: '#43a2ff',
			blueberry600: '#326dcd',
			blueberry700: '#25489a',
			blueberry800: '#1a2c68',
			blueberry900: '#0e1635',
			blueberry1000: '#010103',

			blackberry100: '#e6eeff',
			blackberry200: '#b4c1e3',
			blackberry300: '#8a97c7',
			blackberry400: '#6773ab',
			blackberry500: '#4c568f',
			blackberry600: '#374073',
			blackberry700: '#262e57',
			blackberry800: '#181e3b',
			blackberry900: '#0c101f',
			blackberry1000: '#010103',

			grayscale100: '#ffffff',
			grayscale200: '#f5f5f5',
			grayscale300: '#e5e5e9',
			grayscale400: '#d7d7dd',
			grayscale500: '#cacad2',
			grayscale600: '#97979f',
			grayscale700: '#717177',
			grayscale800: '#4c4c50',
			grayscale900: '#262628',
			grayscale1000: '#1c1c1c',

			// Alias tokens
			background: '$grayscale100',
			backgroundSecondary: '$grayscale200',
			backgroundInteractive: '$passionFruit600',
			backgroundInteractiveHover: '$passionFruit700',
			backgroundInteractiveActive: '$passionFruit800',
			backgroundInverse: '$grayscale1000',
			backgroundInverseSecondary: '$grayscale900',
			backgroundInfo: '$blueberry100',
			backgroundPositive: '$kale100',
			backgroundCaution: '$pineapple100',
			backgroundCritical: '$pomegranate100',

			textPrimary: '$blackberry900',
			textPrimaryHover: '$passionFruit700',
			textPrimaryActive: '$passionFruit800',
			textSecondary: '$grayscale600',
			textSecondaryHover: '$grayscale700',
			textSecondaryActive: '$grayscale800',
			textInteractive: '$passionFruit600',
			textInteractiveHover: '$passionFruit700',
			textInteractiveActive: '$passionFruit800',
			textDisabled: '$grayscale500',
			textInverse: '$grayscale100',
			textInverseHover: '$passionFruit400',
			textInverseActive: '$passionFruit500',
			textInverseSecondary: '$grayscale300',
			textInverseSecondaryHover: '$grayscale200',
			textInverseSecondaryActive: '$grayscale200',
			textError: '$pomegranate500',
			textCaution: '$pineapple500',
			textPositive: '$kale600',
			textInfo: '$blueberry600',

			borderDefault: '$grayscale500',
			borderDefaultHover: '$grayscale700',
			borderDefaultActive: '$grayscale.900',
			borderInteractive: '$passionFruit600',
			borderInteractiveHover: '$passionFruit700',
			borderInteractiveActive: '$passionFruit800',
			borderInverse: '$grayscale100',
			borderError: '$pomegranate500',
			borderCaution: '$pineapple500',
			borderPositive: '$kale600',
			borderInfo: '$blueberry600',
		},
		space: {
			1: '2px',
			2: '4px',
			3: '8px',
			4: '12px',
			5: '16px',
			6: '24px',
			7: '32px',
			8: '40px',
			9: '64px',
			10: '80px',
		},
		fonts: {
			displayHeadline: 'Favorit Expanded, Helvetica, Arial, sans-serif',
			interfaceHeadline: 'Favorit, Helvetica, Arial, sans-serif',
			displayBody: 'Tiempos Text, Georgia, Times, serif',
			interfaceBody: 'Favorit, Helvetica, Arial, sans-serif',
			mono: 'Favorit Mono, Courier, monospace',
			musicNotation: 'Noto Music, sans-serif',
		},
		fontSizes: {
			displayExtraLarge: '1.5rem',
			displayLarge: '1.25rem',
			displayBase: '1.125rem',
			displaySmall: '0.875rem',

			displayMega: 'clamp(2.5rem, 3.94vw + 2.06rem, 5.25rem)',
			displayH1: 'clamp(2.49rem, 2.58vw + 1.88rem, 4.21rem)',
			displayH2: 'clamp(2.07rem, 1.63vw + 1.69rem, 3.16rem)',
			displayH3: 'clamp(1.73rem, 0.96vw + 1.5rem, 2.37rem)',
			displayH4: 'clamp(1.44rem, 0.51vw + 1.32rem, 1.78rem)',
			displayH5: 'clamp(1.2rem, 0.2vw + 1.15rem, 1.33rem)',
			displayH6: 'clamp(1rem, 0vw + 1rem, 1rem)',

			interfaceExtraLarge: '1.5rem',
			interfaceLarge: '1.25rem',
			interfaceBase: '1rem',
			interfaceSmall: '0.875rem',
			interfaceExtraSmall: '0.75rem',

			interfaceH1: 'clamp(1.8rem, 1.88vw + 1.36rem, 3.05rem)',
			interfaceH2: 'clamp(1.6rem, 1.26vw + 1.31rem, 2.44rem)',
			interfaceH3: 'clamp(1.42rem, 0.8vw + 1.24rem, 1.95rem)',
			interfaceH4: 'clamp(1.27rem, 0.45vw + 1.16rem, 1.56rem)',
			interfaceH5: 'clamp(1.13rem, 0.19vw + 1.08rem, 1.25rem)',
			interfaceH6: 'clamp(1rem, 0vw + 1rem, 1rem)',
		},
		lineHeights: {
			displayBody: '1.8',
			displayHeadline: '1.3',

			interfaceBody: '1.6',
			interfaceHeadline: '1.3',
		},
		radii: {
			2: '$space$1',
			4: '$space$2',
			rounded: '50% ',
		},
		letterSpacings: {},
		borderStyles: {},
		borderWidths: {},
		zIndices: {},
		transitions: {
			1: 'all 25ms ease-in-out',
			2: 'all 50ms ease-in-out',
			3: 'all 100ms ease-in-out',
			4: 'all 200ms ease-in-out',
			5: 'all 300ms ease-in-out',
			6: 'all 400ms ease-in-out',
			7: 'all 500ms ease-in-out',
			8: 'all 750ms ease-in-out',
			9: 'all 1000ms ease-in-out',
		},
		shadows: {
			base: '0 1px 16px 0 hsla(240, 36%, 22%, 5%)',
		},
	},
	utils: {},
	media: {
		xs: '(max-width: 375px)',
		sm: '(max-width: 500px)',
		md: '(max-width: 768px)',
		lg: '(max-width: 1200px)',
		xl: '(max-width: 1440px)',
	},
});

export const darkTheme = createTheme({
	colors: {
		passionFruit100: '#110824',
		passionFruit200: '#351c7c',
		passionFruit300: '#4129ae',
		passionFruit400: '#4434ce',
		passionFruit500: '#4443e2',
		passionFruit600: '#5665ef',
		passionFruit700: '#7781f3',
		passionFruit800: '#9ca2f3',
		passionFruit900: '#c1c4f2',
		passionFruit1000: '#e3e3f0',

		kale100: '#071211',
		kale200: '#143536',
		kale300: '#1f555a',
		kale400: '#2a737d',
		kale500: '#3791a1',
		kale600: '#47b0c5',
		kale700: '#64d3d2',
		kale800: '#88e2cf',
		kale900: '#b0f0d6',
		kale1000: '#dbffe9',

		pomegranate100: '#0d0000',
		pomegranate200: '#330002',
		pomegranate300: '#590104',
		pomegranate400: '#7f010a',
		pomegranate500: '#a60212',
		pomegranate600: '#cc1b32',
		pomegranate700: '#f24866',
		pomegranate800: '#f67793',
		pomegranate900: '#fba9bf',
		pomegranate1000: '#ffdbe5',

		pineapple100: '#0f0b01',
		pineapple200: '#312504',
		pineapple300: '#524008',
		pineapple400: '#735c0f',
		pineapple500: '#947b19',
		pineapple600: '#b69a2b',
		pineapple700: '#d7ba47',
		pineapple800: '#f8dc6e',
		pineapple900: '#fbdaa0',
		pineapple1000: '#ffe7d1',

		blueberry100: '#010103',
		blueberry200: '#0e1635',
		blueberry300: '#192c68',
		blueberry400: '#24479a',
		blueberry500: '#316ccd',
		blueberry600: '#43a2ff',
		blueberry700: '#68cdff',
		blueberry800: '#92f0ff',
		blueberry900: '#bdfffb',
		blueberry1000: '#e6fff9',

		blackberry100: '#010103',
		blackberry200: '#0c101f',
		blackberry300: '#181e3b',
		blackberry400: '#272e57',
		blackberry500: '#384173',
		blackberry600: '#4e598f',
		blackberry700: '#6b78ab',
		blackberry800: '#8f9dc7',
		blackberry900: '#0C101F',
		blackberry1000: '#e6eeff',

		grayscale100: '#1c1c1c',
		grayscale200: '#262628',
		grayscale300: '#4c4c50',
		grayscale400: '#717177',
		grayscale500: '#97979f',
		grayscale600: '#cacad2',
		grayscale700: '#d7d7dd',
		grayscale800: '#e5e5e9',
		grayscale900: '#f5f5f5',
		grayscale1000: '#ffffff',
	}
})

export type CSS = Stitches.CSS<typeof config>;
