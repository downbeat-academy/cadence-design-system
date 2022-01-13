'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@stitches/react');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

var _a;
var styled = (_a = react.createStitches({
    theme: {
        fonts: {
            displayHeadline: 'Favorit Expanded, Helvetica, Arial, sans-serif',
            interfaceHeadline: 'Favorit, Helvetica, Arial, sans-serif',
            displayBody: 'Tiempos Text, Georgia, Times, serif',
            interfaceBody: 'Favorit, Helvetica, Arial, sans-serif',
            mono: 'Favorit Mono, Courier, monospace',
        },
        colors: {
            passionFruit000: 'hsla(235, 85%, 95%, 1)',
            passionFruit100: 'hsla(234, 83%, 88%, 1)',
            passionFruit200: 'hsla(234, 82%, 82%, 1)',
            passionFruit300: 'hsla(234, 82%, 76%, 1)',
            passionFruit400: 'hsla(234, 83%, 70%, 1)',
            passionFruit500: 'hsla(234, 83%, 64%, 1)',
            passionFruit600: 'hsla(234, 53%, 53%, 1)',
            passionFruit700: 'hsla(234, 47%, 42%, 1)',
            passionFruit800: 'hsla(234, 47%, 31%, 1)',
            passionFruit900: 'hsla(235, 46%, 20%, 1)',
            passionFruit1000: 'hsla(235, 47%, 10%, 1)',
            pomegranate000: 'hsla(350, 86%, 94%, 1)',
            pomegranate100: 'hsla(349, 87%, 88%, 1)',
            pomegranate200: 'hsla(349, 88%, 81%, 1)',
            pomegranate300: 'hsla(349, 86%, 75%, 1)',
            pomegranate400: 'hsla(349, 87%, 68%, 1)',
            pomegranate500: 'hsla(349, 87%, 62%, 1)',
            pomegranate600: 'hsla(349, 57%, 51%, 1)',
            pomegranate700: 'hsla(350, 54%, 41%, 1)',
            pomegranate800: 'hsla(349, 55%, 30%, 1)',
            pomegranate900: 'hsla(349, 54%, 20%, 1)',
            pomegranate1000: 'hsla(350, 53%, 9%, 1)',
            blackberry000: 'hsla(210, 58%, 95%, 1)',
            blackberry100: 'hsla(210, 64%, 94%, 1)',
            blackberry200: 'hsla(215, 64%, 86%, 1)',
            blackberry300: 'hsla(219, 37%, 69%, 1)',
            blackberry400: 'hsla(224, 33%, 58%, 1)',
            blackberry500: 'hsla(228, 29%, 49%, 1)',
            blackberry600: 'hsla(231, 34%, 41%, 1)',
            blackberry700: 'hsla(234, 36%, 34%, 1)',
            blackberry800: 'hsla(238, 37%, 28%, 1)',
            blackberry900: 'hsla(240, 36%, 22%, 1)',
            blackberry1000: 'hsla(225, 80%, 10%, 1)',
            pineapple000: 'hsla(49, 91%, 95%, 1)',
            pineapple100: 'hsla(48, 92%, 91%, 1)',
            pineapple200: 'hsla(48, 92%, 85%, 1)',
            pineapple300: 'hsla(48, 90%, 80%, 1)',
            pineapple400: 'hsla(48, 90%, 75%, 1)',
            pineapple500: 'hsla(48, 91%, 70%, 1)',
            pineapple600: 'hsla(50, 78%, 40%, 1)',
            pineapple700: 'hsla(51, 52%, 38%, 1)',
            pineapple800: 'hsla(52, 54%, 29%, 1)',
            pineapple900: 'hsla(52, 55%, 21%, 1)',
            pineapple1000: 'hsla(54, 50%, 4%, 1)',
            kale000: 'hsla(189, 51%, 93%, 1)',
            kale100: 'hsla(189, 51%, 85%, 1)',
            kale200: 'hsla(191, 53%, 77%, 1)',
            kale300: 'hsla(190, 52%, 69%, 1)',
            kale400: 'hsla(190, 52%, 61%, 1)',
            kale500: 'hsla(190, 52%, 53%, 1)',
            kale600: 'hsla(190, 47%, 44%, 1)',
            kale700: 'hsla(190, 47%, 35%, 1)',
            kale800: 'hsla(191, 47%, 26%, 1)',
            kale900: 'hsla(195, 67%, 13%, 1)',
            kale1000: 'hsla(193, 46%, 8%, 1)',
            blueberry000: 'hsla(210, 100%, 95%, 1)',
            blueberry100: 'hsla(210, 100%, 88%, 1)',
            blueberry200: 'hsla(210, 100%, 82%, 1)',
            blueberry300: 'hsla(210, 100%, 76%, 1)',
            blueberry400: 'hsla(210, 100%, 69%, 1)',
            blueberry500: 'hsla(210, 100%, 63%, 1)',
            blueberry600: 'hsla(210, 64%, 53%, 1)',
            blueberry700: 'hsla(210, 58%, 42%, 1)',
            blueberry800: 'hsla(210, 58%, 31%, 1)',
            blueberry900: 'hsla(210, 59%, 20%, 1)',
            blueberry1000: 'hsla(210, 58%, 9%, 1)',
            accent000: 'hsla(0, 0%, 100%, 1)',
            accent100: 'hsla(0, 0, 95%, 1)',
            accent200: 'hsla(240, 9%, 91%, 1)',
            accent300: 'hsla(240, 8%, 85%, 1)',
            accent400: 'hsla(240, 8%, 81%, 1)',
            accent500: 'hsla(240, 8%, 76%, 1)',
            accent600: 'hsla(240, 4%, 61%, 1)',
            accent700: 'hsla(240, 3%, 45%, 1)',
            accent800: 'hsla(240, 3%, 31%, 1)',
            accent900: 'hsla(240, 3%, 15%, 1)',
            accent1000: 'hsla(0, 0%, 0%, 1)',
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
        fontSizes: {
            displayBase: '1.125rem',
            displayLarge: '1.5rem',
            displaySmall: '0.875rem',
            displayExtraSmall: '0.75rem',
            displayMega: '4rem',
            displayH1: '3rem',
            displayH2: '2.125rem',
            displayH3: '1.75rem',
            displayH4: '1.5rem',
            displayH5: '1.25rem',
            displayH6: '0.875rem',
            interfaceBase: '1rem',
            interfaceLarge: '1.25rem',
            interfaceSmall: '0.875rem',
            interfaceExtraSmall: '0.75rem',
            interfaceH1: '2.5rem',
            interfaceH2: '2rem',
            interfaceH3: '1.65rem',
            interfaceH4: '1.4375rem',
            interfaceH5: '1.1875rem',
            interfaceH6: '1rem',
        },
        lineHeights: {
            displayBody: '1.777',
            displayHeadline: '1.3',
            interfaceBody: '1.5',
            interfaceHeadline: '1.3',
        },
        radii: {
            rounded: '50% ',
        },
        letterSpacings: {},
        borderStyles: {},
        borderWidths: {},
        zIndices: {},
        transitions: {
            1: 'all 0.1s ease-in-out',
            2: 'all 0.2s ease-in-out',
            3: 'all 0.3s ease-in-out',
            4: 'all 0.4s ease-in-out',
            5: 'all 0.5s ease-in-out',
        },
        shadows: {
            base: '0 1px 16px 0 hslaa(240, 36%, 22%, 5%)',
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
}), _a.styled), css = _a.css, theme = _a.theme, createTheme = _a.createTheme, getCssText = _a.getCssText, globalCss = _a.globalCss, keyframes = _a.keyframes, config = _a.config;

var Button = styled('button', {
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
                color: '$accent000',
                '&:hover': { background: '$passionFruit600' },
                '&:focus': {
                    borderColor: '$passionFruit500',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit500, inset 0 0 0 3px $colors$accent100',
                },
                '&:active': { background: '$passionFruit500' },
                ':disabled': {
                    color: '$accent200',
                },
            },
            secondary: {
                background: '$blackberry900',
                color: '$accent000',
                '&:hover': { background: '$blackberry800' },
                '&:focus': {
                    borderColor: '$blackberry900',
                    boxShadow: 'inset 0 0 0 2px $colors$blackberry900, inset 0 0 0 3px $colors$accent100',
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
                    color: '$accent000',
                },
                '&:focus': {
                    borderColor: '$passionFruit600',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit500, inset 0 0 0 3px $colors$accent100',
                },
                '&:active': {
                    color: '$accent000',
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
                color: '$accent000',
                '&:hover': { background: '$pomegranate600' },
                '&:focus': {
                    background: '$pomegranate500',
                    boxShadow: 'inset 0 0 0 2px $colors$pomegranate500, inset 0 0 0 3px $colors$accent100',
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

var Mega = styled('h1', {
    color: '$blackberry900',
    fontFamily: '$displayHeadline',
    fontSize: '$displayMega',
    lineHeight: '$displayHeadline',
});
var H1 = styled('h1', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH1',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH1',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});
var H2 = styled('h2', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH2',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH2',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});
var H3 = styled('h3', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH3',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH3',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});
var H4 = styled('h4', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH4',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH4',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});
var H5 = styled('h5', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH5',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH5',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});
var H6 = styled('h6', {
    color: '$blackberry900',
    variants: {
        context: {
            display: {
                fontFamily: '$displayHeadline',
                fontSize: '$displayH6',
                lineHeight: '$displayHeadline',
            },
            interface: {
                fontFamily: '$interfaceHeadline',
                fontSize: '$interfaceH6',
                lineHeight: '$interfaceHeadline',
            },
        },
    },
    defaultVariants: {
        context: 'display',
    },
});

var Paragraph = styled('p', {
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

var IconWrapper = styled('svg', {
    fill: 'none',
    variants: {
        size: {
            extraSmall: {
                width: '1rem',
                height: '1rem',
                '& > *': {
                    transform: 'scale(100%)',
                },
            },
            small: {
                width: '1.5rem',
                height: '1.5rem',
                '& > *': {
                    transform: 'scale(150%)',
                },
            },
            medium: {
                width: '2rem',
                height: '2rem',
                '& > *': {
                    transform: 'scale(200%)',
                },
            },
            large: {
                width: '2.5rem',
                height: '2.5rem',
                '& > *': {
                    transform: 'scale(250%)',
                },
            },
        },
    },
    defaultVariants: {
        size: 'small',
    },
});

function SocialIcon(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.color, color = _c === void 0 ? '#000000' : _c;
    function iconRender(icon) {
        switch (icon) {
            case 'facebook':
                return (React__default["default"].createElement("path", { d: "M16 8.04868C16 3.60243 12.4194 0 8 0C3.58065 0 0 3.60243 0 8.04868C0 12.073 2.90323 15.4158 6.74194 16V10.3854H4.70968V8.04868H6.74194V6.29615C6.74194 4.28398 7.93548 3.14807 9.74194 3.14807C10.6452 3.14807 11.5484 3.31034 11.5484 3.31034V5.29006H10.5484C9.54839 5.29006 9.22581 5.90669 9.22581 6.55578V8.04868H11.4516L11.0968 10.3854H9.22581V16C13.0645 15.4158 16 12.073 16 8.04868Z" }));
            case 'twitter':
                return (React__default["default"].createElement("path", { d: "M14.3718 4.40379C14.998 3.90809 15.5616 3.31325 16 2.61928C15.4364 2.88365 14.7789 3.08193 14.1213 3.14802C14.8102 2.71842 15.3112 2.05749 15.5616 1.23133C14.9354 1.62788 14.2153 1.9253 13.4951 2.09053C12.8689 1.39656 12.0235 1 11.0841 1C9.2681 1 7.79648 2.55318 7.79648 4.46988C7.79648 4.73425 7.82779 4.99862 7.89041 5.26299C5.16634 5.09776 2.72407 3.70981 1.09589 1.62788C0.81409 2.12358 0.657534 2.71842 0.657534 3.37935C0.657534 4.56902 1.22114 5.62651 2.12916 6.25439C1.59687 6.22134 1.06458 6.08916 0.626223 5.82478V5.85783C0.626223 7.5432 1.75342 8.93115 3.25636 9.26162C3.00587 9.32771 2.69276 9.3938 2.41096 9.3938C2.19178 9.3938 2.00391 9.36076 1.78474 9.32771C2.19178 10.7157 3.41292 11.7071 4.85323 11.7401C3.72603 12.6654 2.31703 13.2272 0.782779 13.2272C0.500978 13.2272 0.250489 13.1941 0 13.1611C1.44031 14.1525 3.16243 14.7143 5.0411 14.7143C11.0841 14.7143 14.3718 9.4599 14.3718 4.86644C14.3718 4.7012 14.3718 4.56902 14.3718 4.40379Z" }));
            case 'instagram':
                return (React__default["default"].createElement("path", { d: "M8.01786 3.875C5.73214 3.875 3.91071 5.73214 3.91071 7.98214C3.91071 10.2679 5.73214 12.0893 8.01786 12.0893C10.2679 12.0893 12.125 10.2679 12.125 7.98214C12.125 5.73214 10.2679 3.875 8.01786 3.875ZM8.01786 10.6607C6.55357 10.6607 5.33929 9.48214 5.33929 7.98214C5.33929 6.51786 6.51786 5.33929 8.01786 5.33929C9.48214 5.33929 10.6607 6.51786 10.6607 7.98214C10.6607 9.48214 9.48214 10.6607 8.01786 10.6607ZM13.2321 3.73214C13.2321 3.19643 12.8036 2.76786 12.2679 2.76786C11.7321 2.76786 11.3036 3.19643 11.3036 3.73214C11.3036 4.26786 11.7321 4.69643 12.2679 4.69643C12.8036 4.69643 13.2321 4.26786 13.2321 3.73214ZM15.9464 4.69643C15.875 3.41071 15.5893 2.26786 14.6607 1.33929C13.7321 0.410714 12.5893 0.125 11.3036 0.0535714C9.98214 -0.0178571 6.01786 -0.0178571 4.69643 0.0535714C3.41071 0.125 2.30357 0.410714 1.33929 1.33929C0.410714 2.26786 0.125 3.41071 0.0535714 4.69643C-0.0178571 6.01786 -0.0178571 9.98214 0.0535714 11.3036C0.125 12.5893 0.410714 13.6964 1.33929 14.6607C2.30357 15.5893 3.41071 15.875 4.69643 15.9464C6.01786 16.0179 9.98214 16.0179 11.3036 15.9464C12.5893 15.875 13.7321 15.5893 14.6607 14.6607C15.5893 13.6964 15.875 12.5893 15.9464 11.3036C16.0179 9.98214 16.0179 6.01786 15.9464 4.69643ZM14.2321 12.6964C13.9821 13.4107 13.4107 13.9464 12.7321 14.2321C11.6607 14.6607 9.16071 14.5536 8.01786 14.5536C6.83929 14.5536 4.33929 14.6607 3.30357 14.2321C2.58929 13.9464 2.05357 13.4107 1.76786 12.6964C1.33929 11.6607 1.44643 9.16071 1.44643 7.98214C1.44643 6.83929 1.33929 4.33929 1.76786 3.26786C2.05357 2.58929 2.58929 2.05357 3.30357 1.76786C4.33929 1.33929 6.83929 1.44643 8.01786 1.44643C9.16071 1.44643 11.6607 1.33929 12.7321 1.76786C13.4107 2.01786 13.9464 2.58929 14.2321 3.26786C14.6607 4.33929 14.5536 6.83929 14.5536 7.98214C14.5536 9.16071 14.6607 11.6607 14.2321 12.6964Z" }));
            case 'youtube':
                return (React__default["default"].createElement("path", { d: "M14.6929 4.58854C14.5393 3.96354 14.053 3.46875 13.4644 3.3125C12.3638 3 8.0128 3 8.0128 3C8.0128 3 3.6362 3 2.53565 3.3125C1.94698 3.46875 1.46069 3.96354 1.30713 4.58854C1 5.68229 1 8.02604 1 8.02604C1 8.02604 1 10.3437 1.30713 11.4635C1.46069 12.0885 1.94698 12.5573 2.53565 12.7135C3.6362 13 8.0128 13 8.0128 13C8.0128 13 12.3638 13 13.4644 12.7135C14.053 12.5573 14.5393 12.0885 14.6929 11.4635C15 10.3437 15 8.02604 15 8.02604C15 8.02604 15 5.68229 14.6929 4.58854ZM6.57952 10.1354V5.91667L10.2139 8.02604L6.57952 10.1354Z" }));
            case 'tiktok':
                return (React__default["default"].createElement("path", { d: "M14.1647 3.75309C13.3641 3.57767 12.6398 3.15406 12.0958 2.54305C11.5518 1.93204 11.2161 1.16503 11.1368 0.352102V0H8.36581V10.9392C8.36638 11.4246 8.21364 11.8978 7.92924 12.2919C7.64485 12.686 7.2432 12.981 6.78121 13.135C6.31922 13.289 5.82029 13.2943 5.35511 13.1501C4.88993 13.0059 4.48208 12.7195 4.18933 12.3316C3.92705 11.9881 3.76645 11.5784 3.72568 11.1488C3.68492 10.7192 3.76561 10.2868 3.95864 9.90046C4.15167 9.51415 4.44934 9.18935 4.81798 8.9628C5.18662 8.73625 5.61153 8.61698 6.04465 8.61849C6.28419 8.61713 6.52253 8.65221 6.75144 8.72252V5.92171C6.48506 5.88884 6.21662 5.87547 5.94827 5.8817C4.95982 5.90802 4.00052 6.22095 3.18784 6.78218C2.37517 7.34341 1.74439 8.12857 1.37275 9.04153C1.00112 9.95448 0.904748 10.9556 1.09545 11.9223C1.28615 12.889 1.75565 13.7793 2.44645 14.4842C3.15443 15.2014 4.06041 15.6926 5.04928 15.8956C6.03814 16.0986 7.06525 16.0041 8.0001 15.6242C8.93494 15.2442 9.73533 14.596 10.2995 13.7618C10.8638 12.9276 11.1664 11.9451 11.1689 10.9392V5.33754C12.2865 6.13293 13.6266 6.55841 15 6.5539V3.83311C14.7302 3.83422 14.461 3.8074 14.1968 3.75309H14.1647Z" }));
            default:
                return null;
        }
    }
    return (React__default["default"].createElement(IconWrapper, { size: size, fill: "none", xmlns: "http://www.w3.org/2000/svg", color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, iconRender(icon)));
}

function Arrow(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.color, color = _c === void 0 ? '#000000' : _c, direction = _a.direction;
    function iconRender(icon) {
        switch (icon) {
            case 'chevron':
                return (React__default["default"].createElement("path", { d: "M10.862 6.19533L7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533Z" }));
            case 'chevronSquare':
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("path", { d: "M3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V3.33333C14 2.598 13.402 2 12.6667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14ZM3.33333 3.33333H12.6667L12.6673 12.6667H3.33333V3.33333Z" }),
                    React__default["default"].createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z" })));
            case 'chevronCircle':
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("path", { d: "M8.00004 1.33333C4.32404 1.33333 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8.00004 1.33333ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05933 5.05937 2.66666 8.00004 2.66666C10.9407 2.66666 13.3334 5.05933 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z" }),
                    React__default["default"].createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z" })));
            case 'arrow':
                return (React__default["default"].createElement("path", { d: "M7.19533 1.862L7.19533 11.586L3.66667 8.05733L2.724 9L7.862 14.138L13 9L12.0573 8.05733L8.52867 11.586L8.52867 1.862L7.19533 1.862Z" }));
            default:
                return null;
        }
    }
    return (React__default["default"].createElement(ArrowWrapper, { xmlns: "http://www.w3.org/2000/svg", fill: "none", size: size, color: color, direction: direction, css: {
            '> *': {
                fill: "" + color,
            },
        } }, iconRender(icon)));
}
var ArrowWrapper = styled('svg', {
    fill: 'none',
    variants: {
        size: {
            extraSmall: {
                width: '1rem',
                height: '1rem',
                '& > *': {
                    transform: 'scale(100%)',
                },
            },
            small: {
                width: '1.5rem',
                height: '1.5rem',
                '& > *': {
                    transform: 'scale(150%)',
                },
            },
            medium: {
                width: '2rem',
                height: '2rem',
                '& > *': {
                    transform: 'scale(200%)',
                },
            },
            large: {
                width: '2.5rem',
                height: '2.5rem',
                '& > *': {
                    transform: 'scale(250%)',
                },
            },
        },
        direction: {
            down: { transform: 'inherit' },
            up: { transform: 'rotate(180deg)' },
            left: { transform: 'rotate(90deg)' },
            right: { transform: 'rotate(-90deg)' },
        }
    },
    defaultVariants: {
        size: 'small',
    },
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Info = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M7.99998 1.33334C4.32398 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.676 1.33334 7.99998 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.05931 2.66667 7.99998 2.66667C10.9406 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: color }),
        React__namespace.createElement("path", { d: "M7.33325 7.33333H8.66659V11.3333H7.33325V7.33333ZM7.33325 4.66666H8.66659V6H7.33325V4.66666Z", fill: color })));
});

var Award = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M3.33325 5.99934C3.33325 7.26734 3.84325 8.41734 4.66659 9.25934V14C4.66616 14.1138 4.69493 14.2258 4.75014 14.3253C4.80535 14.4248 4.88515 14.5085 4.98193 14.5683C5.0787 14.6282 5.18921 14.6622 5.30289 14.6672C5.41657 14.6721 5.52963 14.6479 5.63125 14.5967L7.99992 13.412L10.3686 14.596C10.47 14.6473 10.5828 14.6716 10.6963 14.6666C10.8098 14.6615 10.9201 14.6274 11.0166 14.5673C11.2133 14.4453 11.3333 14.2313 11.3333 14V9.26C12.1881 8.39 12.6669 7.21901 12.6666 5.99934C12.6666 3.42667 10.5733 1.33334 7.99992 1.33334C5.42659 1.33334 3.33325 3.42667 3.33325 5.99934ZM8.29792 12.07C8.2053 12.0237 8.10315 11.9995 7.99959 11.9995C7.89602 11.9995 7.79387 12.0237 7.70125 12.07L5.99992 12.9213V10.21C6.60725 10.4993 7.28392 10.6667 7.99992 10.6667C8.71592 10.6667 9.39259 10.5 9.99992 10.21V12.9207L8.29792 12.07ZM7.99992 2.66667C9.83725 2.66667 11.3333 4.16134 11.3333 5.99934C11.3324 6.88318 10.9809 7.73058 10.356 8.35562C9.7311 8.98066 8.88376 9.33228 7.99992 9.33334C6.16192 9.33334 4.66659 7.838 4.66659 5.99934C4.66764 5.11567 5.01919 4.2685 5.64411 3.64372C6.26902 3.01893 7.11625 2.66755 7.99992 2.66667Z", fill: color })));
});

