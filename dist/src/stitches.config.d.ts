/// <reference types="react" />
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';
export declare const styled: <
		Type extends
			| import('@stitches/react/types/util').Function
			| keyof JSX.IntrinsicElements
			| import('react').ComponentType<any>,
		Composers extends (
			| string
			| import('@stitches/react/types/util').Function
			| import('react').ComponentType<any>
			| {
					[name: string]: unknown;
			  }
		)[],
		CSS_1 = import('@stitches/react/types/css-util').CSS<
			{
				xs: '(max-width: 375px)';
				sm: '(max-width: 500px)';
				md: '(max-width: 768px)';
				lg: '(max-width: 1200px)';
				xl: '(max-width: 1440px)';
			},
			{
				fonts: {
					displayHeadline: string;
					interfaceHeadline: string;
					displayBody: string;
					interfaceBody: string;
					mono: string;
				};
				colors: {
					passionFruit000: string;
					passionFruit100: string;
					passionFruit200: string;
					passionFruit300: string;
					passionFruit400: string;
					passionFruit500: string;
					passionFruit600: string;
					passionFruit700: string;
					passionFruit800: string;
					passionFruit900: string;
					passionFruit1000: string;
					pomegranate000: string;
					pomegranate100: string;
					pomegranate200: string;
					pomegranate300: string;
					pomegranate400: string;
					pomegranate500: string;
					pomegranate600: string;
					pomegranate700: string;
					pomegranate800: string;
					pomegranate900: string;
					pomegranate1000: string;
					blackberry000: string;
					blackberry100: string;
					blackberry200: string;
					blackberry300: string;
					blackberry400: string;
					blackberry500: string;
					blackberry600: string;
					blackberry700: string;
					blackberry800: string;
					blackberry900: string;
					blackberry1000: string;
					pineapple000: string;
					pineapple100: string;
					pineapple200: string;
					pineapple300: string;
					pineapple400: string;
					pineapple500: string;
					pineapple600: string;
					pineapple700: string;
					pineapple800: string;
					pineapple900: string;
					pineapple1000: string;
					kale000: string;
					kale100: string;
					kale200: string;
					kale300: string;
					kale400: string;
					kale500: string;
					kale600: string;
					kale700: string;
					kale800: string;
					kale900: string;
					kale1000: string;
					accent000: string;
					accent100: string;
					accent200: string;
					accent300: string;
					accent400: string;
					accent500: string;
					accent600: string;
					accent700: string;
					accent800: string;
					accent900: string;
					accent1000: string;
				};
				space: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
					6: string;
					7: string;
					8: string;
					9: string;
					10: string;
				};
				fontSizes: {
					displayBase: string;
					displayLarge: string;
					displaySmall: string;
					displayExtraSmall: string;
					displayMega: string;
					displayH1: string;
					displayH2: string;
					displayH3: string;
					displayH4: string;
					displayH5: string;
					displayH6: string;
					interfaceBase: string;
					interfaceLarge: string;
					interfaceSmall: string;
					interfaceExtraSmall: string;
					interfaceH1: string;
					interfaceH2: string;
					interfaceH3: string;
					interfaceH4: string;
					interfaceH5: string;
					interfaceH6: string;
				};
				lineHeights: {
					displayBody: string;
					displayHeadline: string;
					interfaceBody: string;
					interfaceHeadline: string;
				};
				radii: unknown;
				letterSpacings: unknown;
				borderStyles: unknown;
				borderWidths: unknown;
				zIndices: unknown;
				transitions: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
				};
				shadows: {
					base: string;
				};
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{}
		>
	>(
		type: Type,
		...composers: {
			[K in keyof Composers]: Composers[K] extends
				| string
				| import('@stitches/react/types/util').Function
				| import('react').ComponentType<any>
				? Composers[K]
				: import('@stitches/react/types/stitches').RemoveIndex<CSS_1> & {
						variants?:
							| {
									[
										x: string
									]: {
										[
											x: string
										]: CSS_1;
										[
											x: number
										]: CSS_1;
									};
							  }
							| undefined;
						compoundVariants?:
							| (('variants' extends keyof Composers[K]
									? {
											[Name in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name]
												  >
												| undefined;
									  }
									: import('@stitches/react/types/util').WideObject) & {
									css: CSS_1;
							  })[]
							| undefined;
						defaultVariants?:
							| ('variants' extends keyof Composers[K]
									? {
											[Name_1 in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name_1]
												  >
												| undefined;
									  }
									: import('@stitches/react/types/util').WideObject)
							| undefined;
				  } & CSS_1 & {
							[K2 in keyof Composers[K]]: K2 extends
								| 'compoundVariants'
								| 'defaultVariants'
								| 'variants'
								? unknown
								: K2 extends keyof CSS_1
								? CSS_1[K2]
								: unknown;
						};
		}
	) => import('@stitches/react/types/styled-component').StyledComponent<
		Type,
		import('@stitches/react/types/styled-component').StyledComponentProps<Composers>,
		{
			xs: '(max-width: 375px)';
			sm: '(max-width: 500px)';
			md: '(max-width: 768px)';
			lg: '(max-width: 1200px)';
			xl: '(max-width: 1440px)';
		},
		import('@stitches/react/types/css-util').CSS<
			{
				xs: '(max-width: 375px)';
				sm: '(max-width: 500px)';
				md: '(max-width: 768px)';
				lg: '(max-width: 1200px)';
				xl: '(max-width: 1440px)';
			},
			{
				fonts: {
					displayHeadline: string;
					interfaceHeadline: string;
					displayBody: string;
					interfaceBody: string;
					mono: string;
				};
				colors: {
					passionFruit000: string;
					passionFruit100: string;
					passionFruit200: string;
					passionFruit300: string;
					passionFruit400: string;
					passionFruit500: string;
					passionFruit600: string;
					passionFruit700: string;
					passionFruit800: string;
					passionFruit900: string;
					passionFruit1000: string;
					pomegranate000: string;
					pomegranate100: string;
					pomegranate200: string;
					pomegranate300: string;
					pomegranate400: string;
					pomegranate500: string;
					pomegranate600: string;
					pomegranate700: string;
					pomegranate800: string;
					pomegranate900: string;
					pomegranate1000: string;
					blackberry000: string;
					blackberry100: string;
					blackberry200: string;
					blackberry300: string;
					blackberry400: string;
					blackberry500: string;
					blackberry600: string;
					blackberry700: string;
					blackberry800: string;
					blackberry900: string;
					blackberry1000: string;
					pineapple000: string;
					pineapple100: string;
					pineapple200: string;
					pineapple300: string;
					pineapple400: string;
					pineapple500: string;
					pineapple600: string;
					pineapple700: string;
					pineapple800: string;
					pineapple900: string;
					pineapple1000: string;
					kale000: string;
					kale100: string;
					kale200: string;
					kale300: string;
					kale400: string;
					kale500: string;
					kale600: string;
					kale700: string;
					kale800: string;
					kale900: string;
					kale1000: string;
					accent000: string;
					accent100: string;
					accent200: string;
					accent300: string;
					accent400: string;
					accent500: string;
					accent600: string;
					accent700: string;
					accent800: string;
					accent900: string;
					accent1000: string;
				};
				space: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
					6: string;
					7: string;
					8: string;
					9: string;
					10: string;
				};
				fontSizes: {
					displayBase: string;
					displayLarge: string;
					displaySmall: string;
					displayExtraSmall: string;
					displayMega: string;
					displayH1: string;
					displayH2: string;
					displayH3: string;
					displayH4: string;
					displayH5: string;
					displayH6: string;
					interfaceBase: string;
					interfaceLarge: string;
					interfaceSmall: string;
					interfaceExtraSmall: string;
					interfaceH1: string;
					interfaceH2: string;
					interfaceH3: string;
					interfaceH4: string;
					interfaceH5: string;
					interfaceH6: string;
				};
				lineHeights: {
					displayBody: string;
					displayHeadline: string;
					interfaceBody: string;
					interfaceHeadline: string;
				};
				radii: unknown;
				letterSpacings: unknown;
				borderStyles: unknown;
				borderWidths: unknown;
				zIndices: unknown;
				transitions: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
				};
				shadows: {
					base: string;
				};
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{}
		>
	>,
	css: <
		Composers extends (
			| string
			| import('@stitches/react/types/util').Function
			| import('react').ExoticComponent<any>
			| import('react').JSXElementConstructor<any>
			| {
					[name: string]: unknown;
			  }
		)[],
		CSS_1 = import('@stitches/react/types/css-util').CSS<
			{
				xs: '(max-width: 375px)';
				sm: '(max-width: 500px)';
				md: '(max-width: 768px)';
				lg: '(max-width: 1200px)';
				xl: '(max-width: 1440px)';
			},
			{
				fonts: {
					displayHeadline: string;
					interfaceHeadline: string;
					displayBody: string;
					interfaceBody: string;
					mono: string;
				};
				colors: {
					passionFruit000: string;
					passionFruit100: string;
					passionFruit200: string;
					passionFruit300: string;
					passionFruit400: string;
					passionFruit500: string;
					passionFruit600: string;
					passionFruit700: string;
					passionFruit800: string;
					passionFruit900: string;
					passionFruit1000: string;
					pomegranate000: string;
					pomegranate100: string;
					pomegranate200: string;
					pomegranate300: string;
					pomegranate400: string;
					pomegranate500: string;
					pomegranate600: string;
					pomegranate700: string;
					pomegranate800: string;
					pomegranate900: string;
					pomegranate1000: string;
					blackberry000: string;
					blackberry100: string;
					blackberry200: string;
					blackberry300: string;
					blackberry400: string;
					blackberry500: string;
					blackberry600: string;
					blackberry700: string;
					blackberry800: string;
					blackberry900: string;
					blackberry1000: string;
					pineapple000: string;
					pineapple100: string;
					pineapple200: string;
					pineapple300: string;
					pineapple400: string;
					pineapple500: string;
					pineapple600: string;
					pineapple700: string;
					pineapple800: string;
					pineapple900: string;
					pineapple1000: string;
					kale000: string;
					kale100: string;
					kale200: string;
					kale300: string;
					kale400: string;
					kale500: string;
					kale600: string;
					kale700: string;
					kale800: string;
					kale900: string;
					kale1000: string;
					accent000: string;
					accent100: string;
					accent200: string;
					accent300: string;
					accent400: string;
					accent500: string;
					accent600: string;
					accent700: string;
					accent800: string;
					accent900: string;
					accent1000: string;
				};
				space: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
					6: string;
					7: string;
					8: string;
					9: string;
					10: string;
				};
				fontSizes: {
					displayBase: string;
					displayLarge: string;
					displaySmall: string;
					displayExtraSmall: string;
					displayMega: string;
					displayH1: string;
					displayH2: string;
					displayH3: string;
					displayH4: string;
					displayH5: string;
					displayH6: string;
					interfaceBase: string;
					interfaceLarge: string;
					interfaceSmall: string;
					interfaceExtraSmall: string;
					interfaceH1: string;
					interfaceH2: string;
					interfaceH3: string;
					interfaceH4: string;
					interfaceH5: string;
					interfaceH6: string;
				};
				lineHeights: {
					displayBody: string;
					displayHeadline: string;
					interfaceBody: string;
					interfaceHeadline: string;
				};
				radii: unknown;
				letterSpacings: unknown;
				borderStyles: unknown;
				borderWidths: unknown;
				zIndices: unknown;
				transitions: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
				};
				shadows: {
					base: string;
				};
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{}
		>
	>(
		...composers: {
			[K in keyof Composers]: Composers[K] extends
				| string
				| import('@stitches/react/types/util').Function
				| import('react').ExoticComponent<any>
				| import('react').JSXElementConstructor<any>
				? Composers[K]
				: import('@stitches/react/types/stitches').RemoveIndex<CSS_1> & {
						variants?:
							| {
									[
										x: string
									]: {
										[
											x: string
										]: CSS_1;
										[
											x: number
										]: CSS_1;
									};
							  }
							| undefined;
						compoundVariants?:
							| (('variants' extends keyof Composers[K]
									? {
											[Name in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name]
												  >
												| undefined;
									  }
									: import('@stitches/react/types/util').WideObject) & {
									css: CSS_1;
							  })[]
							| undefined;
						defaultVariants?:
							| ('variants' extends keyof Composers[K]
									? {
											[Name_1 in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name_1]
												  >
												| undefined;
									  }
									: import('@stitches/react/types/util').WideObject)
							| undefined;
				  } & CSS_1 & {
							[K2 in keyof Composers[K]]: K2 extends
								| 'compoundVariants'
								| 'defaultVariants'
								| 'variants'
								? unknown
								: K2 extends keyof CSS_1
								? CSS_1[K2]
								: unknown;
						};
		}
	) => import('@stitches/react/types/styled-component').CssComponent<
		import('@stitches/react/types/styled-component').StyledComponentType<Composers>,
		import('@stitches/react/types/styled-component').StyledComponentProps<Composers>,
		{
			xs: '(max-width: 375px)';
			sm: '(max-width: 500px)';
			md: '(max-width: 768px)';
			lg: '(max-width: 1200px)';
			xl: '(max-width: 1440px)';
		},
		CSS_1
	>,
	theme: string & {
		className: string;
		selector: string;
	} & {
		fonts: {
			displayHeadline: import('@stitches/react/types/theme').Token<
				'displayHeadline',
				string,
				'fonts',
				''
			>;
			interfaceHeadline: import('@stitches/react/types/theme').Token<
				'interfaceHeadline',
				string,
				'fonts',
				''
			>;
			displayBody: import('@stitches/react/types/theme').Token<
				'displayBody',
				string,
				'fonts',
				''
			>;
			interfaceBody: import('@stitches/react/types/theme').Token<
				'interfaceBody',
				string,
				'fonts',
				''
			>;
			mono: import('@stitches/react/types/theme').Token<
				'mono',
				string,
				'fonts',
				''
			>;
		};
		colors: {
			passionFruit000: import('@stitches/react/types/theme').Token<
				'passionFruit000',
				string,
				'colors',
				''
			>;
			passionFruit100: import('@stitches/react/types/theme').Token<
				'passionFruit100',
				string,
				'colors',
				''
			>;
			passionFruit200: import('@stitches/react/types/theme').Token<
				'passionFruit200',
				string,
				'colors',
				''
			>;
			passionFruit300: import('@stitches/react/types/theme').Token<
				'passionFruit300',
				string,
				'colors',
				''
			>;
			passionFruit400: import('@stitches/react/types/theme').Token<
				'passionFruit400',
				string,
				'colors',
				''
			>;
			passionFruit500: import('@stitches/react/types/theme').Token<
				'passionFruit500',
				string,
				'colors',
				''
			>;
			passionFruit600: import('@stitches/react/types/theme').Token<
				'passionFruit600',
				string,
				'colors',
				''
			>;
			passionFruit700: import('@stitches/react/types/theme').Token<
				'passionFruit700',
				string,
				'colors',
				''
			>;
			passionFruit800: import('@stitches/react/types/theme').Token<
				'passionFruit800',
				string,
				'colors',
				''
			>;
			passionFruit900: import('@stitches/react/types/theme').Token<
				'passionFruit900',
				string,
				'colors',
				''
			>;
			passionFruit1000: import('@stitches/react/types/theme').Token<
				'passionFruit1000',
				string,
				'colors',
				''
			>;
			pomegranate000: import('@stitches/react/types/theme').Token<
				'pomegranate000',
				string,
				'colors',
				''
			>;
			pomegranate100: import('@stitches/react/types/theme').Token<
				'pomegranate100',
				string,
				'colors',
				''
			>;
			pomegranate200: import('@stitches/react/types/theme').Token<
				'pomegranate200',
				string,
				'colors',
				''
			>;
			pomegranate300: import('@stitches/react/types/theme').Token<
				'pomegranate300',
				string,
				'colors',
				''
			>;
			pomegranate400: import('@stitches/react/types/theme').Token<
				'pomegranate400',
				string,
				'colors',
				''
			>;
			pomegranate500: import('@stitches/react/types/theme').Token<
				'pomegranate500',
				string,
				'colors',
				''
			>;
			pomegranate600: import('@stitches/react/types/theme').Token<
				'pomegranate600',
				string,
				'colors',
				''
			>;
			pomegranate700: import('@stitches/react/types/theme').Token<
				'pomegranate700',
				string,
				'colors',
				''
			>;
			pomegranate800: import('@stitches/react/types/theme').Token<
				'pomegranate800',
				string,
				'colors',
				''
			>;
			pomegranate900: import('@stitches/react/types/theme').Token<
				'pomegranate900',
				string,
				'colors',
				''
			>;
			pomegranate1000: import('@stitches/react/types/theme').Token<
				'pomegranate1000',
				string,
				'colors',
				''
			>;
			blackberry000: import('@stitches/react/types/theme').Token<
				'blackberry000',
				string,
				'colors',
				''
			>;
			blackberry100: import('@stitches/react/types/theme').Token<
				'blackberry100',
				string,
				'colors',
				''
			>;
			blackberry200: import('@stitches/react/types/theme').Token<
				'blackberry200',
				string,
				'colors',
				''
			>;
			blackberry300: import('@stitches/react/types/theme').Token<
				'blackberry300',
				string,
				'colors',
				''
			>;
			blackberry400: import('@stitches/react/types/theme').Token<
				'blackberry400',
				string,
				'colors',
				''
			>;
			blackberry500: import('@stitches/react/types/theme').Token<
				'blackberry500',
				string,
				'colors',
				''
			>;
			blackberry600: import('@stitches/react/types/theme').Token<
				'blackberry600',
				string,
				'colors',
				''
			>;
			blackberry700: import('@stitches/react/types/theme').Token<
				'blackberry700',
				string,
				'colors',
				''
			>;
			blackberry800: import('@stitches/react/types/theme').Token<
				'blackberry800',
				string,
				'colors',
				''
			>;
			blackberry900: import('@stitches/react/types/theme').Token<
				'blackberry900',
				string,
				'colors',
				''
			>;
			blackberry1000: import('@stitches/react/types/theme').Token<
				'blackberry1000',
				string,
				'colors',
				''
			>;
			pineapple000: import('@stitches/react/types/theme').Token<
				'pineapple000',
				string,
				'colors',
				''
			>;
			pineapple100: import('@stitches/react/types/theme').Token<
				'pineapple100',
				string,
				'colors',
				''
			>;
			pineapple200: import('@stitches/react/types/theme').Token<
				'pineapple200',
				string,
				'colors',
				''
			>;
			pineapple300: import('@stitches/react/types/theme').Token<
				'pineapple300',
				string,
				'colors',
				''
			>;
			pineapple400: import('@stitches/react/types/theme').Token<
				'pineapple400',
				string,
				'colors',
				''
			>;
			pineapple500: import('@stitches/react/types/theme').Token<
				'pineapple500',
				string,
				'colors',
				''
			>;
			pineapple600: import('@stitches/react/types/theme').Token<
				'pineapple600',
				string,
				'colors',
				''
			>;
			pineapple700: import('@stitches/react/types/theme').Token<
				'pineapple700',
				string,
				'colors',
				''
			>;
			pineapple800: import('@stitches/react/types/theme').Token<
				'pineapple800',
				string,
				'colors',
				''
			>;
			pineapple900: import('@stitches/react/types/theme').Token<
				'pineapple900',
				string,
				'colors',
				''
			>;
			pineapple1000: import('@stitches/react/types/theme').Token<
				'pineapple1000',
				string,
				'colors',
				''
			>;
			kale000: import('@stitches/react/types/theme').Token<
				'kale000',
				string,
				'colors',
				''
			>;
			kale100: import('@stitches/react/types/theme').Token<
				'kale100',
				string,
				'colors',
				''
			>;
			kale200: import('@stitches/react/types/theme').Token<
				'kale200',
				string,
				'colors',
				''
			>;
			kale300: import('@stitches/react/types/theme').Token<
				'kale300',
				string,
				'colors',
				''
			>;
			kale400: import('@stitches/react/types/theme').Token<
				'kale400',
				string,
				'colors',
				''
			>;
			kale500: import('@stitches/react/types/theme').Token<
				'kale500',
				string,
				'colors',
				''
			>;
			kale600: import('@stitches/react/types/theme').Token<
				'kale600',
				string,
				'colors',
				''
			>;
			kale700: import('@stitches/react/types/theme').Token<
				'kale700',
				string,
				'colors',
				''
			>;
			kale800: import('@stitches/react/types/theme').Token<
				'kale800',
				string,
				'colors',
				''
			>;
			kale900: import('@stitches/react/types/theme').Token<
				'kale900',
				string,
				'colors',
				''
			>;
			kale1000: import('@stitches/react/types/theme').Token<
				'kale1000',
				string,
				'colors',
				''
			>;
			accent000: import('@stitches/react/types/theme').Token<
				'accent000',
				string,
				'colors',
				''
			>;
			accent100: import('@stitches/react/types/theme').Token<
				'accent100',
				string,
				'colors',
				''
			>;
			accent200: import('@stitches/react/types/theme').Token<
				'accent200',
				string,
				'colors',
				''
			>;
			accent300: import('@stitches/react/types/theme').Token<
				'accent300',
				string,
				'colors',
				''
			>;
			accent400: import('@stitches/react/types/theme').Token<
				'accent400',
				string,
				'colors',
				''
			>;
			accent500: import('@stitches/react/types/theme').Token<
				'accent500',
				string,
				'colors',
				''
			>;
			accent600: import('@stitches/react/types/theme').Token<
				'accent600',
				string,
				'colors',
				''
			>;
			accent700: import('@stitches/react/types/theme').Token<
				'accent700',
				string,
				'colors',
				''
			>;
			accent800: import('@stitches/react/types/theme').Token<
				'accent800',
				string,
				'colors',
				''
			>;
			accent900: import('@stitches/react/types/theme').Token<
				'accent900',
				string,
				'colors',
				''
			>;
			accent1000: import('@stitches/react/types/theme').Token<
				'accent1000',
				string,
				'colors',
				''
			>;
		};
		space: {
			1: import('@stitches/react/types/theme').Token<
				'1',
				string,
				'space',
				''
			>;
			2: import('@stitches/react/types/theme').Token<
				'2',
				string,
				'space',
				''
			>;
			3: import('@stitches/react/types/theme').Token<
				'3',
				string,
				'space',
				''
			>;
			4: import('@stitches/react/types/theme').Token<
				'4',
				string,
				'space',
				''
			>;
			5: import('@stitches/react/types/theme').Token<
				'5',
				string,
				'space',
				''
			>;
			6: import('@stitches/react/types/theme').Token<
				'6',
				string,
				'space',
				''
			>;
			7: import('@stitches/react/types/theme').Token<
				'7',
				string,
				'space',
				''
			>;
			8: import('@stitches/react/types/theme').Token<
				'8',
				string,
				'space',
				''
			>;
			9: import('@stitches/react/types/theme').Token<
				'9',
				string,
				'space',
				''
			>;
			10: import('@stitches/react/types/theme').Token<
				'10',
				string,
				'space',
				''
			>;
		};
		fontSizes: {
			displayBase: import('@stitches/react/types/theme').Token<
				'displayBase',
				string,
				'fontSizes',
				''
			>;
			displayLarge: import('@stitches/react/types/theme').Token<
				'displayLarge',
				string,
				'fontSizes',
				''
			>;
			displaySmall: import('@stitches/react/types/theme').Token<
				'displaySmall',
				string,
				'fontSizes',
				''
			>;
			displayExtraSmall: import('@stitches/react/types/theme').Token<
				'displayExtraSmall',
				string,
				'fontSizes',
				''
			>;
			displayMega: import('@stitches/react/types/theme').Token<
				'displayMega',
				string,
				'fontSizes',
				''
			>;
			displayH1: import('@stitches/react/types/theme').Token<
				'displayH1',
				string,
				'fontSizes',
				''
			>;
			displayH2: import('@stitches/react/types/theme').Token<
				'displayH2',
				string,
				'fontSizes',
				''
			>;
			displayH3: import('@stitches/react/types/theme').Token<
				'displayH3',
				string,
				'fontSizes',
				''
			>;
			displayH4: import('@stitches/react/types/theme').Token<
				'displayH4',
				string,
				'fontSizes',
				''
			>;
			displayH5: import('@stitches/react/types/theme').Token<
				'displayH5',
				string,
				'fontSizes',
				''
			>;
			displayH6: import('@stitches/react/types/theme').Token<
				'displayH6',
				string,
				'fontSizes',
				''
			>;
			interfaceBase: import('@stitches/react/types/theme').Token<
				'interfaceBase',
				string,
				'fontSizes',
				''
			>;
			interfaceLarge: import('@stitches/react/types/theme').Token<
				'interfaceLarge',
				string,
				'fontSizes',
				''
			>;
			interfaceSmall: import('@stitches/react/types/theme').Token<
				'interfaceSmall',
				string,
				'fontSizes',
				''
			>;
			interfaceExtraSmall: import('@stitches/react/types/theme').Token<
				'interfaceExtraSmall',
				string,
				'fontSizes',
				''
			>;
			interfaceH1: import('@stitches/react/types/theme').Token<
				'interfaceH1',
				string,
				'fontSizes',
				''
			>;
			interfaceH2: import('@stitches/react/types/theme').Token<
				'interfaceH2',
				string,
				'fontSizes',
				''
			>;
			interfaceH3: import('@stitches/react/types/theme').Token<
				'interfaceH3',
				string,
				'fontSizes',
				''
			>;
			interfaceH4: import('@stitches/react/types/theme').Token<
				'interfaceH4',
				string,
				'fontSizes',
				''
			>;
			interfaceH5: import('@stitches/react/types/theme').Token<
				'interfaceH5',
				string,
				'fontSizes',
				''
			>;
			interfaceH6: import('@stitches/react/types/theme').Token<
				'interfaceH6',
				string,
				'fontSizes',
				''
			>;
		};
		lineHeights: {
			displayBody: import('@stitches/react/types/theme').Token<
				'displayBody',
				string,
				'lineHeights',
				''
			>;
			displayHeadline: import('@stitches/react/types/theme').Token<
				'displayHeadline',
				string,
				'lineHeights',
				''
			>;
			interfaceBody: import('@stitches/react/types/theme').Token<
				'interfaceBody',
				string,
				'lineHeights',
				''
			>;
			interfaceHeadline: import('@stitches/react/types/theme').Token<
				'interfaceHeadline',
				string,
				'lineHeights',
				''
			>;
		};
		radii: {};
		letterSpacings: {};
		borderStyles: {};
		borderWidths: {};
		zIndices: {};
		transitions: {
			1: import('@stitches/react/types/theme').Token<
				'1',
				string,
				'transitions',
				''
			>;
			2: import('@stitches/react/types/theme').Token<
				'2',
				string,
				'transitions',
				''
			>;
			3: import('@stitches/react/types/theme').Token<
				'3',
				string,
				'transitions',
				''
			>;
			4: import('@stitches/react/types/theme').Token<
				'4',
				string,
				'transitions',
				''
			>;
			5: import('@stitches/react/types/theme').Token<
				'5',
				string,
				'transitions',
				''
			>;
		};
		shadows: {
			base: import('@stitches/react/types/theme').Token<
				'base',
				string,
				'shadows',
				''
			>;
		};
	},
	createTheme: <
		Argument0 extends
			| string
			| ({
					fonts?:
						| {
								displayHeadline?:
									| string
									| number
									| boolean
									| undefined;
								interfaceHeadline?:
									| string
									| number
									| boolean
									| undefined;
								displayBody?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBody?:
									| string
									| number
									| boolean
									| undefined;
								mono?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					colors?:
						| {
								passionFruit000?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit100?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit200?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit300?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit400?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit500?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit600?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit700?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit800?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit900?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit1000?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate000?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate100?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate200?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate300?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate400?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate500?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate600?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate700?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate800?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate900?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate1000?:
									| string
									| number
									| boolean
									| undefined;
								blackberry000?:
									| string
									| number
									| boolean
									| undefined;
								blackberry100?:
									| string
									| number
									| boolean
									| undefined;
								blackberry200?:
									| string
									| number
									| boolean
									| undefined;
								blackberry300?:
									| string
									| number
									| boolean
									| undefined;
								blackberry400?:
									| string
									| number
									| boolean
									| undefined;
								blackberry500?:
									| string
									| number
									| boolean
									| undefined;
								blackberry600?:
									| string
									| number
									| boolean
									| undefined;
								blackberry700?:
									| string
									| number
									| boolean
									| undefined;
								blackberry800?:
									| string
									| number
									| boolean
									| undefined;
								blackberry900?:
									| string
									| number
									| boolean
									| undefined;
								blackberry1000?:
									| string
									| number
									| boolean
									| undefined;
								pineapple000?:
									| string
									| number
									| boolean
									| undefined;
								pineapple100?:
									| string
									| number
									| boolean
									| undefined;
								pineapple200?:
									| string
									| number
									| boolean
									| undefined;
								pineapple300?:
									| string
									| number
									| boolean
									| undefined;
								pineapple400?:
									| string
									| number
									| boolean
									| undefined;
								pineapple500?:
									| string
									| number
									| boolean
									| undefined;
								pineapple600?:
									| string
									| number
									| boolean
									| undefined;
								pineapple700?:
									| string
									| number
									| boolean
									| undefined;
								pineapple800?:
									| string
									| number
									| boolean
									| undefined;
								pineapple900?:
									| string
									| number
									| boolean
									| undefined;
								pineapple1000?:
									| string
									| number
									| boolean
									| undefined;
								kale000?:
									| string
									| number
									| boolean
									| undefined;
								kale100?:
									| string
									| number
									| boolean
									| undefined;
								kale200?:
									| string
									| number
									| boolean
									| undefined;
								kale300?:
									| string
									| number
									| boolean
									| undefined;
								kale400?:
									| string
									| number
									| boolean
									| undefined;
								kale500?:
									| string
									| number
									| boolean
									| undefined;
								kale600?:
									| string
									| number
									| boolean
									| undefined;
								kale700?:
									| string
									| number
									| boolean
									| undefined;
								kale800?:
									| string
									| number
									| boolean
									| undefined;
								kale900?:
									| string
									| number
									| boolean
									| undefined;
								kale1000?:
									| string
									| number
									| boolean
									| undefined;
								accent000?:
									| string
									| number
									| boolean
									| undefined;
								accent100?:
									| string
									| number
									| boolean
									| undefined;
								accent200?:
									| string
									| number
									| boolean
									| undefined;
								accent300?:
									| string
									| number
									| boolean
									| undefined;
								accent400?:
									| string
									| number
									| boolean
									| undefined;
								accent500?:
									| string
									| number
									| boolean
									| undefined;
								accent600?:
									| string
									| number
									| boolean
									| undefined;
								accent700?:
									| string
									| number
									| boolean
									| undefined;
								accent800?:
									| string
									| number
									| boolean
									| undefined;
								accent900?:
									| string
									| number
									| boolean
									| undefined;
								accent1000?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					space?:
						| {
								1?:
									| string
									| number
									| boolean
									| undefined;
								2?:
									| string
									| number
									| boolean
									| undefined;
								3?:
									| string
									| number
									| boolean
									| undefined;
								4?:
									| string
									| number
									| boolean
									| undefined;
								5?:
									| string
									| number
									| boolean
									| undefined;
								6?:
									| string
									| number
									| boolean
									| undefined;
								7?:
									| string
									| number
									| boolean
									| undefined;
								8?:
									| string
									| number
									| boolean
									| undefined;
								9?:
									| string
									| number
									| boolean
									| undefined;
								10?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					fontSizes?:
						| {
								displayBase?:
									| string
									| number
									| boolean
									| undefined;
								displayLarge?:
									| string
									| number
									| boolean
									| undefined;
								displaySmall?:
									| string
									| number
									| boolean
									| undefined;
								displayExtraSmall?:
									| string
									| number
									| boolean
									| undefined;
								displayMega?:
									| string
									| number
									| boolean
									| undefined;
								displayH1?:
									| string
									| number
									| boolean
									| undefined;
								displayH2?:
									| string
									| number
									| boolean
									| undefined;
								displayH3?:
									| string
									| number
									| boolean
									| undefined;
								displayH4?:
									| string
									| number
									| boolean
									| undefined;
								displayH5?:
									| string
									| number
									| boolean
									| undefined;
								displayH6?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBase?:
									| string
									| number
									| boolean
									| undefined;
								interfaceLarge?:
									| string
									| number
									| boolean
									| undefined;
								interfaceSmall?:
									| string
									| number
									| boolean
									| undefined;
								interfaceExtraSmall?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH1?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH2?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH3?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH4?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH5?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH6?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					lineHeights?:
						| {
								displayBody?:
									| string
									| number
									| boolean
									| undefined;
								displayHeadline?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBody?:
									| string
									| number
									| boolean
									| undefined;
								interfaceHeadline?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					radii?: {} | undefined;
					letterSpacings?: {} | undefined;
					borderStyles?: {} | undefined;
					borderWidths?: {} | undefined;
					zIndices?: {} | undefined;
					transitions?:
						| {
								1?:
									| string
									| number
									| boolean
									| undefined;
								2?:
									| string
									| number
									| boolean
									| undefined;
								3?:
									| string
									| number
									| boolean
									| undefined;
								4?:
									| string
									| number
									| boolean
									| undefined;
								5?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					shadows?:
						| {
								base?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
			  } & {
					[x: string]: {
						[x: string]:
							| string
							| number
							| boolean;
						[x: number]:
							| string
							| number
							| boolean;
					};
			  }),
		Argument1 extends
			| string
			| ({
					fonts?:
						| {
								displayHeadline?:
									| string
									| number
									| boolean
									| undefined;
								interfaceHeadline?:
									| string
									| number
									| boolean
									| undefined;
								displayBody?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBody?:
									| string
									| number
									| boolean
									| undefined;
								mono?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					colors?:
						| {
								passionFruit000?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit100?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit200?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit300?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit400?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit500?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit600?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit700?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit800?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit900?:
									| string
									| number
									| boolean
									| undefined;
								passionFruit1000?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate000?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate100?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate200?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate300?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate400?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate500?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate600?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate700?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate800?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate900?:
									| string
									| number
									| boolean
									| undefined;
								pomegranate1000?:
									| string
									| number
									| boolean
									| undefined;
								blackberry000?:
									| string
									| number
									| boolean
									| undefined;
								blackberry100?:
									| string
									| number
									| boolean
									| undefined;
								blackberry200?:
									| string
									| number
									| boolean
									| undefined;
								blackberry300?:
									| string
									| number
									| boolean
									| undefined;
								blackberry400?:
									| string
									| number
									| boolean
									| undefined;
								blackberry500?:
									| string
									| number
									| boolean
									| undefined;
								blackberry600?:
									| string
									| number
									| boolean
									| undefined;
								blackberry700?:
									| string
									| number
									| boolean
									| undefined;
								blackberry800?:
									| string
									| number
									| boolean
									| undefined;
								blackberry900?:
									| string
									| number
									| boolean
									| undefined;
								blackberry1000?:
									| string
									| number
									| boolean
									| undefined;
								pineapple000?:
									| string
									| number
									| boolean
									| undefined;
								pineapple100?:
									| string
									| number
									| boolean
									| undefined;
								pineapple200?:
									| string
									| number
									| boolean
									| undefined;
								pineapple300?:
									| string
									| number
									| boolean
									| undefined;
								pineapple400?:
									| string
									| number
									| boolean
									| undefined;
								pineapple500?:
									| string
									| number
									| boolean
									| undefined;
								pineapple600?:
									| string
									| number
									| boolean
									| undefined;
								pineapple700?:
									| string
									| number
									| boolean
									| undefined;
								pineapple800?:
									| string
									| number
									| boolean
									| undefined;
								pineapple900?:
									| string
									| number
									| boolean
									| undefined;
								pineapple1000?:
									| string
									| number
									| boolean
									| undefined;
								kale000?:
									| string
									| number
									| boolean
									| undefined;
								kale100?:
									| string
									| number
									| boolean
									| undefined;
								kale200?:
									| string
									| number
									| boolean
									| undefined;
								kale300?:
									| string
									| number
									| boolean
									| undefined;
								kale400?:
									| string
									| number
									| boolean
									| undefined;
								kale500?:
									| string
									| number
									| boolean
									| undefined;
								kale600?:
									| string
									| number
									| boolean
									| undefined;
								kale700?:
									| string
									| number
									| boolean
									| undefined;
								kale800?:
									| string
									| number
									| boolean
									| undefined;
								kale900?:
									| string
									| number
									| boolean
									| undefined;
								kale1000?:
									| string
									| number
									| boolean
									| undefined;
								accent000?:
									| string
									| number
									| boolean
									| undefined;
								accent100?:
									| string
									| number
									| boolean
									| undefined;
								accent200?:
									| string
									| number
									| boolean
									| undefined;
								accent300?:
									| string
									| number
									| boolean
									| undefined;
								accent400?:
									| string
									| number
									| boolean
									| undefined;
								accent500?:
									| string
									| number
									| boolean
									| undefined;
								accent600?:
									| string
									| number
									| boolean
									| undefined;
								accent700?:
									| string
									| number
									| boolean
									| undefined;
								accent800?:
									| string
									| number
									| boolean
									| undefined;
								accent900?:
									| string
									| number
									| boolean
									| undefined;
								accent1000?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					space?:
						| {
								1?:
									| string
									| number
									| boolean
									| undefined;
								2?:
									| string
									| number
									| boolean
									| undefined;
								3?:
									| string
									| number
									| boolean
									| undefined;
								4?:
									| string
									| number
									| boolean
									| undefined;
								5?:
									| string
									| number
									| boolean
									| undefined;
								6?:
									| string
									| number
									| boolean
									| undefined;
								7?:
									| string
									| number
									| boolean
									| undefined;
								8?:
									| string
									| number
									| boolean
									| undefined;
								9?:
									| string
									| number
									| boolean
									| undefined;
								10?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					fontSizes?:
						| {
								displayBase?:
									| string
									| number
									| boolean
									| undefined;
								displayLarge?:
									| string
									| number
									| boolean
									| undefined;
								displaySmall?:
									| string
									| number
									| boolean
									| undefined;
								displayExtraSmall?:
									| string
									| number
									| boolean
									| undefined;
								displayMega?:
									| string
									| number
									| boolean
									| undefined;
								displayH1?:
									| string
									| number
									| boolean
									| undefined;
								displayH2?:
									| string
									| number
									| boolean
									| undefined;
								displayH3?:
									| string
									| number
									| boolean
									| undefined;
								displayH4?:
									| string
									| number
									| boolean
									| undefined;
								displayH5?:
									| string
									| number
									| boolean
									| undefined;
								displayH6?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBase?:
									| string
									| number
									| boolean
									| undefined;
								interfaceLarge?:
									| string
									| number
									| boolean
									| undefined;
								interfaceSmall?:
									| string
									| number
									| boolean
									| undefined;
								interfaceExtraSmall?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH1?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH2?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH3?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH4?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH5?:
									| string
									| number
									| boolean
									| undefined;
								interfaceH6?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					lineHeights?:
						| {
								displayBody?:
									| string
									| number
									| boolean
									| undefined;
								displayHeadline?:
									| string
									| number
									| boolean
									| undefined;
								interfaceBody?:
									| string
									| number
									| boolean
									| undefined;
								interfaceHeadline?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					radii?: {} | undefined;
					letterSpacings?: {} | undefined;
					borderStyles?: {} | undefined;
					borderWidths?: {} | undefined;
					zIndices?: {} | undefined;
					transitions?:
						| {
								1?:
									| string
									| number
									| boolean
									| undefined;
								2?:
									| string
									| number
									| boolean
									| undefined;
								3?:
									| string
									| number
									| boolean
									| undefined;
								4?:
									| string
									| number
									| boolean
									| undefined;
								5?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
					shadows?:
						| {
								base?:
									| string
									| number
									| boolean
									| undefined;
						  }
						| undefined;
			  } & {
					[x: string]: {
						[x: string]:
							| string
							| number
							| boolean;
						[x: number]:
							| string
							| number
							| boolean;
					};
			  })
	>(
		nameOrScalesArg0: Argument0,
		nameOrScalesArg1?: Argument1 | undefined
	) => string & {
		className: string;
		selector: string;
	} & (Argument0 extends string
			? import('@stitches/react/types/stitches').ThemeTokens<
					Argument1,
					''
			  >
			: import('@stitches/react/types/stitches').ThemeTokens<
					Argument0,
					''
			  >),
	getCssText: () => string,
	globalCss: <
		Styles extends {
			[K: string]: any;
		}
	>(
		...styles: ({
			'@import'?: unknown;
			'@font-face'?: unknown;
		} & {
			[K in keyof Styles]: K extends '@import'
				? string | string[]
				: K extends '@font-face'
				?
						| import('@stitches/react/types/css').AtRule.FontFace
						| import('@stitches/react/types/css').AtRule.FontFace[]
				: K extends `@keyframes ${string}`
				? {
						[
							x: string
						]: import('@stitches/react/types/css-util').CSS<
							{
								xs: '(max-width: 375px)';
								sm: '(max-width: 500px)';
								md: '(max-width: 768px)';
								lg: '(max-width: 1200px)';
								xl: '(max-width: 1440px)';
							},
							{
								fonts: {
									displayHeadline: string;
									interfaceHeadline: string;
									displayBody: string;
									interfaceBody: string;
									mono: string;
								};
								colors: {
									passionFruit000: string;
									passionFruit100: string;
									passionFruit200: string;
									passionFruit300: string;
									passionFruit400: string;
									passionFruit500: string;
									passionFruit600: string;
									passionFruit700: string;
									passionFruit800: string;
									passionFruit900: string;
									passionFruit1000: string;
									pomegranate000: string;
									pomegranate100: string;
									pomegranate200: string;
									pomegranate300: string;
									pomegranate400: string;
									pomegranate500: string;
									pomegranate600: string;
									pomegranate700: string;
									pomegranate800: string;
									pomegranate900: string;
									pomegranate1000: string;
									blackberry000: string;
									blackberry100: string;
									blackberry200: string;
									blackberry300: string;
									blackberry400: string;
									blackberry500: string;
									blackberry600: string;
									blackberry700: string;
									blackberry800: string;
									blackberry900: string;
									blackberry1000: string;
									pineapple000: string;
									pineapple100: string;
									pineapple200: string;
									pineapple300: string;
									pineapple400: string;
									pineapple500: string;
									pineapple600: string;
									pineapple700: string;
									pineapple800: string;
									pineapple900: string;
									pineapple1000: string;
									kale000: string;
									kale100: string;
									kale200: string;
									kale300: string;
									kale400: string;
									kale500: string;
									kale600: string;
									kale700: string;
									kale800: string;
									kale900: string;
									kale1000: string;
									accent000: string;
									accent100: string;
									accent200: string;
									accent300: string;
									accent400: string;
									accent500: string;
									accent600: string;
									accent700: string;
									accent800: string;
									accent900: string;
									accent1000: string;
								};
								space: {
									1: string;
									2: string;
									3: string;
									4: string;
									5: string;
									6: string;
									7: string;
									8: string;
									9: string;
									10: string;
								};
								fontSizes: {
									displayBase: string;
									displayLarge: string;
									displaySmall: string;
									displayExtraSmall: string;
									displayMega: string;
									displayH1: string;
									displayH2: string;
									displayH3: string;
									displayH4: string;
									displayH5: string;
									displayH6: string;
									interfaceBase: string;
									interfaceLarge: string;
									interfaceSmall: string;
									interfaceExtraSmall: string;
									interfaceH1: string;
									interfaceH2: string;
									interfaceH3: string;
									interfaceH4: string;
									interfaceH5: string;
									interfaceH6: string;
								};
								lineHeights: {
									displayBody: string;
									displayHeadline: string;
									interfaceBody: string;
									interfaceHeadline: string;
								};
								radii: unknown;
								letterSpacings: unknown;
								borderStyles: unknown;
								borderWidths: unknown;
								zIndices: unknown;
								transitions: {
									1: string;
									2: string;
									3: string;
									4: string;
									5: string;
								};
								shadows: {
									base: string;
								};
							},
							import('@stitches/react/types/config').DefaultThemeMap,
							{}
						>;
				  }
				: K extends `@property ${string}`
				? import('@stitches/react/types/css').AtRule.Property
				: import('@stitches/react/types/css-util').CSS<
						{
							xs: '(max-width: 375px)';
							sm: '(max-width: 500px)';
							md: '(max-width: 768px)';
							lg: '(max-width: 1200px)';
							xl: '(max-width: 1440px)';
						},
						{
							fonts: {
								displayHeadline: string;
								interfaceHeadline: string;
								displayBody: string;
								interfaceBody: string;
								mono: string;
							};
							colors: {
								passionFruit000: string;
								passionFruit100: string;
								passionFruit200: string;
								passionFruit300: string;
								passionFruit400: string;
								passionFruit500: string;
								passionFruit600: string;
								passionFruit700: string;
								passionFruit800: string;
								passionFruit900: string;
								passionFruit1000: string;
								pomegranate000: string;
								pomegranate100: string;
								pomegranate200: string;
								pomegranate300: string;
								pomegranate400: string;
								pomegranate500: string;
								pomegranate600: string;
								pomegranate700: string;
								pomegranate800: string;
								pomegranate900: string;
								pomegranate1000: string;
								blackberry000: string;
								blackberry100: string;
								blackberry200: string;
								blackberry300: string;
								blackberry400: string;
								blackberry500: string;
								blackberry600: string;
								blackberry700: string;
								blackberry800: string;
								blackberry900: string;
								blackberry1000: string;
								pineapple000: string;
								pineapple100: string;
								pineapple200: string;
								pineapple300: string;
								pineapple400: string;
								pineapple500: string;
								pineapple600: string;
								pineapple700: string;
								pineapple800: string;
								pineapple900: string;
								pineapple1000: string;
								kale000: string;
								kale100: string;
								kale200: string;
								kale300: string;
								kale400: string;
								kale500: string;
								kale600: string;
								kale700: string;
								kale800: string;
								kale900: string;
								kale1000: string;
								accent000: string;
								accent100: string;
								accent200: string;
								accent300: string;
								accent400: string;
								accent500: string;
								accent600: string;
								accent700: string;
								accent800: string;
								accent900: string;
								accent1000: string;
							};
							space: {
								1: string;
								2: string;
								3: string;
								4: string;
								5: string;
								6: string;
								7: string;
								8: string;
								9: string;
								10: string;
							};
							fontSizes: {
								displayBase: string;
								displayLarge: string;
								displaySmall: string;
								displayExtraSmall: string;
								displayMega: string;
								displayH1: string;
								displayH2: string;
								displayH3: string;
								displayH4: string;
								displayH5: string;
								displayH6: string;
								interfaceBase: string;
								interfaceLarge: string;
								interfaceSmall: string;
								interfaceExtraSmall: string;
								interfaceH1: string;
								interfaceH2: string;
								interfaceH3: string;
								interfaceH4: string;
								interfaceH5: string;
								interfaceH6: string;
							};
							lineHeights: {
								displayBody: string;
								displayHeadline: string;
								interfaceBody: string;
								interfaceHeadline: string;
							};
							radii: unknown;
							letterSpacings: unknown;
							borderStyles: unknown;
							borderWidths: unknown;
							zIndices: unknown;
							transitions: {
								1: string;
								2: string;
								3: string;
								4: string;
								5: string;
							};
							shadows: {
								base: string;
							};
						},
						import('@stitches/react/types/config').DefaultThemeMap,
						{}
				  >;
		})[]
	) => () => string,
	keyframes: (style: {
		[offset: string]: import('@stitches/react/types/css-util').CSS<
			{
				xs: '(max-width: 375px)';
				sm: '(max-width: 500px)';
				md: '(max-width: 768px)';
				lg: '(max-width: 1200px)';
				xl: '(max-width: 1440px)';
			},
			{
				fonts: {
					displayHeadline: string;
					interfaceHeadline: string;
					displayBody: string;
					interfaceBody: string;
					mono: string;
				};
				colors: {
					passionFruit000: string;
					passionFruit100: string;
					passionFruit200: string;
					passionFruit300: string;
					passionFruit400: string;
					passionFruit500: string;
					passionFruit600: string;
					passionFruit700: string;
					passionFruit800: string;
					passionFruit900: string;
					passionFruit1000: string;
					pomegranate000: string;
					pomegranate100: string;
					pomegranate200: string;
					pomegranate300: string;
					pomegranate400: string;
					pomegranate500: string;
					pomegranate600: string;
					pomegranate700: string;
					pomegranate800: string;
					pomegranate900: string;
					pomegranate1000: string;
					blackberry000: string;
					blackberry100: string;
					blackberry200: string;
					blackberry300: string;
					blackberry400: string;
					blackberry500: string;
					blackberry600: string;
					blackberry700: string;
					blackberry800: string;
					blackberry900: string;
					blackberry1000: string;
					pineapple000: string;
					pineapple100: string;
					pineapple200: string;
					pineapple300: string;
					pineapple400: string;
					pineapple500: string;
					pineapple600: string;
					pineapple700: string;
					pineapple800: string;
					pineapple900: string;
					pineapple1000: string;
					kale000: string;
					kale100: string;
					kale200: string;
					kale300: string;
					kale400: string;
					kale500: string;
					kale600: string;
					kale700: string;
					kale800: string;
					kale900: string;
					kale1000: string;
					accent000: string;
					accent100: string;
					accent200: string;
					accent300: string;
					accent400: string;
					accent500: string;
					accent600: string;
					accent700: string;
					accent800: string;
					accent900: string;
					accent1000: string;
				};
				space: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
					6: string;
					7: string;
					8: string;
					9: string;
					10: string;
				};
				fontSizes: {
					displayBase: string;
					displayLarge: string;
					displaySmall: string;
					displayExtraSmall: string;
					displayMega: string;
					displayH1: string;
					displayH2: string;
					displayH3: string;
					displayH4: string;
					displayH5: string;
					displayH6: string;
					interfaceBase: string;
					interfaceLarge: string;
					interfaceSmall: string;
					interfaceExtraSmall: string;
					interfaceH1: string;
					interfaceH2: string;
					interfaceH3: string;
					interfaceH4: string;
					interfaceH5: string;
					interfaceH6: string;
				};
				lineHeights: {
					displayBody: string;
					displayHeadline: string;
					interfaceBody: string;
					interfaceHeadline: string;
				};
				radii: unknown;
				letterSpacings: unknown;
				borderStyles: unknown;
				borderWidths: unknown;
				zIndices: unknown;
				transitions: {
					1: string;
					2: string;
					3: string;
					4: string;
					5: string;
				};
				shadows: {
					base: string;
				};
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{}
		>;
	}) => {
		(): string;
		name: string;
	},
	config: {
		prefix: '';
		media: {
			xs: '(max-width: 375px)';
			sm: '(max-width: 500px)';
			md: '(max-width: 768px)';
			lg: '(max-width: 1200px)';
			xl: '(max-width: 1440px)';
		};
		theme: {
			fonts: {
				displayHeadline: string;
				interfaceHeadline: string;
				displayBody: string;
				interfaceBody: string;
				mono: string;
			};
			colors: {
				passionFruit000: string;
				passionFruit100: string;
				passionFruit200: string;
				passionFruit300: string;
				passionFruit400: string;
				passionFruit500: string;
				passionFruit600: string;
				passionFruit700: string;
				passionFruit800: string;
				passionFruit900: string;
				passionFruit1000: string;
				pomegranate000: string;
				pomegranate100: string;
				pomegranate200: string;
				pomegranate300: string;
				pomegranate400: string;
				pomegranate500: string;
				pomegranate600: string;
				pomegranate700: string;
				pomegranate800: string;
				pomegranate900: string;
				pomegranate1000: string;
				blackberry000: string;
				blackberry100: string;
				blackberry200: string;
				blackberry300: string;
				blackberry400: string;
				blackberry500: string;
				blackberry600: string;
				blackberry700: string;
				blackberry800: string;
				blackberry900: string;
				blackberry1000: string;
				pineapple000: string;
				pineapple100: string;
				pineapple200: string;
				pineapple300: string;
				pineapple400: string;
				pineapple500: string;
				pineapple600: string;
				pineapple700: string;
				pineapple800: string;
				pineapple900: string;
				pineapple1000: string;
				kale000: string;
				kale100: string;
				kale200: string;
				kale300: string;
				kale400: string;
				kale500: string;
				kale600: string;
				kale700: string;
				kale800: string;
				kale900: string;
				kale1000: string;
				accent000: string;
				accent100: string;
				accent200: string;
				accent300: string;
				accent400: string;
				accent500: string;
				accent600: string;
				accent700: string;
				accent800: string;
				accent900: string;
				accent1000: string;
			};
			space: {
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
				6: string;
				7: string;
				8: string;
				9: string;
				10: string;
			};
			fontSizes: {
				displayBase: string;
				displayLarge: string;
				displaySmall: string;
				displayExtraSmall: string;
				displayMega: string;
				displayH1: string;
				displayH2: string;
				displayH3: string;
				displayH4: string;
				displayH5: string;
				displayH6: string;
				interfaceBase: string;
				interfaceLarge: string;
				interfaceSmall: string;
				interfaceExtraSmall: string;
				interfaceH1: string;
				interfaceH2: string;
				interfaceH3: string;
				interfaceH4: string;
				interfaceH5: string;
				interfaceH6: string;
			};
			lineHeights: {
				displayBody: string;
				displayHeadline: string;
				interfaceBody: string;
				interfaceHeadline: string;
			};
			radii: unknown;
			letterSpacings: unknown;
			borderStyles: unknown;
			borderWidths: unknown;
			zIndices: unknown;
			transitions: {
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
			};
			shadows: {
				base: string;
			};
		};
		themeMap: import('@stitches/react/types/config').DefaultThemeMap;
		utils: {};
	};
export declare type CSS = Stitches.CSS<typeof config>;
