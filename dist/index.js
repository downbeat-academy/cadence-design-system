'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@stitches/react');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _a;
var styled = (_a = react.createStitches({
    theme: {
        fonts: {
            displayHeadline: "Favorit Expanded, Helvetica, Arial, sans-serif",
            interfaceHeadline: "Favorit, Helvetica, Arial, sans-serif",
            displayBody: "Tiempos Text, Georgia, Times, serif",
            interfaceBody: "Favorit, Helvetica, Arial, sans-serif",
            mono: "Favorit Mono, Courier, monospace",
        },
        colors: {
            passionFruit000: "hsla(235, 85%, 95%, 1)",
            passionFruit100: "hsla(234, 83%, 88%, 1)",
            passionFruit200: "hsla(234, 82%, 82%, 1)",
            passionFruit300: "hsla(234, 82%, 76%, 1)",
            passionFruit400: "hsla(234, 83%, 70%, 1)",
            passionFruit500: "hsla(234, 83%, 64%, 1)",
            passionFruit600: "hsla(234, 53%, 53%, 1)",
            passionFruit700: "hsla(234, 47%, 42%, 1)",
            passionFruit800: "hsla(234, 47%, 31%, 1)",
            passionFruit900: "hsla(235, 46%, 20%, 1)",
            passionFruit1000: "hsla(235, 47%, 10%, 1)",
            pomegranate000: "hsla(350, 86%, 94%, 1)",
            pomegranate100: "hsla(349, 87%, 88%, 1)",
            pomegranate200: "hsla(349, 88%, 81%, 1)",
            pomegranate300: "hsla(349, 86%, 75%, 1)",
            pomegranate400: "hsla(349, 87%, 68%, 1)",
            pomegranate500: "hsla(349, 87%, 62%, 1)",
            pomegranate600: "hsla(349, 57%, 51%, 1)",
            pomegranate700: "hsla(350, 54%, 41%, 1)",
            pomegranate800: "hsla(349, 55%, 30%, 1)",
            pomegranate900: "hsla(349, 54%, 20%, 1)",
            pomegranate1000: "hsla(350, 53%, 9%, 1)",
            blackberry000: "hsla(210, 58%, 95%, 1)",
            blackberry100: "hsla(210, 64%, 94%, 1)",
            blackberry200: "hsla(215, 64%, 86%, 1)",
            blackberry300: "hsla(219, 37%, 69%, 1)",
            blackberry400: "hsla(224, 33%, 58%, 1)",
            blackberry500: "hsla(228, 29%, 49%, 1)",
            blackberry600: "hsla(231, 34%, 41%, 1)",
            blackberry700: "hsla(234, 36%, 34%, 1)",
            blackberry800: "hsla(238, 37%, 28%, 1)",
            blackberry900: "hsla(240, 36%, 22%, 1)",
            blackberry1000: "hsla(225, 80%, 10%, 1)",
            pineapple000: "hsla(49, 91%, 95%, 1)",
            pineapple100: "hsla(48, 92%, 91%, 1)",
            pineapple200: "hsla(48, 92%, 85%, 1)",
            pineapple300: "hsla(48, 90%, 80%, 1)",
            pineapple400: "hsla(48, 90%, 75%, 1)",
            pineapple500: "hsla(48, 91%, 70%, 1)",
            pineapple600: "hsla(50, 78%, 40%, 1)",
            pineapple700: "hsla(51, 52%, 38%, 1)",
            pineapple800: "hsla(52, 54%, 29%, 1)",
            pineapple900: "hsla(52, 55%, 21%, 1)",
            pineapple1000: "hsla(54, 50%, 4%, 1)",
            kale000: "hsla(189, 51%, 93%, 1)",
            kale100: "hsla(189, 51%, 85%, 1)",
            kale200: "hsla(191, 53%, 77%, 1)",
            kale300: "hsla(190, 52%, 69%, 1)",
            kale400: "hsla(190, 52%, 61%, 1)",
            kale500: "hsla(190, 52%, 53%, 1)",
            kale600: "hsla(190, 47%, 44%, 1)",
            kale700: "hsla(190, 47%, 35%, 1)",
            kale800: "hsla(191, 47%, 26%, 1)",
            kale900: "hsla(195, 67%, 13%, 1)",
            kale1000: "hsla(193, 46%, 8%, 1)",
            accent000: "hsla(0, 0%, 100%, 1)",
            accent100: "hsla(240, 80%, 95%, 1)",
            accent200: "hsla(240, 9%, 91%, 1)",
            accent300: "hsla(240, 8%, 85%, 1)",
            accent400: "hsla(240, 8%, 81%, 1)",
            accent500: "hsla(240, 8%, 76%, 1)",
            accent600: "hsla(240, 4%, 61%, 1)",
            accent700: "hsla(240, 3%, 45%, 1)",
            accent800: "hsla(240, 3%, 31%, 1)",
            accent900: "hsla(240, 3%, 15%, 1)",
            accent1000: "hsla(0, 0%, 0%, 1)",
        },
        space: {
            1: "2px",
            2: "4px",
            3: "8px",
            4: "12px",
            5: "16px",
            6: "24px",
            7: "32px",
            8: "40px",
            9: "64px",
            10: "80px",
        },
        fontSizes: {
            displayBase: "1.125rem",
            displayLarge: "1.5rem",
            displaySmall: "0.875rem",
            displayExtraSmall: "0.75rem",
            displayMega: "4rem",
            displayH1: "3rem",
            displayH2: "2.125rem",
            displayH3: "1.75rem",
            displayH4: "1.5rem",
            displayH5: "1.25rem",
            displayH6: "0.875rem",
            interfaceBase: "1rem",
            interfaceLarge: "1.25rem",
            interfaceSmall: "0.875rem",
            interfaceExtraSmall: "0.75rem",
            interfaceH1: "2.5rem",
            interfaceH2: "2rem",
            interfaceH3: "1.65rem",
            interfaceH4: "1.4375rem",
            interfaceH5: "1.1875rem",
            interfaceH6: "1rem",
        },
        lineHeights: {
            displayBody: "1.625",
            displayHeadline: "1.3",
            interfaceBody: "1.5",
            interfaceHeadline: "1.3",
        },
        radii: {},
        letterSpacings: {},
        borderStyles: {},
        borderWidths: {},
        zIndices: {},
        transitions: {
            1: "all 0.1s ease-in-out",
            2: "all 0.2s ease-in-out",
            3: "all 0.3s ease-in-out",
            4: "all 0.4s ease-in-out",
            5: "all 0.5s ease-in-out",
        },
        shadows: {
            base: "0 1px 16px 0 hslaa(240, 36%, 22%, 5%)",
        },
    },
    utils: {},
    media: {
        xs: "(max-width: 375px)",
        sm: "(max-width: 500px)",
        md: "(max-width: 768px)",
        lg: "(max-width: 1200px)",
        xl: "(max-width: 1440px)",
    },
}), _a.styled), css = _a.css, theme = _a.theme, createTheme = _a.createTheme, getCssText = _a.getCssText, globalCss = _a.globalCss, keyframes = _a.keyframes, config = _a.config;