var BookAlt = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.204 3.33333 12.6667C3.33333 12.1293 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334ZM12.6667 10.6667H3.33333V3.33334C3.33333 2.796 3.7 2.67467 4 2.66667H12.6667V10.6667Z", fill: color })));
});

var Book = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.2033 3.33333 12.6667C3.33333 12.13 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667ZM3.33333 5.33334V3.33334C3.33333 2.79667 3.7 2.67467 4 2.66667H12.6667V10.6667H3.33333V5.33334Z", fill: color }),
        React__namespace.createElement("path", { d: "M5.33325 4H11.3332V5.33333H5.33325V4Z", fill: color })));
});

var Calendar = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M4.66675 7.33334H6.00008V8.66667H4.66675V7.33334ZM4.66675 10H6.00008V11.3333H4.66675V10ZM7.33341 7.33334H8.66675V8.66667H7.33341V7.33334ZM7.33341 10H8.66675V11.3333H7.33341V10ZM10.0001 7.33334H11.3334V8.66667H10.0001V7.33334ZM10.0001 10H11.3334V11.3333H10.0001V10Z", fill: color }),
        React__namespace.createElement("path", { d: "M3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667ZM12.6667 5.33334L12.6673 13.3333H3.33333V5.33334H12.6667Z", fill: color })));
});

