'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@stitches/react');

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
    ]
});

exports.Button = Button;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Mega = Mega;
exports.Paragraph = Paragraph;
exports.config = config;
exports.createTheme = createTheme;
exports.css = css;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.styled = styled;
exports.theme = theme;