var Button = styled('button', {
    fontFamily: '$interfaceBody',
    fontWeight: 700,
    lineHeight: '$interfaceBody',
    display: 'flex',
    flexDirection: 'row',
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
                '&:hover': { background: '$passionFruit600', },
                '&:focus': {
                    borderColor: '$passionFruit500',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit500, inset 0 0 0 3px $colors$accent100',
                },
                '&:active': { background: '$passionFruit500', },
                ':disabled': {
                    color: '$accent200',
                }
            },
            secondary: {
                background: '$blackberry900',
                color: '$accent000',
                '&:hover': { background: '$blackberry800', },
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
                '&:hover': { background: '$passionFruit000', },
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
    }
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
                lineHeight: '$interfaceHeadline'
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
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
            }
        },
        size: {
            base: {},
            large: {},
            small: {},
            extraSmall: {},
        }
    },
    compoundVariants: [
        {
            context: 'display',
            size: 'base',
            css: {
                fontSize: '$displayBase',
            }
        },
        {
            context: 'display',
            size: 'large',
            css: {
                fontSize: '$displayLarge',
            }
        },
        {
            context: 'display',
            size: 'small',
            css: {
                fontSize: '$displaySmall',
            }
        },
        {
            context: 'display',
            size: 'extraSmall',
            css: {
                fontSize: '$displayExtraSmall',
            }
        },
        {
            context: 'interface',
            size: 'base',
            css: {
                fontSize: '$interfaceBase',
            }
        },
        {
            context: 'interface',
            size: 'large',
            css: {
                fontSize: '$interfaceLarge',
            }
        },
        {
            context: 'interface',
            size: 'small',
            css: {
                fontSize: '$interfaceSmall',
            }
        },
        {
            context: 'interface',
            size: 'extraSmall',
            css: {
                fontSize: '$interfaceExtraSmall',
            }
        },
    ],
    defaultVariants: {
        context: 'display',
        size: 'base'
    }
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
                }
            },
            small: {
                width: '1.5rem',
                height: '1.5rem',
                '& > *': {
                    transform: 'scale(150%)',
                }
            },
            medium: {
                width: '2rem',
                height: '2rem',
                '& > *': {
                    transform: 'scale(200%)',
                }
            },
            large: {
                width: '2.5rem',
                height: '2.5rem',
                '& > *': {
                    transform: 'scale(250%)'
                }
            }
        },
        direction: {
            up: { transform: 'rotate(180deg)', },
            right: { transform: 'rotate(-90deg)', },
            left: { transform: 'rotate(90deg)', },
            down: { transform: 'rotate(0deg)', },
        }
    },
    defaultVariants: {
        size: 'small',
        direction: 'down',
    }
});