var CalendarX = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M5.52869 10.862L6.47135 11.8047L8.00002 10.276L9.52869 11.8047L10.4714 10.862L8.94269 9.33334L10.4714 7.80467L9.52869 6.862L8.00002 8.39067L6.47135 6.862L5.52869 7.80467L7.05735 9.33334L5.52869 10.862Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarCheck = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color }),
        React__namespace.createElement("path", { d: "M7.33327 11.6093L11.1379 7.80467L10.1953 6.862L7.33327 9.724L5.8046 8.19533L4.86194 9.138L7.33327 11.6093Z", fill: color })));
});

var CalendarPlus = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M5.33325 10H7.33325V12H8.66659V10H10.6666V8.66666H8.66659V6.66666H7.33325V8.66666H5.33325V10Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarMinus = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M5.33325 8.66666H10.6666V10H5.33325V8.66666Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarExclamation = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color }),
        React__namespace.createElement("path", { d: "M7.33325 6.66666H8.66659V10H7.33325V6.66666ZM7.33325 10.6667H8.66659V12H7.33325V10.6667Z", fill: color })));
});

var CalendarEdit = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: color }),
        React__namespace.createElement("path", { d: "M10.4187 8.122L9.21867 6.92267L10.132 6.00867L11.332 7.208L10.4187 8.122ZM5.33667 10.8007V12H6.536L9.85334 8.68667L8.654 7.48733L5.33667 10.8007Z", fill: color })));
});

var CalendarEvent = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M7.33325 8H11.3332V12H7.33325V8Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.6673 13.3333H3.33333V5.33334H12.6667L12.6673 13.3333Z", fill: color })));
});

var CalendarHeart = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M5.76531 9.80734L7.99797 12L10.2313 9.80734C10.369 9.6749 10.4786 9.51604 10.5534 9.34025C10.6282 9.16447 10.6668 8.97538 10.6668 8.78434C10.6668 8.59329 10.6282 8.40421 10.5534 8.22842C10.4786 8.05264 10.369 7.89377 10.2313 7.76134C9.95371 7.48734 9.57936 7.33371 9.18931 7.33371C8.79926 7.33371 8.42491 7.48734 8.14731 7.76134L7.99797 7.90734L7.84864 7.76134C7.57115 7.48738 7.19691 7.33377 6.80697 7.33377C6.41704 7.33377 6.0428 7.48738 5.76531 7.76134C5.62761 7.89377 5.51806 8.05264 5.44323 8.22842C5.3684 8.40421 5.32983 8.59329 5.32983 8.78434C5.32983 8.97538 5.3684 9.16447 5.44323 9.34025C5.51806 9.51604 5.62761 9.6749 5.76531 9.80734V9.80734Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarStar = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M6.65404 9.874L6.34271 11.6913L7.97537 10.8333L9.60804 11.6913L9.29604 9.874L10.6174 8.586L8.79204 8.32066L7.97537 6.66666L7.15871 8.32066L5.33337 8.586L6.65404 9.874Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarWeek = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: color }),
        React__namespace.createElement("path", { d: "M4.66663 6.66667V8H11.3333V6H4.66663V6.66667Z", fill: color })));
});

var Close = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M10.7946 4.22933L7.96598 7.05733L5.13798 4.22933L4.19531 5.172L7.02331 8L4.19531 10.828L5.13798 11.7707L7.96598 8.94267L10.7946 11.7707L11.7373 10.828L8.90931 8L11.7373 5.172L10.7946 4.22933Z", fill: color })));
});