function Icon(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.fill, fill = _c === void 0 ? '#000000' : _c;
    function iconRender(icon) {
        switch (icon) {
            case 'info': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M7.99998 1.33334C4.32398 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.676 1.33334 7.99998 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.05931 2.66667 7.99998 2.66667C10.9406 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.33325 7.33333H8.66659V11.3333H7.33325V7.33333ZM7.33325 4.66666H8.66659V6H7.33325V4.66666Z", fill: fill })));
            case 'award': return (React__default["default"].createElement("path", { d: "M3.33325 5.99934C3.33325 7.26734 3.84325 8.41734 4.66659 9.25934V14C4.66616 14.1138 4.69493 14.2258 4.75014 14.3253C4.80535 14.4248 4.88515 14.5085 4.98193 14.5683C5.0787 14.6282 5.18921 14.6622 5.30289 14.6672C5.41657 14.6721 5.52963 14.6479 5.63125 14.5967L7.99992 13.412L10.3686 14.596C10.47 14.6473 10.5828 14.6716 10.6963 14.6666C10.8098 14.6615 10.9201 14.6274 11.0166 14.5673C11.2133 14.4453 11.3333 14.2313 11.3333 14V9.26C12.1881 8.39 12.6669 7.21901 12.6666 5.99934C12.6666 3.42667 10.5733 1.33334 7.99992 1.33334C5.42659 1.33334 3.33325 3.42667 3.33325 5.99934ZM8.29792 12.07C8.2053 12.0237 8.10315 11.9995 7.99959 11.9995C7.89602 11.9995 7.79387 12.0237 7.70125 12.07L5.99992 12.9213V10.21C6.60725 10.4993 7.28392 10.6667 7.99992 10.6667C8.71592 10.6667 9.39259 10.5 9.99992 10.21V12.9207L8.29792 12.07ZM7.99992 2.66667C9.83725 2.66667 11.3333 4.16134 11.3333 5.99934C11.3324 6.88318 10.9809 7.73058 10.356 8.35562C9.7311 8.98066 8.88376 9.33228 7.99992 9.33334C6.16192 9.33334 4.66659 7.838 4.66659 5.99934C4.66764 5.11567 5.01919 4.2685 5.64411 3.64372C6.26902 3.01893 7.11625 2.66755 7.99992 2.66667Z", fill: fill }));
            case 'book': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.2033 3.33333 12.6667C3.33333 12.13 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667ZM3.33333 5.33334V3.33334C3.33333 2.79667 3.7 2.67467 4 2.66667H12.6667V10.6667H3.33333V5.33334Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M5.33325 4H11.3332V5.33333H5.33325V4Z", fill: fill })));
            case 'bookAlt': return (React__default["default"].createElement("path", { d: "M12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.204 3.33333 12.6667C3.33333 12.1293 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334ZM12.6667 10.6667H3.33333V3.33334C3.33333 2.796 3.7 2.67467 4 2.66667H12.6667V10.6667Z", fill: fill }));
            case 'calendar': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M4.66675 7.33334H6.00008V8.66667H4.66675V7.33334ZM4.66675 10H6.00008V11.3333H4.66675V10ZM7.33341 7.33334H8.66675V8.66667H7.33341V7.33334ZM7.33341 10H8.66675V11.3333H7.33341V10ZM10.0001 7.33334H11.3334V8.66667H10.0001V7.33334ZM10.0001 10H11.3334V11.3333H10.0001V10Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667ZM12.6667 5.33334L12.6673 13.3333H3.33333V5.33334H12.6667Z", fill: fill })));
            case 'calendarX': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M5.52869 10.862L6.47135 11.8047L8.00002 10.276L9.52869 11.8047L10.4714 10.862L8.94269 9.33334L10.4714 7.80467L9.52869 6.862L8.00002 8.39067L6.47135 6.862L5.52869 7.80467L7.05735 9.33334L5.52869 10.862Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill })));
            case 'calendarCheck': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.33327 11.6093L11.1379 7.80467L10.1953 6.862L7.33327 9.724L5.8046 8.19533L4.86194 9.138L7.33327 11.6093Z", fill: fill })));
            case 'calendarPlus': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M5.33325 10H7.33325V12H8.66659V10H10.6666V8.66666H8.66659V6.66666H7.33325V8.66666H5.33325V10Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill })));
            case 'calendarMinus': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M5.33325 8.66666H10.6666V10H5.33325V8.66666Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill })));
            case 'calendarExclamation': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.33325 6.66666H8.66659V10H7.33325V6.66666ZM7.33325 10.6667H8.66659V12H7.33325V10.6667Z", fill: fill })));
            case 'calendarEdit': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M10.4187 8.122L9.21867 6.92267L10.132 6.00867L11.332 7.208L10.4187 8.122ZM5.33667 10.8007V12H6.536L9.85334 8.68667L8.654 7.48733L5.33667 10.8007Z", fill: fill })));
            case 'calendarEvent': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M7.33325 8H11.3332V12H7.33325V8Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.6673 13.3333H3.33333V5.33334H12.6667L12.6673 13.3333Z", fill: fill })));
            case 'calendarHeart': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M5.76531 9.80734L7.99797 12L10.2313 9.80734C10.369 9.6749 10.4786 9.51604 10.5534 9.34025C10.6282 9.16447 10.6668 8.97538 10.6668 8.78434C10.6668 8.59329 10.6282 8.40421 10.5534 8.22842C10.4786 8.05264 10.369 7.89377 10.2313 7.76134C9.95371 7.48734 9.57936 7.33371 9.18931 7.33371C8.79926 7.33371 8.42491 7.48734 8.14731 7.76134L7.99797 7.90734L7.84864 7.76134C7.57115 7.48738 7.19691 7.33377 6.80697 7.33377C6.41704 7.33377 6.0428 7.48738 5.76531 7.76134C5.62761 7.89377 5.51806 8.05264 5.44323 8.22842C5.3684 8.40421 5.32983 8.59329 5.32983 8.78434C5.32983 8.97538 5.3684 9.16447 5.44323 9.34025C5.51806 9.51604 5.62761 9.6749 5.76531 9.80734Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill })));
            case 'calendarStar': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M6.65404 9.874L6.34271 11.6913L7.97537 10.8333L9.60804 11.6913L9.29604 9.874L10.6174 8.586L8.79204 8.32066L7.97537 6.66666L7.15871 8.32066L5.33337 8.586L6.65404 9.874Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: fill })));
            case 'calendarWeek': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M4.66663 6.66667V8H11.3333V6H4.66663V6.66667Z", fill: fill })));
            case 'x': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M10.7946 4.22933L7.96598 7.05733L5.13798 4.22933L4.19531 5.172L7.02331 8L4.19531 10.828L5.13798 11.7707L7.96598 8.94267L10.7946 11.7707L11.7373 10.828L8.90931 8L11.7373 5.172L10.7946 4.22933Z", fill: fill })));
            case 'megaphone': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M13.776 2.31867L5.33337 5.33333V10L5.83204 10.178L5.08071 11.6807C4.99513 11.8515 4.94729 12.0387 4.94043 12.2297C4.93357 12.4206 4.96785 12.6108 5.04094 12.7873C5.11403 12.9639 5.22423 13.1226 5.36406 13.2528C5.50389 13.383 5.67009 13.4817 5.85137 13.542L8.57404 14.4493C8.87861 14.5486 9.20863 14.5358 9.50459 14.4132C9.80054 14.2906 10.0429 14.0663 10.188 13.7807L11.0567 12.0433L13.776 13.0147C13.8766 13.0505 13.9843 13.0617 14.0901 13.0473C14.1959 13.0329 14.2966 12.9933 14.3839 12.9318C14.4712 12.8703 14.5425 12.7888 14.5917 12.694C14.6409 12.5993 14.6666 12.4941 14.6667 12.3873V2.946C14.6666 2.83923 14.6409 2.73405 14.5917 2.63931C14.5425 2.54456 14.4712 2.46301 14.3839 2.40153C14.2966 2.34005 14.1959 2.30044 14.0901 2.28602C13.9843 2.2716 13.8766 2.28279 13.776 2.31867ZM8.99537 13.1847L6.27337 12.2773L7.09671 10.63L9.79137 11.5927L8.99537 13.1847ZM2.66671 10H4.00004V5.33333H2.66671C1.93137 5.33333 1.33337 5.93133 1.33337 6.66667V8.66667C1.33337 9.402 1.93137 10 2.66671 10Z", fill: fill })));
            case 'warning': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M7.33404 6.66667H8.66737V10H7.33404V6.66667ZM7.33337 10.6667H8.66671V12H7.33337V10.6667Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M9.17867 2.8C8.94667 2.36333 8.49467 2.092 8.00001 2.092C7.50534 2.092 7.05334 2.36333 6.82134 2.80067L1.92934 12.0427C1.82079 12.2456 1.76701 12.4734 1.77333 12.7034C1.77964 12.9335 1.84582 13.158 1.96534 13.3547C2.08314 13.5523 2.25043 13.7157 2.45071 13.8289C2.65098 13.942 2.8773 14.001 3.10734 14H12.8927C13.3647 14 13.792 13.7587 14.0353 13.3547C14.1547 13.1579 14.2207 12.9335 14.2271 12.7034C14.2334 12.4734 14.1797 12.2457 14.0713 12.0427L9.17867 2.8ZM3.10734 12.6667L8.00001 3.42467L12.896 12.6667H3.10734Z", fill: fill })));
            case 'error': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M7.96865 1.33334C4.30998 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.662 1.33334 7.96865 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.04465 2.66667 7.96865 2.66667C10.9273 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.33337 4.66666H8.66671V9.33333H7.33337V4.66666ZM7.33337 10H8.66671V11.3333H7.33337V10Z", fill: fill })));
            case 'checkCircle': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M8.00004 1.33334C4.32404 1.33334 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33334 8.00004 1.33334ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05934 5.05937 2.66667 8.00004 2.66667C10.9407 2.66667 13.3334 5.05934 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M6.66602 9.058L5.13335 7.528L4.19202 8.472L6.66735 10.942L11.138 6.47133L10.1954 5.52866L6.66602 9.058Z", fill: fill })));
            default: return null;
        }
    }
    return (React__default["default"].createElement(IconWrapper, { fill: 'none', xmlns: 'http://www.w3.org/2000/svg', size: size }, iconRender(icon)));
}