var Megaphone = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M13.776 2.31867L5.33337 5.33333V10L5.83204 10.178L5.08071 11.6807C4.99513 11.8515 4.94729 12.0387 4.94043 12.2297C4.93357 12.4206 4.96785 12.6108 5.04094 12.7873C5.11403 12.9639 5.22423 13.1226 5.36406 13.2528C5.50389 13.383 5.67009 13.4817 5.85137 13.542L8.57404 14.4493C8.87861 14.5486 9.20863 14.5358 9.50459 14.4132C9.80054 14.2906 10.0429 14.0663 10.188 13.7807L11.0567 12.0433L13.776 13.0147C13.8766 13.0505 13.9843 13.0617 14.0901 13.0473C14.1959 13.0329 14.2966 12.9933 14.3839 12.9318C14.4712 12.8703 14.5425 12.7888 14.5917 12.694C14.6409 12.5993 14.6666 12.4941 14.6667 12.3873V2.946C14.6666 2.83923 14.6409 2.73405 14.5917 2.63931C14.5425 2.54456 14.4712 2.46301 14.3839 2.40153C14.2966 2.34005 14.1959 2.30044 14.0901 2.28602C13.9843 2.2716 13.8766 2.28279 13.776 2.31867ZM8.99537 13.1847L6.27337 12.2773L7.09671 10.63L9.79137 11.5927L8.99537 13.1847ZM2.66671 10H4.00004V5.33333H2.66671C1.93137 5.33333 1.33337 5.93133 1.33337 6.66667V8.66667C1.33337 9.402 1.93137 10 2.66671 10Z", fill: color })));
});

var Warning = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M7.33404 6.66667H8.66737V10H7.33404V6.66667ZM7.33337 10.6667H8.66671V12H7.33337V10.6667Z", fill: color }),
        React__namespace.createElement("path", { d: "M9.17867 2.8C8.94667 2.36333 8.49467 2.092 8.00001 2.092C7.50534 2.092 7.05334 2.36333 6.82134 2.80067L1.92934 12.0427C1.82079 12.2456 1.76701 12.4734 1.77333 12.7034C1.77964 12.9335 1.84582 13.158 1.96534 13.3547C2.08314 13.5523 2.25043 13.7157 2.45071 13.8289C2.65098 13.942 2.8773 14.001 3.10734 14H12.8927C13.3647 14 13.792 13.7587 14.0353 13.3547C14.1547 13.1579 14.2207 12.9335 14.2271 12.7034C14.2334 12.4734 14.1797 12.2457 14.0713 12.0427L9.17867 2.8ZM3.10734 12.6667L8.00001 3.42467L12.896 12.6667H3.10734Z", fill: color })));
});

var Error = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M7.96865 1.33334C4.30998 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.662 1.33334 7.96865 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.04465 2.66667 7.96865 2.66667C10.9273 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: color }),
        React__namespace.createElement("path", { d: "M7.33337 4.66666H8.66671V9.33333H7.33337V4.66666ZM7.33337 10H8.66671V11.3333H7.33337V10Z", fill: color })));
});

var CheckCircle = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M8.00004 1.33334C4.32404 1.33334 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33334 8.00004 1.33334ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05934 5.05937 2.66667 8.00004 2.66667C10.9407 2.66667 13.3334 5.05934 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z", fill: color }),
        React__namespace.createElement("path", { d: "M6.66602 9.058L5.13335 7.528L4.19202 8.472L6.66735 10.942L11.138 6.47133L10.1954 5.52866L6.66602 9.058Z", fill: color })));
});

var ExternalLink = React__namespace.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React__namespace.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "" + color,
            },
        } }, props, { ref: forwardedRef }),
        React__namespace.createElement("path", { d: "M8.66665 2L10.862 4.19533L6.19531 8.862L7.13798 9.80467L11.8046 5.138L14 7.33333V2H8.66665Z", fill: color }),
        React__namespace.createElement("path", { d: "M12.6667 12.6667H3.33333V3.33333H8L6.66667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V9.33333L12.6667 8V12.6667Z", fill: color })));
});

var Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    variants: {
        direction: {
            row: { flexDirection: 'row' },
            column: { flexDirection: 'column' },
            rowReverse: { flexDirection: 'row-reverse' },
            columnRevers: { flexDirection: 'column-reverse' },
        },
        align: {
            start: { alignItems: 'flex-start' },
            center: { alignItems: 'center' },
            end: { alignItems: 'flex-end' },
            stretch: { alignItems: 'stretch' },
            baseline: { alignItems: 'baseline' },
        },
        justify: {
            start: { justifyContent: 'flex-start' },
            center: { justifyContent: 'center' },
            end: { justifyContent: 'flex-end' },
            between: { justifyContent: 'space-between' },
            around: { justifyContent: 'space-around' },
        },
        wrap: {
            noWrap: { flexWrap: 'nowrap' },
            wrap: { flexWrap: 'wrap' },
            wrapReverse: { flexWrap: 'wrap-reverse' },
        },
        gap: {
            1: { gap: '$1' },
            2: { gap: '$2' },
            3: { gap: '$3' },
            4: { gap: '$4' },
            5: { gap: '$5' },
            6: { gap: '$6' },
            7: { gap: '$7' },
            8: { gap: '$8' },
            9: { gap: '$9' },
            10: { gap: '$10' },
        },
    },
    defaultVariants: {
        direction: 'row',
        align: 'stretch',
        justify: 'start',
        wrap: 'noWrap',
    },
});

var Grid = styled('div', {
    boxSizing: 'border-box',
    display: 'grid',
    variants: {
        align: {
            start: { alignItems: 'start' },
            center: { alignItems: 'center' },
            end: { alignItems: 'end' },
            stretch: { alignItems: 'stretch' },
            baseline: { alignItems: 'baseline' },
        },
        justify: {
            start: { justifyContent: 'start' },
            center: { justifyContent: 'center' },
            end: { justifyContent: 'end' },
            between: { justifyContent: 'space-between' },
            around: { justifyContent: 'space-around' },
        },
        flow: {
            row: { gridAutoFlow: 'row' },
            column: { gridAutoFlow: 'column' },
            dense: { gridAutoFlow: 'dense' },
            rowDense: { gridAutoFlow: 'row dense' },
            columnDense: { gridAutoFlow: 'column dense' },
        },
        columns: {
            1: { gridTemplateColumns: 'repeat(1, 1fr)' },
            2: { gridTemplateColumns: 'repeat(2, 1fr)' },
            3: { gridTemplateColumns: 'repeat(3, 1fr)' },
            4: { gridTemplateColumns: 'repeat(4, 1fr)' },
            5: { gridTemplateColumns: 'repeat(5, 1fr)' },
            6: { gridTemplateColumns: 'repeat(6, 1fr)' },
            7: { gridTemplateColumns: 'repeat(7, 1fr)' },
            8: { gridTemplateColumns: 'repeat(8, 1fr)' },
            9: { gridTemplateColumns: 'repeat(9, 1fr)' },
            10: { gridTemplateColumns: 'repeat(10, 1fr)' },
            11: { gridTemplateColumns: 'repeat(11, 1fr)' },
            12: { gridTemplateColumns: 'repeat(12, 1fr)' },
        },
        gap: {
            1: { gap: '$1' },
            2: { gap: '$2' },
            3: { gap: '$3' },
            4: { gap: '$4' },
            5: { gap: '$5' },
            6: { gap: '$6' },
            7: { gap: '$7' },
            8: { gap: '$8' },
            9: { gap: '$9' },
            10: { gap: '$10' },
        },
        gapX: {
            1: { columnGap: '$1' },
            2: { columnGap: '$2' },
            3: { columnGap: '$3' },
            4: { columnGap: '$4' },
            5: { columnGap: '$5' },
            6: { columnGap: '$6' },
            7: { columnGap: '$7' },
            8: { columnGap: '$8' },
            9: { columnGap: '$9' },
            10: { columnGap: '$10' },
        },
        gapY: {
            1: { rowGap: '$1' },
            2: { rowGap: '$2' },
            3: { rowGap: '$3' },
            4: { rowGap: '$4' },
            5: { rowGap: '$5' },
            6: { rowGap: '$6' },
            7: { rowGap: '$7' },
            8: { rowGap: '$8' },
            9: { rowGap: '$9' },
            10: { rowGap: '$10' },
        },
    },
});