function SocialIcon(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.fill, fill = _c === void 0 ? '#000000' : _c;
    function iconRender(icon) {
        switch (icon) {
            case 'facebook': return (React__default["default"].createElement("path", { d: "M16 8.04868C16 3.60243 12.4194 0 8 0C3.58065 0 0 3.60243 0 8.04868C0 12.073 2.90323 15.4158 6.74194 16V10.3854H4.70968V8.04868H6.74194V6.29615C6.74194 4.28398 7.93548 3.14807 9.74194 3.14807C10.6452 3.14807 11.5484 3.31034 11.5484 3.31034V5.29006H10.5484C9.54839 5.29006 9.22581 5.90669 9.22581 6.55578V8.04868H11.4516L11.0968 10.3854H9.22581V16C13.0645 15.4158 16 12.073 16 8.04868Z", fill: fill }));
            case 'twitter': return (React__default["default"].createElement("path", { d: "M14.3718 4.40379C14.998 3.90809 15.5616 3.31325 16 2.61928C15.4364 2.88365 14.7789 3.08193 14.1213 3.14802C14.8102 2.71842 15.3112 2.05749 15.5616 1.23133C14.9354 1.62788 14.2153 1.9253 13.4951 2.09053C12.8689 1.39656 12.0235 1 11.0841 1C9.2681 1 7.79648 2.55318 7.79648 4.46988C7.79648 4.73425 7.82779 4.99862 7.89041 5.26299C5.16634 5.09776 2.72407 3.70981 1.09589 1.62788C0.81409 2.12358 0.657534 2.71842 0.657534 3.37935C0.657534 4.56902 1.22114 5.62651 2.12916 6.25439C1.59687 6.22134 1.06458 6.08916 0.626223 5.82478V5.85783C0.626223 7.5432 1.75342 8.93115 3.25636 9.26162C3.00587 9.32771 2.69276 9.3938 2.41096 9.3938C2.19178 9.3938 2.00391 9.36076 1.78474 9.32771C2.19178 10.7157 3.41292 11.7071 4.85323 11.7401C3.72603 12.6654 2.31703 13.2272 0.782779 13.2272C0.500978 13.2272 0.250489 13.1941 0 13.1611C1.44031 14.1525 3.16243 14.7143 5.0411 14.7143C11.0841 14.7143 14.3718 9.4599 14.3718 4.86644C14.3718 4.7012 14.3718 4.56902 14.3718 4.40379Z", fill: fill }));
            case 'instagram': return (React__default["default"].createElement("path", { d: "M8.01786 3.875C5.73214 3.875 3.91071 5.73214 3.91071 7.98214C3.91071 10.2679 5.73214 12.0893 8.01786 12.0893C10.2679 12.0893 12.125 10.2679 12.125 7.98214C12.125 5.73214 10.2679 3.875 8.01786 3.875ZM8.01786 10.6607C6.55357 10.6607 5.33929 9.48214 5.33929 7.98214C5.33929 6.51786 6.51786 5.33929 8.01786 5.33929C9.48214 5.33929 10.6607 6.51786 10.6607 7.98214C10.6607 9.48214 9.48214 10.6607 8.01786 10.6607ZM13.2321 3.73214C13.2321 3.19643 12.8036 2.76786 12.2679 2.76786C11.7321 2.76786 11.3036 3.19643 11.3036 3.73214C11.3036 4.26786 11.7321 4.69643 12.2679 4.69643C12.8036 4.69643 13.2321 4.26786 13.2321 3.73214ZM15.9464 4.69643C15.875 3.41071 15.5893 2.26786 14.6607 1.33929C13.7321 0.410714 12.5893 0.125 11.3036 0.0535714C9.98214 -0.0178571 6.01786 -0.0178571 4.69643 0.0535714C3.41071 0.125 2.30357 0.410714 1.33929 1.33929C0.410714 2.26786 0.125 3.41071 0.0535714 4.69643C-0.0178571 6.01786 -0.0178571 9.98214 0.0535714 11.3036C0.125 12.5893 0.410714 13.6964 1.33929 14.6607C2.30357 15.5893 3.41071 15.875 4.69643 15.9464C6.01786 16.0179 9.98214 16.0179 11.3036 15.9464C12.5893 15.875 13.7321 15.5893 14.6607 14.6607C15.5893 13.6964 15.875 12.5893 15.9464 11.3036C16.0179 9.98214 16.0179 6.01786 15.9464 4.69643ZM14.2321 12.6964C13.9821 13.4107 13.4107 13.9464 12.7321 14.2321C11.6607 14.6607 9.16071 14.5536 8.01786 14.5536C6.83929 14.5536 4.33929 14.6607 3.30357 14.2321C2.58929 13.9464 2.05357 13.4107 1.76786 12.6964C1.33929 11.6607 1.44643 9.16071 1.44643 7.98214C1.44643 6.83929 1.33929 4.33929 1.76786 3.26786C2.05357 2.58929 2.58929 2.05357 3.30357 1.76786C4.33929 1.33929 6.83929 1.44643 8.01786 1.44643C9.16071 1.44643 11.6607 1.33929 12.7321 1.76786C13.4107 2.01786 13.9464 2.58929 14.2321 3.26786C14.6607 4.33929 14.5536 6.83929 14.5536 7.98214C14.5536 9.16071 14.6607 11.6607 14.2321 12.6964Z", fill: fill }));
            case 'youtube': return (React__default["default"].createElement("path", { d: "M14.6929 4.58854C14.5393 3.96354 14.053 3.46875 13.4644 3.3125C12.3638 3 8.0128 3 8.0128 3C8.0128 3 3.6362 3 2.53565 3.3125C1.94698 3.46875 1.46069 3.96354 1.30713 4.58854C1 5.68229 1 8.02604 1 8.02604C1 8.02604 1 10.3437 1.30713 11.4635C1.46069 12.0885 1.94698 12.5573 2.53565 12.7135C3.6362 13 8.0128 13 8.0128 13C8.0128 13 12.3638 13 13.4644 12.7135C14.053 12.5573 14.5393 12.0885 14.6929 11.4635C15 10.3437 15 8.02604 15 8.02604C15 8.02604 15 5.68229 14.6929 4.58854ZM6.57952 10.1354V5.91667L10.2139 8.02604L6.57952 10.1354Z", fill: fill }));
            case 'tiktok': return (React__default["default"].createElement("path", { d: "M14.1647 3.75309C13.3641 3.57767 12.6398 3.15406 12.0958 2.54305C11.5518 1.93204 11.2161 1.16503 11.1368 0.352102V0H8.36581V10.9392C8.36638 11.4246 8.21364 11.8978 7.92924 12.2919C7.64485 12.686 7.2432 12.981 6.78121 13.135C6.31922 13.289 5.82029 13.2943 5.35511 13.1501C4.88993 13.0059 4.48208 12.7195 4.18933 12.3316C3.92705 11.9881 3.76645 11.5784 3.72568 11.1488C3.68492 10.7192 3.76561 10.2868 3.95864 9.90046C4.15167 9.51415 4.44934 9.18935 4.81798 8.9628C5.18662 8.73625 5.61153 8.61698 6.04465 8.61849C6.28419 8.61713 6.52253 8.65221 6.75144 8.72252V5.92171C6.48506 5.88884 6.21662 5.87547 5.94827 5.8817C4.95982 5.90802 4.00052 6.22095 3.18784 6.78218C2.37517 7.34341 1.74439 8.12857 1.37275 9.04153C1.00112 9.95448 0.904748 10.9556 1.09545 11.9223C1.28615 12.889 1.75565 13.7793 2.44645 14.4842C3.15443 15.2014 4.06041 15.6926 5.04928 15.8956C6.03814 16.0986 7.06525 16.0041 8.0001 15.6242C8.93494 15.2442 9.73533 14.596 10.2995 13.7618C10.8638 12.9276 11.1664 11.9451 11.1689 10.9392V5.33754C12.2865 6.13293 13.6266 6.55841 15 6.5539V3.83311C14.7302 3.83422 14.461 3.8074 14.1968 3.75309H14.1647Z", fill: fill }));
            default: return null;
        }
    }
    return (React__default["default"].createElement(IconWrapper, { size: size, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, iconRender(icon)));
}

function Arrow(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.fill, fill = _c === void 0 ? '#000000' : _c, direction = _a.direction;
    function iconRender(icon) {
        switch (icon) {
            case 'chevron': return (React__default["default"].createElement("path", { d: "M10.862 6.19533L7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533Z", fill: fill }));
            case 'chevronSquare': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V3.33333C14 2.598 13.402 2 12.6667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14ZM3.33333 3.33333H12.6667L12.6673 12.6667H3.33333V3.33333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z", fill: fill })));
            case 'chevronCircle': return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("path", { d: "M8.00004 1.33333C4.32404 1.33333 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8.00004 1.33333ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05933 5.05937 2.66666 8.00004 2.66666C10.9407 2.66666 13.3334 5.05933 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z", fill: fill }),
                React__default["default"].createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z", fill: fill })));
            case 'arrow': return (React__default["default"].createElement("path", { d: "M7.19533 1.862L7.19533 11.586L3.66667 8.05733L2.724 9L7.862 14.138L13 9L12.0573 8.05733L8.52867 11.586L8.52867 1.862L7.19533 1.862Z", fill: fill }));
            default: return null;
        }
    }
    return (React__default["default"].createElement(IconWrapper, { size: size, direction: direction, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, iconRender(icon)));
}

exports.Arrow = Arrow;
exports.Button = Button;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Icon = Icon;
exports.Mega = Mega;
exports.Paragraph = Paragraph;
exports.SocialIcon = SocialIcon;
exports.config = config;
exports.createTheme = createTheme;
exports.css = css;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.styled = styled;
exports.theme = theme;