var SvgWrapper = styled('svg', {
    fill: 'none',
});

var Logo = function (_a) {
    var width = _a.width, _b = _a.color, color = _b === void 0 ? 'black' : _b, _c = _a.type, type = _c === void 0 ? 'symbol' : _c;
    function logoRender(type) {
        switch (type) {
            case 'symbol':
                return (React__default["default"].createElement(SvgWrapper, { width: width, viewBox: "0 0 250 250", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "" + color
                        }
                    } },
                    React__default["default"].createElement("path", { d: "M176.652 143.385C176.652 143.385 180.226 131.888 191.402 120.543C200.312 111.477 220.8 96.1305 220.8 96.1305C220.8 96.1305 220.8 153.059 220.8 153.009C220.8 206.594 177.659 250 124.4 250C71.1408 250 28 206.544 28 153.009C28 100.132 66.1572 67.5142 98.173 60.0689C150.878 47.812 148.412 122.265 148.412 122.265C142.824 117.96 131.85 114.769 124.652 114.769C103.811 114.769 86.897 131.787 86.897 152.755C86.897 173.724 103.811 190.741 124.652 190.741C145.492 190.741 162.406 173.724 162.406 152.755V0C162.406 0.151945 224.978 15.1945 220.8 57.4858C218.685 78.8594 193.113 96.8902 183.196 114.465C173.481 131.635 176.652 143.385 176.652 143.385Z", fill: color })));
            case 'text':
                return (React__default["default"].createElement(SvgWrapper, { width: width, viewBox: "0 0 1000 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "" + color
                        }
                    } },
                    React__default["default"].createElement("path", { d: "M26.645 76.9231C49.2988 76.9231 64.4012 63.7363 64.4012 38.4615C64.4012 13.1868 48.7594 0 26.1057 0H0.215698V76.9231H26.645ZM14.7788 13.1868H25.0269C39.59 13.1868 49.8381 19.2308 49.8381 38.4615C49.8381 57.6923 39.59 63.7363 25.0269 63.7363H14.7788V13.1868Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M100.184 78.022C116.365 78.022 127.152 65.9341 127.152 49.4506C127.152 32.967 116.365 20.8791 100.184 20.8791C84.0024 20.8791 73.215 32.967 73.215 49.4506C73.215 65.9341 84.0024 78.022 100.184 78.022ZM99.7522 66.4835C92.2009 66.4835 87.3466 60.2198 87.3466 49.4506C87.3466 38.6813 92.2009 32.4176 99.7522 32.4176H100.615C108.166 32.4176 113.021 38.6813 113.021 49.4506C113.021 60.2198 108.166 66.4835 100.615 66.4835H99.7522Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M189.658 62.4176L180.273 21.978H165.279L156.541 62.7473L145.753 21.978H131.622L148.126 76.9231H163.876L172.83 38.4615L182.323 76.9231H198.073L213.499 21.978H199.906L189.658 62.4176Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M236.693 76.9231V46.3736C236.693 38.6813 241.871 32.4176 248.344 32.4176H249.207C254.601 32.4176 257.729 36.2637 257.729 43.4066V76.9231H271.753V41.7582C271.753 29.6703 265.927 20.8791 252.983 20.8791C245.971 20.8791 239.93 24.5055 236.693 30V21.978H222.67V76.9231H236.693Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M315.225 78.022C330.866 78.022 339.173 64.2857 339.173 49.4506C339.173 34.6154 330.866 20.8791 315.225 20.8791C307.673 20.8791 301.848 25.2747 299.691 29.1209V0H285.667V76.9231H299.691V69.7802C301.848 73.6264 307.673 78.022 315.225 78.022ZM311.988 66.4835C305.516 66.4835 299.691 59.8901 299.691 49.4506C299.691 39.011 305.516 32.4176 311.988 32.4176H312.851C319.863 32.4176 325.149 38.9011 325.149 49.3407C325.149 59.7802 319.863 66.4835 312.851 66.4835H311.988Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M373.109 78.022C386.593 78.022 394.899 70.3297 397.488 59.5604H383.573C382.602 63.2967 379.365 66.4835 374.08 66.4835H373.217C367.391 66.4835 361.566 61.5385 361.027 53.956H397.488C397.596 52.1978 397.704 50.4396 397.704 48.7912C397.704 32.8571 389.29 20.8791 373.109 20.8791C356.928 20.8791 347.435 32.967 347.435 49.4506C347.435 67.5824 359.624 78.022 373.109 78.022ZM361.027 42.967C361.35 36.3736 366.313 32.4176 372.138 32.4176H373.001C378.826 32.4176 383.788 36.3736 384.112 42.967H361.027Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M423.907 78.022C430.919 78.022 436.636 74.9451 439.872 70.2198C439.98 72.7473 440.196 75.2747 440.52 76.9231H453.68C453.141 73.0769 453.141 68.1319 453.141 64.8352V40.6593C453.141 27.8022 443.972 20.8791 430.487 20.8791C417.003 20.8791 408.373 28.6813 407.294 39.011H421.318C421.641 35.8242 424.77 32.4176 430.056 32.4176H430.919C436.205 32.4176 439.549 36.2637 439.549 41.2088V42.5275L425.956 43.7363C415.277 44.6154 406.215 50 406.215 61.8681C406.215 71.7582 414.198 78.022 423.907 78.022ZM426.712 66.4835C422.936 66.4835 420.023 64.2857 420.023 60.8791C420.023 56.3736 424.338 54.5055 427.898 54.1758L439.549 52.967V54.5055C439.549 61.6484 433.831 66.4835 427.575 66.4835H426.712Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M500.199 76.9231V64.8352H492.432C487.577 64.8352 486.499 63.7363 486.499 58.7912V33.5165H498.581V21.978H486.499V4.17582H472.475V21.978H461.364V33.5165H472.475V62.6374C472.475 71.978 477.329 76.9231 486.499 76.9231H500.199Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M602.271 76.9231L573.145 0H556.101L526.219 76.9231H541.538L548.334 58.7912H580.049L586.845 76.9231H602.271ZM564.191 16.4835L575.087 45.6044H553.296L564.191 16.4835Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M632.161 78.022C646.185 78.022 655.354 71.4286 656.433 57.6923H642.409C641.546 63.0769 638.418 66.4835 632.592 66.4835H631.729C623.747 66.4835 620.295 58.7912 620.295 49.4506C620.295 40.1099 623.747 32.4176 631.729 32.4176H632.592C638.418 32.4176 641.546 35.8242 642.409 41.2088H656.433C655.354 27.4725 646.185 20.8791 632.161 20.8791C617.598 20.8791 606.271 31.8681 606.271 49.4506C606.271 67.033 617.598 78.022 632.161 78.022Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M682.006 78.022C689.018 78.022 694.735 74.9451 697.971 70.2198C698.079 72.7473 698.295 75.2747 698.619 76.9231H711.779C711.24 73.0769 711.24 68.1319 711.24 64.8352V40.6593C711.24 27.8022 702.071 20.8791 688.586 20.8791C675.102 20.8791 666.472 28.6813 665.393 39.011H679.417C679.74 35.8242 682.869 32.4176 688.155 32.4176H689.018C694.304 32.4176 697.648 36.2637 697.648 41.2088V42.5275L684.056 43.7363C673.376 44.6154 664.314 50 664.314 61.8681C664.314 71.7582 672.297 78.022 682.006 78.022ZM684.811 66.4835C681.035 66.4835 678.122 64.2857 678.122 60.8791C678.122 56.3736 682.437 54.5055 685.997 54.1758L697.648 52.967V54.5055C697.648 61.6484 691.93 66.4835 685.674 66.4835H684.811Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M746.098 78.022C753.649 78.022 759.474 73.6264 761.632 69.7802V76.9231H775.656V0H761.632V29.1209C759.474 25.2747 753.649 20.8791 746.098 20.8791C730.456 20.8791 722.15 34.6154 722.15 49.4506C722.15 64.2857 730.456 78.022 746.098 78.022ZM748.471 66.4835C741.459 66.4835 736.173 59.7802 736.173 49.3407C736.173 38.9011 741.459 32.4176 748.471 32.4176H749.334C755.807 32.4176 761.632 39.011 761.632 49.4506C761.632 59.8901 755.807 66.4835 749.334 66.4835H748.471Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M812.72 78.022C826.204 78.022 834.511 70.3297 837.1 59.5604H823.184C822.213 63.2967 818.977 66.4835 813.691 66.4835H812.828C807.002 66.4835 801.177 61.5385 800.638 53.956H837.1C837.207 52.1978 837.315 50.4396 837.315 48.7912C837.315 32.8571 828.901 20.8791 812.72 20.8791C796.539 20.8791 787.046 32.967 787.046 49.4506C787.046 67.5824 799.236 78.022 812.72 78.022ZM800.638 42.967C800.961 36.3736 805.924 32.4176 811.749 32.4176H812.612C818.437 32.4176 823.399 36.3736 823.723 42.967H800.638Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M862.979 76.9231V46.3736C862.979 38.6813 868.049 32.967 874.521 32.967H875.384C881.209 32.967 883.798 36.8132 883.798 43.9561V76.9231H897.822V46.3736C897.822 38.6813 902.892 32.967 909.365 32.967H910.228C916.053 32.967 918.534 36.8132 918.534 43.9561V76.9231H932.558V42.3077C932.558 30.2198 927.38 20.8791 913.356 20.8791C906.56 20.8791 899.656 23.6264 895.557 30.3297C892.536 24.0659 886.603 20.8791 879.052 20.8791C873.011 20.8791 866.754 23.5165 862.979 29.7802V21.978H848.955V76.9231H862.979Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M983.542 21.978L969.519 55.3846L954.955 21.978H939.206L962.722 72.6374V80.7692C962.722 85.7143 961.644 86.8132 956.789 86.8132H942.442V99.1209H962.075C971.244 99.1209 976.099 94.1758 976.099 84.8352V72.0879L999.076 21.978H983.542Z", fill: color })));
            case 'lockup':
                return (React__default["default"].createElement(SvgWrapper, { width: width, viewBox: "0 0 1244 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "" + color
                        }
                    } },
                    React__default["default"].createElement("path", { d: "M141.322 114.708C141.322 114.708 144.181 105.511 153.121 96.4344C160.249 89.1815 176.64 76.9044 176.64 76.9044C176.64 76.9044 176.64 122.447 176.64 122.407C176.64 165.276 142.127 200 99.5199 200C56.9127 200 22.4 165.235 22.4 122.407C22.4 80.1054 52.9258 54.0113 78.5385 48.0551C120.703 38.2496 118.729 97.812 118.729 97.812C114.259 94.3679 105.48 91.8152 99.7213 91.8152C83.0489 91.8152 69.5176 105.429 69.5176 122.204C69.5176 138.979 83.0489 152.593 99.7213 152.593C116.394 152.593 129.925 138.979 129.925 122.204V0C129.925 0.121556 179.982 12.1556 176.64 45.9887C174.948 63.0875 154.49 77.5122 146.557 91.5721C138.785 105.308 141.322 114.708 141.322 114.708Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M256.645 138.923C279.299 138.923 294.401 125.736 294.401 100.462C294.401 75.1868 278.759 62 256.106 62H230.216V138.923H256.645ZM244.779 75.1868H255.027C269.59 75.1868 279.838 81.2308 279.838 100.462C279.838 119.692 269.59 125.736 255.027 125.736H244.779V75.1868Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M330.184 140.022C346.365 140.022 357.152 127.934 357.152 111.451C357.152 94.967 346.365 82.8791 330.184 82.8791C314.002 82.8791 303.215 94.967 303.215 111.451C303.215 127.934 314.002 140.022 330.184 140.022ZM329.752 128.484C322.201 128.484 317.347 122.22 317.347 111.451C317.347 100.681 322.201 94.4176 329.752 94.4176H330.615C338.166 94.4176 343.021 100.681 343.021 111.451C343.021 122.22 338.166 128.484 330.615 128.484H329.752Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M419.658 124.418L410.273 83.978H395.279L386.541 124.747L375.753 83.978H361.622L378.126 138.923H393.876L402.83 100.462L412.323 138.923H428.073L443.499 83.978H429.906L419.658 124.418Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M466.693 138.923V108.374C466.693 100.681 471.871 94.4176 478.344 94.4176H479.207C484.601 94.4176 487.729 98.2637 487.729 105.407V138.923H501.753V103.758C501.753 91.6703 495.927 82.8791 482.983 82.8791C475.971 82.8791 469.93 86.5055 466.693 92V83.978H452.67V138.923H466.693Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M545.225 140.022C560.866 140.022 569.173 126.286 569.173 111.451C569.173 96.6154 560.866 82.8791 545.225 82.8791C537.673 82.8791 531.848 87.2747 529.691 91.1209V62H515.667V138.923H529.691V131.78C531.848 135.626 537.673 140.022 545.225 140.022ZM541.988 128.484C535.516 128.484 529.691 121.89 529.691 111.451C529.691 101.011 535.516 94.4176 541.988 94.4176H542.851C549.863 94.4176 555.149 100.901 555.149 111.341C555.149 121.78 549.863 128.484 542.851 128.484H541.988Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M603.109 140.022C616.593 140.022 624.899 132.33 627.488 121.56H613.573C612.602 125.297 609.365 128.484 604.08 128.484H603.217C597.391 128.484 591.566 123.538 591.027 115.956H627.488C627.596 114.198 627.704 112.44 627.704 110.791C627.704 94.8571 619.29 82.8791 603.109 82.8791C586.928 82.8791 577.435 94.967 577.435 111.451C577.435 129.582 589.624 140.022 603.109 140.022ZM591.027 104.967C591.35 98.3736 596.313 94.4176 602.138 94.4176H603.001C608.826 94.4176 613.788 98.3736 614.112 104.967H591.027Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M653.907 140.022C660.919 140.022 666.636 136.945 669.872 132.22C669.98 134.747 670.196 137.275 670.52 138.923H683.68C683.141 135.077 683.141 130.132 683.141 126.835V102.659C683.141 89.8022 673.972 82.8791 660.487 82.8791C647.003 82.8791 638.373 90.6813 637.294 101.011H651.318C651.641 97.8242 654.77 94.4176 660.056 94.4176H660.919C666.205 94.4176 669.549 98.2637 669.549 103.209V104.527L655.956 105.736C645.277 106.615 636.215 112 636.215 123.868C636.215 133.758 644.198 140.022 653.907 140.022ZM656.712 128.484C652.936 128.484 650.023 126.286 650.023 122.879C650.023 118.374 654.338 116.506 657.898 116.176L669.549 114.967V116.505C669.549 123.648 663.831 128.484 657.575 128.484H656.712Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M730.199 138.923V126.835H722.432C717.577 126.835 716.499 125.736 716.499 120.791V95.5165H728.581V83.978H716.499V66.1758H702.475V83.978H691.364V95.5165H702.475V124.637C702.475 133.978 707.329 138.923 716.499 138.923H730.199Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M832.271 138.923L803.145 62H786.101L756.219 138.923H771.538L778.334 120.791H810.049L816.845 138.923H832.271ZM794.191 78.4835L805.087 107.604H783.296L794.191 78.4835Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M862.161 140.022C876.185 140.022 885.354 133.429 886.433 119.692H872.409C871.546 125.077 868.418 128.484 862.592 128.484H861.729C853.747 128.484 850.295 120.791 850.295 111.451C850.295 102.11 853.747 94.4176 861.729 94.4176H862.592C868.418 94.4176 871.546 97.8242 872.409 103.209H886.433C885.354 89.4725 876.185 82.8791 862.161 82.8791C847.598 82.8791 836.271 93.8681 836.271 111.451C836.271 129.033 847.598 140.022 862.161 140.022Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M912.006 140.022C919.018 140.022 924.735 136.945 927.971 132.22C928.079 134.747 928.295 137.275 928.619 138.923H941.779C941.24 135.077 941.24 130.132 941.24 126.835V102.659C941.24 89.8022 932.071 82.8791 918.586 82.8791C905.102 82.8791 896.472 90.6813 895.393 101.011H909.417C909.74 97.8242 912.869 94.4176 918.155 94.4176H919.018C924.304 94.4176 927.648 98.2637 927.648 103.209V104.527L914.056 105.736C903.376 106.615 894.314 112 894.314 123.868C894.314 133.758 902.297 140.022 912.006 140.022ZM914.811 128.484C911.035 128.484 908.122 126.286 908.122 122.879C908.122 118.374 912.437 116.506 915.997 116.176L927.648 114.967V116.505C927.648 123.648 921.93 128.484 915.674 128.484H914.811Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M976.098 140.022C983.649 140.022 989.474 135.626 991.632 131.78V138.923H1005.66V62H991.632V91.1209C989.474 87.2747 983.649 82.8791 976.098 82.8791C960.456 82.8791 952.15 96.6154 952.15 111.451C952.15 126.286 960.456 140.022 976.098 140.022ZM978.471 128.484C971.459 128.484 966.173 121.78 966.173 111.341C966.173 100.901 971.459 94.4176 978.471 94.4176H979.334C985.807 94.4176 991.632 101.011 991.632 111.451C991.632 121.89 985.807 128.484 979.334 128.484H978.471Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M1042.72 140.022C1056.2 140.022 1064.51 132.33 1067.1 121.56H1053.18C1052.21 125.297 1048.98 128.484 1043.69 128.484H1042.83C1037 128.484 1031.18 123.538 1030.64 115.956H1067.1C1067.21 114.198 1067.32 112.44 1067.32 110.791C1067.32 94.8571 1058.9 82.8791 1042.72 82.8791C1026.54 82.8791 1017.05 94.967 1017.05 111.451C1017.05 129.582 1029.24 140.022 1042.72 140.022ZM1030.64 104.967C1030.96 98.3736 1035.92 94.4176 1041.75 94.4176H1042.61C1048.44 94.4176 1053.4 98.3736 1053.72 104.967H1030.64Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M1092.98 138.923V108.374C1092.98 100.681 1098.05 94.967 1104.52 94.967H1105.38C1111.21 94.967 1113.8 98.8132 1113.8 105.956V138.923H1127.82V108.374C1127.82 100.681 1132.89 94.967 1139.36 94.967H1140.23C1146.05 94.967 1148.53 98.8132 1148.53 105.956V138.923H1162.56V104.308C1162.56 92.2198 1157.38 82.8791 1143.36 82.8791C1136.56 82.8791 1129.66 85.6264 1125.56 92.3297C1122.54 86.0659 1116.6 82.8791 1109.05 82.8791C1103.01 82.8791 1096.75 85.5165 1092.98 91.7802V83.978H1078.95V138.923H1092.98Z", fill: color }),
                    React__default["default"].createElement("path", { d: "M1213.54 83.978L1199.52 117.385L1184.96 83.978H1169.21L1192.72 134.637V142.769C1192.72 147.714 1191.64 148.813 1186.79 148.813H1172.44V161.121H1192.08C1201.24 161.121 1206.1 156.176 1206.1 146.835V134.088L1229.08 83.978H1213.54Z", fill: color })));
        }
    }
    return (React__default["default"].createElement(React__default["default"].Fragment, null, logoRender(type)));
};

exports.Arrow = Arrow;
exports.Award = Award;
exports.Book = Book;
exports.BookAlt = BookAlt;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarCheck = CalendarCheck;
exports.CalendarEdit = CalendarEdit;
exports.CalendarEvent = CalendarEvent;
exports.CalendarExclamation = CalendarExclamation;
exports.CalendarHeart = CalendarHeart;
exports.CalendarMinus = CalendarMinus;
exports.CalendarPlus = CalendarPlus;
exports.CalendarStar = CalendarStar;
exports.CalendarWeek = CalendarWeek;
exports.CalendarX = CalendarX;
exports.CheckCircle = CheckCircle;
exports.Close = Close;
exports.Error = Error;
exports.ExternalLink = ExternalLink;
exports.Flex = Flex;
exports.Grid = Grid;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Info = Info;
exports.Logo = Logo;
exports.Mega = Mega;
exports.Megaphone = Megaphone;
exports.Paragraph = Paragraph;
exports.SocialIcon = SocialIcon;
exports.Warning = Warning;
exports.config = config;
exports.createTheme = createTheme;
exports.css = css;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.styled = styled;
exports.theme = theme;
