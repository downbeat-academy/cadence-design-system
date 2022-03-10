import { createStitches } from '@stitches/react';
import * as React from 'react';
import React__default from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import BoringAvatar from 'boring-avatars';

var _a$1;
var styled = (_a$1 = createStitches({
    theme: {
        colors: {
            // Color primitives
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
            2: '2px',
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
}), _a$1.styled), css = _a$1.css, theme = _a$1.theme, createTheme = _a$1.createTheme, getCssText = _a$1.getCssText, globalCss = _a$1.globalCss, keyframes = _a$1.keyframes, config = _a$1.config;
createTheme({
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
        blackberry900: '#b8c5e3',
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
});

var Button = styled('button', {
    fontFamily: '$interfaceBody',
    fontWeight: 700,
    lineHeight: '$interfaceBody',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: '0',
    gap: '$4',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    borderRadius: 0,
    transition: '$1',
    textDecoration: 'none',
    '@sm': {
        width: '100%',
    },
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
                background: '$passionFruit600',
                color: '$grayscale100',
                '&:hover': { background: '$passionFruit700' },
                '&:focus': {
                    borderColor: '$passionFruit600',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit600, inset 0 0 0 3px $colors$grayscale100',
                },
                '&:active': { background: '$passionFruit800' },
                ':disabled': {
                    color: '$grayscale200',
                },
            },
            secondary: {
                background: '$blackberry800',
                color: '$grayscale100',
                '&:hover': { background: '$blackberry900' },
                '&:focus': {
                    borderColor: '$blackberry800',
                    boxShadow: 'inset 0 0 0 2px $colors$blackberry800, inset 0 0 0 3px $colors$grayscale100',
                },
                '&:active': { background: '$blackberry1000' },
            },
            tertiary: {
                background: '$grayscale100',
                border: 'solid 1px $passionFruit600',
                color: '$passionFruit600',
                '&:hover': {
                    background: '$passionFruit700',
                    borderColor: '$passionFruit700',
                    color: '$grayscale100',
                },
                '&:focus': {
                    borderColor: '$passionFruit600',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit600, inset 0 0 0 3px $colors$grayscale100',
                },
                '&:active': {
                    color: '$grayscale100',
                    background: '$passionFruit800',
                },
            },
            ghost: {
                background: 'none',
                color: '$passionFruit600',
                '&:hover': { background: '$passionFruit100' },
                '&:focus': {
                    borderColor: '$passionFruit600',
                    boxShadow: 'inset 0 0 0 2px $colors$passionFruit100, inset 0 0 0 3px $colors$passionFruit600',
                },
                '&:active': { background: 'transparent' },
            },
            destructive: {
                background: '$pomegranate400',
                color: '$grayscale100',
                '&:hover': { background: '$pomegranate500' },
                '&:focus': {
                    background: '$pomegranate400',
                    boxShadow: 'inset 0 0 0 2px $colors$pomegranate400, inset 0 0 0 3px $colors$grayscale100',
                },
                '&:active': {
                    background: '$pomegranate600'
                },
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
    margin: '0',
});
var H1 = styled('h1', {
    color: '$blackberry900',
    margin: '0',
    variants: {
        context: {
            display: {
                lineHeight: '$displayHeadline',
                fontFamily: '$displayHeadline',
                fontSize: '$displayH1',
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
    margin: '0',
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
    margin: '0',
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
    margin: '0',
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
    margin: '0',
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
    margin: '0',
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
    '& code': {
        fontFamily: '$mono',
    },
    variants: {
        context: {
            display: {
                fontFamily: '$displayBody',
            },
            interface: {
                fontFamily: '$interfaceBody',
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
            size: 'extraLarge',
            css: {
                fontSize: '$displayExtraLarge',
                lineHeight: '2.5rem',
                margin: '0 0 2.5rem 0',
            }
        },
        {
            context: 'display',
            size: 'large',
            css: {
                fontSize: '$displayLarge',
                lineHeight: '2.25rem',
                margin: '0 0 2.5rem 0',
            },
        },
        {
            context: 'display',
            size: 'base',
            css: {
                fontSize: '$displayBase',
                lineHeight: '2rem',
                margin: '0 0 2rem 0',
            },
        },
        {
            context: 'display',
            size: 'small',
            css: {
                fontSize: '$displaySmall',
                lineHeight: '1.75rem',
                margin: '0 0 1.75rem 0',
            },
        },
        {
            context: 'interface',
            size: 'extraLarge',
            css: {
                fontSize: '$interfaceExtraLarge',
                lineHeight: '2rem',
                margin: '0 0 2rem 0',
            },
        },
        {
            context: 'interface',
            size: 'large',
            css: {
                fontSize: '$interfaceLarge',
                lineHeight: '2rem',
                margin: '0 0 2rem 0',
            },
        },
        {
            context: 'interface',
            size: 'base',
            css: {
                fontSize: '$interfaceBase',
                lineHeight: '1.5rem',
                margin: '0 0 1.5rem 0',
            },
        },
        {
            context: 'interface',
            size: 'small',
            css: {
                fontSize: '$interfaceSmall',
                lineHeight: '1.5rem',
                margin: '0 0 1.5rem 0',
            },
        },
        {
            context: 'interface',
            size: 'extraSmall',
            css: {
                fontSize: '$interfaceExtraSmall',
                lineHeight: '1rem',
                margin: '0 0 1rem 0',
            },
        },
    ],
    defaultVariants: {
        context: 'display',
        size: 'base',
    },
});

var OrderedList = styled('ol', {
    color: '$blackberry900',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '$6',
    marginLeft: '$6',
    marginBottom: '$6',
    'li': {
        paddingLeft: '$3',
    },
    variants: {
        context: {
            display: {
                fontFamily: '$displayBody',
                fontSize: '$displayBase',
                lineHeight: '$displayBody',
            },
            interface: {
                fontFamily: '$interfaceBody',
                fontSize: '$interfaceBody',
                lineHeight: '$interfaceBody',
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
});
var UnorderedList = styled('ul', {
    color: '$blackberry900',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '$6',
    marginLeft: '$6',
    marginBottom: '$6',
    'li': {
        paddingLeft: '$3',
    },
    variants: {
        context: {
            display: {
                fontFamily: '$displayBody',
                fontSize: '$displayBase',
                lineHeight: '$displayBody',
            },
            interface: {
                fontFamily: '$interfaceBody',
                fontSize: '$interfaceBase',
                lineHeight: '$interfaceBody',
            }
        }
    },
    defaultVariants: {
        context: 'display'
    }
});
var DefinitionList = styled('dl', {
    color: '$blackberry900',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '$6',
    marginLeft: '$6',
    marginBottom: '$6',
    'dd, dt': {
        paddingLeft: '$3',
    },
    variants: {
        context: {
            display: {
                fontFamily: '$displayBody',
                fontSize: '$displayBase',
                lineHeight: '$displayBody',
            },
            interface: {
                fontFamily: '$interfaceBody',
                fontSize: '$interfaceBase',
                lineHeight: '$interfaceBody',
            }
        }
    },
    defaultVariants: {
        context: 'display'
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

var Facebook = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M16 8.04868C16 3.60243 12.4194 0 8 0C3.58065 0 0 3.60243 0 8.04868C0 12.073 2.90323 15.4158 6.74194 16V10.3854H4.70968V8.04868H6.74194V6.29615C6.74194 4.28398 7.93548 3.14807 9.74194 3.14807C10.6452 3.14807 11.5484 3.31034 11.5484 3.31034V5.29006H10.5484C9.54839 5.29006 9.22581 5.90669 9.22581 6.55578V8.04868H11.4516L11.0968 10.3854H9.22581V16C13.0645 15.4158 16 12.073 16 8.04868Z", fill: color })));
});

var Instagram = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M8.01786 3.875C5.73214 3.875 3.91071 5.73214 3.91071 7.98214C3.91071 10.2679 5.73214 12.0893 8.01786 12.0893C10.2679 12.0893 12.125 10.2679 12.125 7.98214C12.125 5.73214 10.2679 3.875 8.01786 3.875ZM8.01786 10.6607C6.55357 10.6607 5.33929 9.48214 5.33929 7.98214C5.33929 6.51786 6.51786 5.33929 8.01786 5.33929C9.48214 5.33929 10.6607 6.51786 10.6607 7.98214C10.6607 9.48214 9.48214 10.6607 8.01786 10.6607ZM13.2321 3.73214C13.2321 3.19643 12.8036 2.76786 12.2679 2.76786C11.7321 2.76786 11.3036 3.19643 11.3036 3.73214C11.3036 4.26786 11.7321 4.69643 12.2679 4.69643C12.8036 4.69643 13.2321 4.26786 13.2321 3.73214ZM15.9464 4.69643C15.875 3.41071 15.5893 2.26786 14.6607 1.33929C13.7321 0.410714 12.5893 0.125 11.3036 0.0535714C9.98214 -0.0178571 6.01786 -0.0178571 4.69643 0.0535714C3.41071 0.125 2.30357 0.410714 1.33929 1.33929C0.410714 2.26786 0.125 3.41071 0.0535714 4.69643C-0.0178571 6.01786 -0.0178571 9.98214 0.0535714 11.3036C0.125 12.5893 0.410714 13.6964 1.33929 14.6607C2.30357 15.5893 3.41071 15.875 4.69643 15.9464C6.01786 16.0179 9.98214 16.0179 11.3036 15.9464C12.5893 15.875 13.7321 15.5893 14.6607 14.6607C15.5893 13.6964 15.875 12.5893 15.9464 11.3036C16.0179 9.98214 16.0179 6.01786 15.9464 4.69643ZM14.2321 12.6964C13.9821 13.4107 13.4107 13.9464 12.7321 14.2321C11.6607 14.6607 9.16071 14.5536 8.01786 14.5536C6.83929 14.5536 4.33929 14.6607 3.30357 14.2321C2.58929 13.9464 2.05357 13.4107 1.76786 12.6964C1.33929 11.6607 1.44643 9.16071 1.44643 7.98214C1.44643 6.83929 1.33929 4.33929 1.76786 3.26786C2.05357 2.58929 2.58929 2.05357 3.30357 1.76786C4.33929 1.33929 6.83929 1.44643 8.01786 1.44643C9.16071 1.44643 11.6607 1.33929 12.7321 1.76786C13.4107 2.01786 13.9464 2.58929 14.2321 3.26786C14.6607 4.33929 14.5536 6.83929 14.5536 7.98214C14.5536 9.16071 14.6607 11.6607 14.2321 12.6964Z", fill: color })));
});

var Soundcloud = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M1.98066 8.12533C1.95333 8.12533 1.92866 8.15067 1.92533 8.18L1.796 9.378L1.92533 10.5487C1.92866 10.5813 1.95333 10.6033 1.98066 10.6033C2.008 10.6033 2.03066 10.5813 2.03666 10.5487L2.17733 9.378L2.02733 8.18C2.02733 8.14933 2.00266 8.12533 1.978 8.12533H1.98066ZM1.478 8.586C1.444 8.586 1.42733 8.606 1.41933 8.63867L1.32733 9.378L1.41933 10.106C1.41933 10.1367 1.444 10.158 1.46933 10.158C1.49533 10.158 1.518 10.1327 1.52733 10.1L1.64466 9.36667L1.52733 8.62533C1.52733 8.59133 1.50266 8.57467 1.47733 8.57467L1.478 8.586ZM2.49466 7.89133C2.46 7.89133 2.428 7.91733 2.428 7.94933L2.31066 9.37533L2.436 10.7427C2.436 10.7753 2.46066 10.8093 2.502 10.8093C2.53666 10.8093 2.56133 10.7753 2.57 10.7427L2.71066 9.36667L2.57 7.94933C2.56133 7.91667 2.53533 7.88267 2.502 7.88267L2.49466 7.89133ZM3.02866 7.83267C2.98666 7.83267 2.95266 7.86667 2.94466 7.908L2.83733 9.37533L2.95533 10.7907C2.96333 10.8327 2.996 10.8667 3.03666 10.8667C3.07933 10.8667 3.112 10.8327 3.12 10.784L3.254 9.37533L3.12 7.91733C3.12018 7.90754 3.11839 7.8978 3.11474 7.8887C3.11109 7.87961 3.10566 7.87134 3.09876 7.86438C3.09186 7.85742 3.08364 7.85191 3.07458 7.84818C3.06552 7.84445 3.0558 7.84258 3.046 7.84267L3.02866 7.83267V7.83267ZM3.67 8.03333C3.66974 8.02201 3.66723 8.01085 3.66262 8.00051C3.65801 7.99017 3.65138 7.98084 3.64313 7.97309C3.63487 7.96533 3.62516 7.95929 3.61455 7.95533C3.60394 7.95137 3.59265 7.94956 3.58133 7.95C3.5583 7.94943 3.53594 7.95779 3.51892 7.97331C3.5019 7.98884 3.49154 8.01035 3.49 8.03333L3.36866 9.384L3.48133 10.8093C3.48124 10.8209 3.48346 10.8323 3.48786 10.843C3.49226 10.8537 3.49875 10.8634 3.50695 10.8715C3.51514 10.8797 3.52489 10.8861 3.5356 10.8904C3.54631 10.8947 3.55778 10.8968 3.56933 10.8967C3.61066 10.8967 3.65133 10.86 3.65133 10.8087L3.77733 9.38267L3.65133 8.02533L3.67 8.03333V8.03333ZM4.11933 7.08267C4.09326 7.08368 4.06854 7.09457 4.05022 7.11315C4.03189 7.13172 4.02132 7.15658 4.02066 7.18267L3.90333 9.38267L4.00733 10.8087C4.00733 10.86 4.05133 10.9 4.10733 10.9C4.15933 10.9 4.204 10.8507 4.20733 10.8L4.32333 9.37533L4.208 7.16667C4.20333 7.108 4.15866 7.06533 4.108 7.06533L4.11933 7.08267ZM4.64133 6.55733C4.61245 6.55853 4.58499 6.57023 4.56412 6.59024C4.54326 6.61025 4.53041 6.63719 4.528 6.666L4.428 9.37467L4.52 10.7913C4.52 10.858 4.57 10.9073 4.62866 10.9073C4.686 10.9073 4.736 10.858 4.74466 10.7913L4.85266 9.37467L4.74533 6.67333C4.73666 6.60667 4.68666 6.55667 4.62866 6.55667L4.64133 6.55733ZM5.17933 6.30867C5.11133 6.30867 5.062 6.35733 5.054 6.424L4.96133 9.35733L5.054 10.7587C5.062 10.8253 5.11133 10.884 5.17933 10.884C5.21219 10.883 5.24341 10.8694 5.2666 10.8461C5.28978 10.8228 5.30316 10.7915 5.304 10.7587L5.41266 9.35733L5.30333 6.424C5.30333 6.35733 5.24533 6.29867 5.178 6.29867L5.17933 6.30867ZM5.87 6.324C5.87027 6.3065 5.86702 6.28913 5.86045 6.27291C5.85388 6.2567 5.84412 6.24196 5.83174 6.22959C5.81937 6.21722 5.80464 6.20745 5.78842 6.20088C5.7722 6.19431 5.75483 6.19106 5.73733 6.19133C5.70223 6.192 5.66873 6.20616 5.64379 6.23086C5.61884 6.25556 5.60435 6.28891 5.60333 6.324L5.52 9.34933L5.60266 10.742C5.61266 10.816 5.67 10.8747 5.74533 10.8747C5.82066 10.8747 5.87933 10.816 5.87933 10.742L5.97 9.34933L5.87933 6.316L5.87 6.324V6.324ZM6.28666 6.25C6.21133 6.25 6.14466 6.31667 6.14466 6.39067L6.06133 9.35L6.14466 10.7253C6.14466 10.8087 6.21133 10.8673 6.28666 10.8673C6.32527 10.8661 6.36186 10.8498 6.38854 10.8218C6.41523 10.7939 6.42987 10.7566 6.42933 10.718L6.51266 9.342L6.41933 6.39C6.41933 6.30867 6.35266 6.24 6.26933 6.24L6.28666 6.25ZM6.828 6.33267C6.80722 6.33258 6.78664 6.33661 6.76743 6.34451C6.74822 6.35242 6.73077 6.36406 6.71608 6.37875C6.70139 6.39344 6.68975 6.41089 6.68185 6.4301C6.67394 6.44931 6.66991 6.46989 6.67 6.49067L6.61266 9.35067L6.688 10.726C6.688 10.8087 6.75466 10.88 6.84533 10.88C6.92866 10.88 6.99666 10.8133 7.00333 10.722L7.07066 9.36333L6.996 6.52C6.98933 6.42867 6.92066 6.36133 6.838 6.36133L6.828 6.33267ZM7.49666 5.83733C7.46857 5.82088 7.43655 5.81236 7.404 5.81267C7.37066 5.81267 7.33733 5.82133 7.31266 5.83733C7.28757 5.85182 7.26669 5.8726 7.25207 5.89761C7.23746 5.92263 7.22962 5.95103 7.22933 5.98V6.01333L7.172 9.376L7.236 10.738V10.7427C7.24 10.776 7.252 10.8173 7.276 10.8427C7.30933 10.8767 7.356 10.9 7.40666 10.9C7.45011 10.8977 7.49138 10.8802 7.52333 10.8507C7.53968 10.8342 7.55258 10.8146 7.56128 10.7931C7.56998 10.7716 7.5743 10.7485 7.574 10.7253L7.58266 10.5913L7.64733 9.366L7.572 5.98267C7.57162 5.95615 7.56466 5.93015 7.55175 5.90699C7.53883 5.88383 7.52036 5.86425 7.498 5.85L7.49666 5.83733V5.83733ZM8.05466 5.53267C8.04437 5.52105 8.0316 5.5119 8.01729 5.5059C8.00297 5.4999 7.9875 5.4972 7.972 5.498C7.93057 5.4965 7.88981 5.50868 7.856 5.53267C7.83576 5.54876 7.81929 5.5691 7.80777 5.59226C7.79625 5.61541 7.78996 5.64081 7.78933 5.66667V5.682L7.71333 9.35733L7.75533 10.0333L7.79 10.692C7.79106 10.7404 7.81132 10.7865 7.84633 10.82C7.88133 10.8535 7.92822 10.8717 7.97666 10.8707C8.02511 10.8696 8.07115 10.8493 8.10466 10.8143C8.13816 10.7793 8.15639 10.7324 8.15533 10.684L8.23866 9.342L8.15533 5.65133C8.1546 5.6199 8.14575 5.5892 8.12962 5.56221C8.1135 5.53522 8.09066 5.51287 8.06333 5.49733L8.05466 5.53267ZM13.0313 7.59733C12.8073 7.59733 12.5893 7.64533 12.3987 7.726C12.3582 7.27903 12.2143 6.8476 11.9784 6.46582C11.7424 6.08404 11.4209 5.76239 11.0392 5.52628C10.6576 5.29018 10.2262 5.1461 9.77925 5.10544C9.3323 5.06477 8.88201 5.12865 8.464 5.292C8.33866 5.342 8.31266 5.39267 8.30533 5.49267V10.7007C8.30817 10.7493 8.32813 10.7954 8.36168 10.8308C8.39523 10.8662 8.44021 10.8886 8.48866 10.894H13.04C13.2544 10.8959 13.467 10.8553 13.6655 10.7744C13.864 10.6935 14.0445 10.574 14.1964 10.4228C14.3484 10.2716 14.4688 10.0917 14.5507 9.89356C14.6325 9.69544 14.6742 9.48303 14.6733 9.26867C14.6744 8.83436 14.5029 8.4174 14.1966 8.10949C13.8903 7.80157 13.4743 7.6279 13.04 7.62667", fill: color })));
});

var Spotify = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M8.00667 1.34599C4.34333 1.34599 1.346 4.34333 1.346 8.00666C1.346 11.6693 4.34333 14.6667 8.00667 14.6667C11.6693 14.6667 14.6667 11.6693 14.6667 8.00666C14.6667 4.34333 11.7027 1.34599 8.00667 1.34599ZM11.07 10.97C10.9373 11.1693 10.704 11.2367 10.5033 11.104C8.93733 10.1373 6.97267 9.93733 4.64133 10.47C4.40933 10.538 4.20933 10.3713 4.14267 10.1707C4.07533 9.93733 4.242 9.73866 4.44267 9.67133C6.97267 9.10466 9.17133 9.33866 10.9027 10.4047C11.136 10.504 11.1693 10.77 11.07 10.97ZM11.87 9.13866C11.7027 9.37133 11.4033 9.47133 11.1693 9.30466C9.37133 8.20733 6.64133 7.87266 4.54333 8.53933C4.278 8.60666 3.97667 8.47266 3.91067 8.20733C3.84333 7.93933 3.97733 7.63933 4.24333 7.57266C6.674 6.84066 9.672 7.20733 11.736 8.47333C11.936 8.57266 12.036 8.90533 11.87 9.13866V9.13866ZM11.936 7.27266C9.80467 6.00799 6.24133 5.87466 4.20933 6.50866C4.0548 6.55319 3.88906 6.53647 3.74654 6.46198C3.60401 6.38749 3.49566 6.26095 3.444 6.10866C3.39868 5.95394 3.41493 5.7877 3.48936 5.64469C3.56378 5.50168 3.69062 5.39298 3.84333 5.34133C6.208 4.64199 10.1047 4.77466 12.5693 6.24199C12.8687 6.40799 12.9687 6.80799 12.802 7.10733C12.6353 7.34066 12.236 7.43933 11.936 7.27266Z", fill: color })));
});

var TikTok = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M14.1647 3.75309C13.3641 3.57767 12.6398 3.15406 12.0958 2.54305C11.5518 1.93204 11.2161 1.16503 11.1368 0.352102V0H8.36581V10.9392C8.36638 11.4246 8.21364 11.8978 7.92924 12.2919C7.64485 12.686 7.2432 12.981 6.78121 13.135C6.31922 13.289 5.82029 13.2943 5.35511 13.1501C4.88993 13.0059 4.48208 12.7195 4.18933 12.3316C3.92705 11.9881 3.76645 11.5784 3.72568 11.1488C3.68492 10.7192 3.76561 10.2868 3.95864 9.90046C4.15167 9.51415 4.44934 9.18935 4.81798 8.9628C5.18662 8.73625 5.61153 8.61698 6.04465 8.61849C6.28419 8.61713 6.52253 8.65221 6.75144 8.72252V5.92171C6.48506 5.88884 6.21662 5.87547 5.94827 5.8817C4.95982 5.90802 4.00052 6.22095 3.18784 6.78218C2.37517 7.34341 1.74439 8.12857 1.37275 9.04153C1.00112 9.95448 0.904748 10.9556 1.09545 11.9223C1.28615 12.889 1.75565 13.7793 2.44645 14.4842C3.15443 15.2014 4.06041 15.6926 5.04928 15.8956C6.03814 16.0986 7.06525 16.0041 8.0001 15.6242C8.93494 15.2442 9.73533 14.596 10.2995 13.7618C10.8638 12.9276 11.1664 11.9451 11.1689 10.9392V5.33754C12.2865 6.13293 13.6266 6.55841 15 6.5539V3.83311C14.7302 3.83422 14.461 3.8074 14.1968 3.75309H14.1647Z", fill: color })));
});

var Twitter = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M14.3718 4.40379C14.998 3.90809 15.5616 3.31325 16 2.61928C15.4364 2.88365 14.7789 3.08193 14.1213 3.14802C14.8102 2.71842 15.3112 2.05749 15.5616 1.23133C14.9354 1.62788 14.2153 1.9253 13.4951 2.09053C12.8689 1.39656 12.0235 1 11.0841 1C9.2681 1 7.79648 2.55318 7.79648 4.46988C7.79648 4.73425 7.82779 4.99862 7.89041 5.26299C5.16634 5.09776 2.72407 3.70981 1.09589 1.62788C0.81409 2.12358 0.657534 2.71842 0.657534 3.37935C0.657534 4.56902 1.22114 5.62651 2.12916 6.25439C1.59687 6.22134 1.06458 6.08916 0.626223 5.82478V5.85783C0.626223 7.5432 1.75342 8.93115 3.25636 9.26162C3.00587 9.32771 2.69276 9.3938 2.41096 9.3938C2.19178 9.3938 2.00391 9.36076 1.78474 9.32771C2.19178 10.7157 3.41292 11.7071 4.85323 11.7401C3.72603 12.6654 2.31703 13.2272 0.782779 13.2272C0.500978 13.2272 0.250489 13.1941 0 13.1611C1.44031 14.1525 3.16243 14.7143 5.0411 14.7143C11.0841 14.7143 14.3718 9.4599 14.3718 4.86644C14.3718 4.7012 14.3718 4.56902 14.3718 4.40379Z", fill: color })));
});

var YouTube = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M14.6929 4.58854C14.5393 3.96354 14.053 3.46875 13.4644 3.3125C12.3638 3 8.0128 3 8.0128 3C8.0128 3 3.6362 3 2.53565 3.3125C1.94698 3.46875 1.46069 3.96354 1.30713 4.58854C1 5.68229 1 8.02604 1 8.02604C1 8.02604 1 10.3437 1.30713 11.4635C1.46069 12.0885 1.94698 12.5573 2.53565 12.7135C3.6362 13 8.0128 13 8.0128 13C8.0128 13 12.3638 13 13.4644 12.7135C14.053 12.5573 14.5393 12.0885 14.6929 11.4635C15 10.3437 15 8.02604 15 8.02604C15 8.02604 15 5.68229 14.6929 4.58854ZM6.57952 10.1354V5.91667L10.2139 8.02604L6.57952 10.1354Z", fill: color })));
});

var LinkedIn = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M3.322 4.798C4.1276 4.798 4.78067 4.14493 4.78067 3.33933C4.78067 2.53373 4.1276 1.88067 3.322 1.88067C2.5164 1.88067 1.86333 2.53373 1.86333 3.33933C1.86333 4.14493 2.5164 4.798 3.322 4.798Z", fill: color }),
        React.createElement("path", { d: "M6.158 5.90333V13.996H8.67066V9.994C8.67066 8.938 8.86933 7.91533 10.1787 7.91533C11.47 7.91533 11.486 9.12267 11.486 10.0607V13.9967H14V9.55867C14 7.37867 13.5307 5.70333 10.9827 5.70333C9.75933 5.70333 8.93933 6.37467 8.604 7.01H8.57V5.90333H6.158V5.90333ZM2.06333 5.90333H4.58V13.996H2.06333V5.90333Z", fill: color })));
});

var Medium = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M2.85667 4.846C2.86435 4.76948 2.85387 4.69222 2.82607 4.62051C2.79826 4.54881 2.75393 4.48468 2.69667 4.43333L1.51667 3.01133V2.798H5.182L8.01533 9.01133L10.506 2.798H14V3.01067L12.99 3.978C12.9477 4.01092 12.9151 4.05457 12.8954 4.10439C12.8757 4.15422 12.8697 4.20841 12.878 4.26133V11.372C12.8695 11.4249 12.8755 11.4792 12.8952 11.529C12.9149 11.5789 12.9476 11.6225 12.99 11.6553L13.976 12.6227V12.8353H9.01867V12.6227L10.038 11.6313C10.1393 11.5313 10.1393 11.5013 10.1393 11.3487V5.60067L7.3 12.812H6.91667L3.61133 5.60067V10.4333C3.584 10.6367 3.65133 10.8413 3.79467 10.9887L5.12267 12.6V12.8127H1.35733V12.6L2.68533 10.9887C2.7552 10.9159 2.80708 10.8277 2.83682 10.7313C2.86657 10.6349 2.87337 10.5328 2.85667 10.4333V4.846Z", fill: color })));
});

var Google = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M13.522 6.904H7.97067V9.20467H11.1653C10.868 10.6667 9.62333 11.5067 7.97067 11.5067C7.50822 11.5075 7.05017 11.4169 6.62279 11.2403C6.1954 11.0637 5.80709 10.8044 5.48012 10.4774C5.15316 10.1504 4.89397 9.76201 4.71743 9.33459C4.54088 8.90718 4.45046 8.44911 4.45133 7.98666C4.45054 7.52428 4.54104 7.06628 4.71762 6.63894C4.8942 6.2116 5.1534 5.82332 5.48036 5.49636C5.80732 5.1694 6.1956 4.9102 6.62294 4.73362C7.05028 4.55703 7.50828 4.46654 7.97067 4.46733C8.81 4.46733 9.56867 4.76533 10.164 5.25267L11.8973 3.52C10.8413 2.59933 9.48733 2.03133 7.97067 2.03133C7.18787 2.02904 6.41235 2.18154 5.6887 2.48005C4.96505 2.77855 4.30756 3.21718 3.75404 3.7707C3.20052 4.32422 2.76189 4.98172 2.46338 5.70536C2.16487 6.42901 2.01238 7.20454 2.01467 7.98733C2.01229 8.77015 2.16473 9.54571 2.4632 10.2694C2.76168 10.9931 3.2003 11.6506 3.75384 12.2042C4.30738 12.7577 4.96491 13.1963 5.6886 13.4948C6.41228 13.7933 7.18785 13.9457 7.97067 13.9433C10.9487 13.9433 13.6567 11.7773 13.6567 7.98733C13.6567 7.63533 13.6027 7.256 13.522 6.904Z", fill: color })));
});

function Arrow(_a) {
    var _b = _a.size, size = _b === void 0 ? 'small' : _b, icon = _a.icon, _c = _a.color, color = _c === void 0 ? '#000000' : _c, direction = _a.direction;
    function iconRender(icon) {
        switch (icon) {
            case 'chevron':
                return (React__default.createElement("path", { d: "M10.862 6.19533L7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533Z" }));
            case 'chevronSquare':
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("path", { d: "M3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V3.33333C14 2.598 13.402 2 12.6667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14ZM3.33333 3.33333H12.6667L12.6673 12.6667H3.33333V3.33333Z" }),
                    React__default.createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z" })));
            case 'chevronCircle':
                return (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("path", { d: "M8.00004 1.33333C4.32404 1.33333 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8.00004 1.33333ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05933 5.05937 2.66666 8.00004 2.66666C10.9407 2.66666 13.3334 5.05933 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z" }),
                    React__default.createElement("path", { d: "M7.99998 9.05733L5.13798 6.19533L4.19531 7.13799L7.99998 10.9427L11.8046 7.13799L10.862 6.19533L7.99998 9.05733Z" })));
            case 'arrow':
                return (React__default.createElement("path", { d: "M7.19533 1.862L7.19533 11.586L3.66667 8.05733L2.724 9L7.862 14.138L13 9L12.0573 8.05733L8.52867 11.586L8.52867 1.862L7.19533 1.862Z" }));
            default:
                return null;
        }
    }
    return (React__default.createElement(ArrowWrapper, { xmlns: "http://www.w3.org/2000/svg", fill: "none", size: size, color: color, direction: direction, css: {
            '> *': {
                fill: "".concat(color),
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

var Info = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M7.99998 1.33334C4.32398 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.676 1.33334 7.99998 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.05931 2.66667 7.99998 2.66667C10.9406 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: color }),
        React.createElement("path", { d: "M7.33325 7.33333H8.66659V11.3333H7.33325V7.33333ZM7.33325 4.66666H8.66659V6H7.33325V4.66666Z", fill: color })));
});

var Award = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M3.33325 5.99934C3.33325 7.26734 3.84325 8.41734 4.66659 9.25934V14C4.66616 14.1138 4.69493 14.2258 4.75014 14.3253C4.80535 14.4248 4.88515 14.5085 4.98193 14.5683C5.0787 14.6282 5.18921 14.6622 5.30289 14.6672C5.41657 14.6721 5.52963 14.6479 5.63125 14.5967L7.99992 13.412L10.3686 14.596C10.47 14.6473 10.5828 14.6716 10.6963 14.6666C10.8098 14.6615 10.9201 14.6274 11.0166 14.5673C11.2133 14.4453 11.3333 14.2313 11.3333 14V9.26C12.1881 8.39 12.6669 7.21901 12.6666 5.99934C12.6666 3.42667 10.5733 1.33334 7.99992 1.33334C5.42659 1.33334 3.33325 3.42667 3.33325 5.99934ZM8.29792 12.07C8.2053 12.0237 8.10315 11.9995 7.99959 11.9995C7.89602 11.9995 7.79387 12.0237 7.70125 12.07L5.99992 12.9213V10.21C6.60725 10.4993 7.28392 10.6667 7.99992 10.6667C8.71592 10.6667 9.39259 10.5 9.99992 10.21V12.9207L8.29792 12.07ZM7.99992 2.66667C9.83725 2.66667 11.3333 4.16134 11.3333 5.99934C11.3324 6.88318 10.9809 7.73058 10.356 8.35562C9.7311 8.98066 8.88376 9.33228 7.99992 9.33334C6.16192 9.33334 4.66659 7.838 4.66659 5.99934C4.66764 5.11567 5.01919 4.2685 5.64411 3.64372C6.26902 3.01893 7.11625 2.66755 7.99992 2.66667Z", fill: color })));
});

var BookAlt = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.204 3.33333 12.6667C3.33333 12.1293 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334ZM12.6667 10.6667H3.33333V3.33334C3.33333 2.796 3.7 2.67467 4 2.66667H12.6667V10.6667Z", fill: color })));
});

var Book = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M4 14.6667H14V13.3333H4.008C3.7 13.3253 3.33333 13.2033 3.33333 12.6667C3.33333 12.13 3.7 12.008 4.008 12H14V2.66667C14 1.93134 13.402 1.33334 12.6667 1.33334H4C3.196 1.33334 2 1.866 2 3.33334V12.6667C2 14.134 3.196 14.6667 4 14.6667ZM3.33333 5.33334V3.33334C3.33333 2.79667 3.7 2.67467 4 2.66667H12.6667V10.6667H3.33333V5.33334Z", fill: color }),
        React.createElement("path", { d: "M5.33325 4H11.3332V5.33333H5.33325V4Z", fill: color })));
});

var Calendar = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M4.66675 7.33334H6.00008V8.66667H4.66675V7.33334ZM4.66675 10H6.00008V11.3333H4.66675V10ZM7.33341 7.33334H8.66675V8.66667H7.33341V7.33334ZM7.33341 10H8.66675V11.3333H7.33341V10ZM10.0001 7.33334H11.3334V8.66667H10.0001V7.33334ZM10.0001 10H11.3334V11.3333H10.0001V10Z", fill: color }),
        React.createElement("path", { d: "M3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667ZM12.6667 5.33334L12.6673 13.3333H3.33333V5.33334H12.6667Z", fill: color })));
});

var CalendarX = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M5.52869 10.862L6.47135 11.8047L8.00002 10.276L9.52869 11.8047L10.4714 10.862L8.94269 9.33334L10.4714 7.80467L9.52869 6.862L8.00002 8.39067L6.47135 6.862L5.52869 7.80467L7.05735 9.33334L5.52869 10.862Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarCheck = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color }),
        React.createElement("path", { d: "M7.33327 11.6093L11.1379 7.80467L10.1953 6.862L7.33327 9.724L5.8046 8.19533L4.86194 9.138L7.33327 11.6093Z", fill: color })));
});

var CalendarPlus = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M5.33325 10H7.33325V12H8.66659V10H10.6666V8.66666H8.66659V6.66666H7.33325V8.66666H5.33325V10Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarMinus = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M5.33325 8.66666H10.6666V10H5.33325V8.66666Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarExclamation = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color }),
        React.createElement("path", { d: "M7.33325 6.66666H8.66659V10H7.33325V6.66666ZM7.33325 10.6667H8.66659V12H7.33325V10.6667Z", fill: color })));
});

var CalendarEdit = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: color }),
        React.createElement("path", { d: "M10.4187 8.122L9.21867 6.92267L10.132 6.00867L11.332 7.208L10.4187 8.122ZM5.33667 10.8007V12H6.536L9.85334 8.68667L8.654 7.48733L5.33667 10.8007Z", fill: color })));
});

var CalendarEvent = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M7.33325 8H11.3332V12H7.33325V8Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.6673 13.3333H3.33333V5.33334H12.6667L12.6673 13.3333Z", fill: color })));
});

var CalendarHeart = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M5.76531 9.80734L7.99797 12L10.2313 9.80734C10.369 9.6749 10.4786 9.51604 10.5534 9.34025C10.6282 9.16447 10.6668 8.97538 10.6668 8.78434C10.6668 8.59329 10.6282 8.40421 10.5534 8.22842C10.4786 8.05264 10.369 7.89377 10.2313 7.76134C9.95371 7.48734 9.57936 7.33371 9.18931 7.33371C8.79926 7.33371 8.42491 7.48734 8.14731 7.76134L7.99797 7.90734L7.84864 7.76134C7.57115 7.48738 7.19691 7.33377 6.80697 7.33377C6.41704 7.33377 6.0428 7.48738 5.76531 7.76134C5.62761 7.89377 5.51806 8.05264 5.44323 8.22842C5.3684 8.40421 5.32983 8.59329 5.32983 8.78434C5.32983 8.97538 5.3684 9.16447 5.44323 9.34025C5.51806 9.51604 5.62761 9.6749 5.76531 9.80734V9.80734Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarStar = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M6.65404 9.874L6.34271 11.6913L7.97537 10.8333L9.60804 11.6913L9.29604 9.874L10.6174 8.586L8.79204 8.32066L7.97537 6.66666L7.15871 8.32066L5.33337 8.586L6.65404 9.874Z", fill: color }),
        React.createElement("path", { d: "M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z", fill: color })));
});

var CalendarWeek = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M12.6667 2.66667H10.6667V1.33334H9.33333V2.66667H6.66667V1.33334H5.33333V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM3.33333 13.3333V4.66667H12.6667V4L12.668 13.3333H3.33333Z", fill: color }),
        React.createElement("path", { d: "M4.66663 6.66667V8H11.3333V6H4.66663V6.66667Z", fill: color })));
});

var Close = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M10.7946 4.22933L7.96598 7.05733L5.13798 4.22933L4.19531 5.172L7.02331 8L4.19531 10.828L5.13798 11.7707L7.96598 8.94267L10.7946 11.7707L11.7373 10.828L8.90931 8L11.7373 5.172L10.7946 4.22933Z", fill: color })));
});

var Megaphone = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M13.776 2.31867L5.33337 5.33333V10L5.83204 10.178L5.08071 11.6807C4.99513 11.8515 4.94729 12.0387 4.94043 12.2297C4.93357 12.4206 4.96785 12.6108 5.04094 12.7873C5.11403 12.9639 5.22423 13.1226 5.36406 13.2528C5.50389 13.383 5.67009 13.4817 5.85137 13.542L8.57404 14.4493C8.87861 14.5486 9.20863 14.5358 9.50459 14.4132C9.80054 14.2906 10.0429 14.0663 10.188 13.7807L11.0567 12.0433L13.776 13.0147C13.8766 13.0505 13.9843 13.0617 14.0901 13.0473C14.1959 13.0329 14.2966 12.9933 14.3839 12.9318C14.4712 12.8703 14.5425 12.7888 14.5917 12.694C14.6409 12.5993 14.6666 12.4941 14.6667 12.3873V2.946C14.6666 2.83923 14.6409 2.73405 14.5917 2.63931C14.5425 2.54456 14.4712 2.46301 14.3839 2.40153C14.2966 2.34005 14.1959 2.30044 14.0901 2.28602C13.9843 2.2716 13.8766 2.28279 13.776 2.31867ZM8.99537 13.1847L6.27337 12.2773L7.09671 10.63L9.79137 11.5927L8.99537 13.1847ZM2.66671 10H4.00004V5.33333H2.66671C1.93137 5.33333 1.33337 5.93133 1.33337 6.66667V8.66667C1.33337 9.402 1.93137 10 2.66671 10Z", fill: color })));
});

var Warning = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M7.33404 6.66667H8.66737V10H7.33404V6.66667ZM7.33337 10.6667H8.66671V12H7.33337V10.6667Z", fill: color }),
        React.createElement("path", { d: "M9.17867 2.8C8.94667 2.36333 8.49467 2.092 8.00001 2.092C7.50534 2.092 7.05334 2.36333 6.82134 2.80067L1.92934 12.0427C1.82079 12.2456 1.76701 12.4734 1.77333 12.7034C1.77964 12.9335 1.84582 13.158 1.96534 13.3547C2.08314 13.5523 2.25043 13.7157 2.45071 13.8289C2.65098 13.942 2.8773 14.001 3.10734 14H12.8927C13.3647 14 13.792 13.7587 14.0353 13.3547C14.1547 13.1579 14.2207 12.9335 14.2271 12.7034C14.2334 12.4734 14.1797 12.2457 14.0713 12.0427L9.17867 2.8ZM3.10734 12.6667L8.00001 3.42467L12.896 12.6667H3.10734Z", fill: color })));
});

var Error = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M7.96865 1.33334C4.30998 1.33334 1.33331 4.324 1.33331 8C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.676 14.6667 14.6666 11.676 14.6666 8C14.6666 4.324 11.662 1.33334 7.96865 1.33334ZM7.99998 13.3333C5.05931 13.3333 2.66665 10.9407 2.66665 8C2.66665 5.05934 5.04465 2.66667 7.96865 2.66667C10.9273 2.66667 13.3333 5.05934 13.3333 8C13.3333 10.9407 10.9406 13.3333 7.99998 13.3333Z", fill: color }),
        React.createElement("path", { d: "M7.33337 4.66666H8.66671V9.33333H7.33337V4.66666ZM7.33337 10H8.66671V11.3333H7.33337V10Z", fill: color })));
});

var CheckCircle = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M8.00004 1.33334C4.32404 1.33334 1.33337 4.324 1.33337 8C1.33337 11.676 4.32404 14.6667 8.00004 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33334 8.00004 1.33334ZM8.00004 13.3333C5.05937 13.3333 2.66671 10.9407 2.66671 8C2.66671 5.05934 5.05937 2.66667 8.00004 2.66667C10.9407 2.66667 13.3334 5.05934 13.3334 8C13.3334 10.9407 10.9407 13.3333 8.00004 13.3333Z", fill: color }),
        React.createElement("path", { d: "M6.66602 9.058L5.13335 7.528L4.19202 8.472L6.66735 10.942L11.138 6.47133L10.1954 5.52866L6.66602 9.058Z", fill: color })));
});

var ExternalLink = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M8.66665 2L10.862 4.19533L6.19531 8.862L7.13798 9.80467L11.8046 5.138L14 7.33333V2H8.66665Z", fill: color }),
        React.createElement("path", { d: "M12.6667 12.6667H3.33333V3.33333H8L6.66667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V9.33333L12.6667 8V12.6667Z", fill: color })));
});

var QuoteLeft = React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M2.46066 4.19467C3.39599 3.18067 4.81132 2.66667 6.66666 2.66667H7.33332V4.546L6.79732 4.65334C5.88399 4.836 5.24866 5.19534 4.90866 5.72267C4.73125 6.00676 4.63064 6.33203 4.61666 6.66667H6.66666C6.84347 6.66667 7.01304 6.73691 7.13806 6.86193C7.26309 6.98696 7.33332 7.15653 7.33332 7.33334V12C7.33332 12.7353 6.73532 13.3333 5.99999 13.3333H1.99999C1.82318 13.3333 1.65361 13.2631 1.52859 13.1381C1.40356 13.0131 1.33332 12.8435 1.33332 12.6667V9.33334L1.33532 7.38734C1.32932 7.31334 1.20266 5.56 2.46066 4.19467ZM13.3333 13.3333H9.33332C9.15651 13.3333 8.98694 13.2631 8.86192 13.1381C8.7369 13.0131 8.66666 12.8435 8.66666 12.6667V9.33334L8.66866 7.38734C8.66266 7.31334 8.53599 5.56 9.79399 4.19467C10.7293 3.18067 12.1447 2.66667 14 2.66667H14.6667V4.546L14.1307 4.65334C13.2173 4.836 12.582 5.19534 12.242 5.72267C12.0646 6.00676 11.964 6.33203 11.95 6.66667H14C14.1768 6.66667 14.3464 6.73691 14.4714 6.86193C14.5964 6.98696 14.6667 7.15653 14.6667 7.33334V12C14.6667 12.7353 14.0687 13.3333 13.3333 13.3333Z", fill: color })));
});
React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size, props = __rest(_a, ["color", "size"]);
    return (React.createElement(IconWrapper, __assign({ fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M13.5393 11.8053C14.7973 10.44 14.6707 8.68667 14.6667 8.66667V3.33334C14.6667 3.15653 14.5964 2.98696 14.4714 2.86193C14.3464 2.73691 14.1768 2.66667 14 2.66667H10C9.26467 2.66667 8.66667 3.26467 8.66667 4.00001V8.66667C8.66667 8.84348 8.73691 9.01305 8.86194 9.13808C8.98696 9.2631 9.15653 9.33334 9.33334 9.33334H11.3853C11.3713 9.66293 11.2728 9.98338 11.0993 10.264C10.7607 10.798 10.1227 11.1627 9.20201 11.3467L8.66667 11.4533V13.3333H9.33334C11.1887 13.3333 12.604 12.8193 13.5393 11.8053ZM6.20134 11.8053C7.46001 10.44 7.33267 8.68667 7.32867 8.66667V3.33334C7.32867 3.15653 7.25844 2.98696 7.13341 2.86193C7.00839 2.73691 6.83882 2.66667 6.66201 2.66667H2.66201C1.92667 2.66667 1.32867 3.26467 1.32867 4.00001V8.66667C1.32867 8.84348 1.39891 9.01305 1.52394 9.13808C1.64896 9.2631 1.81853 9.33334 1.99534 9.33334H4.04734C4.03326 9.66293 3.93478 9.98338 3.76134 10.264C3.42267 10.798 2.78467 11.1627 1.86401 11.3467L1.32867 11.4533V13.3333H1.99534C3.85067 13.3333 5.26601 12.8193 6.20134 11.8053V11.8053Z", fill: color })));
});

React.forwardRef(function (_a, forwardedRef) {
    var _b = _a.color, color = _b === void 0 ? 'currentColor' : _b, size = _a.size; _a.style; var props = __rest(_a, ["color", "size", "style"]);
    return (React.createElement(IconWrapper, __assign({ size: size, fill: "none", xmlns: "http://www.w3.org/2000/svg", color: color, css: {
            '> *': {
                fill: "".concat(color),
            },
        } }, props, { ref: forwardedRef }),
        React.createElement("path", { d: "M5.33334 4.66667H7.33334V11.3333H5.33334V4.66667ZM8.66668 4.66667H10.6667V11.3333H8.66668V4.66667Z", fill: color })));
});

var _a;
var Blockquote = function (_a) {
    var children = _a.children, attribution = _a.attribution, source = _a.source;
    return (React__default.createElement(Wrapper, null,
        React__default.createElement("div", { className: 'quote-symbol' },
            React__default.createElement(QuoteLeft, { color: '$grayscale100', size: 'small' })),
        React__default.createElement(Quote, null,
            "\"",
            children,
            "\""),
        React__default.createElement("div", { className: 'attribution-wrapper' },
            attribution && React__default.createElement(Paragraph, { size: 'small' },
                "\u2014 ",
                React__default.createElement("em", null, attribution)),
            source && React__default.createElement(Paragraph, { size: 'extraSmall' },
                React__default.createElement("a", { href: source, target: 'blank' },
                    React__default.createElement("em", null, source))))));
};
var Wrapper = styled('section', (_a = {
        padding: '$8',
        margin: '$8 $6',
        background: '$blackberry100',
        color: '$blackberry900',
        display: 'flex',
        flexDirection: 'column',
        gap: '$5',
        border: '1px solid $passionFruit600',
        position: 'relative',
        '@md': {
            margin: '$6 0',
            padding: '$6',
        }
    },
    _a["".concat(Paragraph)] = {
        margin: '0',
    },
    _a['.quote-symbol'] = {
        position: 'absolute',
        top: '-24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        background: '$passionFruit600',
        borderRadius: '40px',
    },
    _a['.attribution-wrapper'] = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        'a': {
            color: '$passionFruit600',
        }
    },
    _a));
var Quote = styled('blockquote', {
    fontFamily: '$displayBody',
    fontSize: '$displayLarge',
    lineHeight: '$displayBody',
    margin: '0',
    padding: '0',
});

var Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    variants: {
        direction: {
            row: { flexDirection: 'row' },
            column: { flexDirection: 'column' },
            rowReverse: { flexDirection: 'row-reverse' },
            columnReverse: { flexDirection: 'column-reverse' },
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
                return (React__default.createElement(SvgWrapper, { width: width, viewBox: "0 0 250 250", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "".concat(color)
                        }
                    } },
                    React__default.createElement("path", { d: "M176.652 143.385C176.652 143.385 180.226 131.888 191.402 120.543C200.312 111.477 220.8 96.1305 220.8 96.1305C220.8 96.1305 220.8 153.059 220.8 153.009C220.8 206.594 177.659 250 124.4 250C71.1408 250 28 206.544 28 153.009C28 100.132 66.1572 67.5142 98.173 60.0689C150.878 47.812 148.412 122.265 148.412 122.265C142.824 117.96 131.85 114.769 124.652 114.769C103.811 114.769 86.897 131.787 86.897 152.755C86.897 173.724 103.811 190.741 124.652 190.741C145.492 190.741 162.406 173.724 162.406 152.755V0C162.406 0.151945 224.978 15.1945 220.8 57.4858C218.685 78.8594 193.113 96.8902 183.196 114.465C173.481 131.635 176.652 143.385 176.652 143.385Z", fill: color })));
            case 'text':
                return (React__default.createElement(SvgWrapper, { width: width, viewBox: "0 0 1000 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "".concat(color)
                        }
                    } },
                    React__default.createElement("path", { d: "M26.645 76.9231C49.2988 76.9231 64.4012 63.7363 64.4012 38.4615C64.4012 13.1868 48.7594 0 26.1057 0H0.215698V76.9231H26.645ZM14.7788 13.1868H25.0269C39.59 13.1868 49.8381 19.2308 49.8381 38.4615C49.8381 57.6923 39.59 63.7363 25.0269 63.7363H14.7788V13.1868Z", fill: color }),
                    React__default.createElement("path", { d: "M100.184 78.022C116.365 78.022 127.152 65.9341 127.152 49.4506C127.152 32.967 116.365 20.8791 100.184 20.8791C84.0024 20.8791 73.215 32.967 73.215 49.4506C73.215 65.9341 84.0024 78.022 100.184 78.022ZM99.7522 66.4835C92.2009 66.4835 87.3466 60.2198 87.3466 49.4506C87.3466 38.6813 92.2009 32.4176 99.7522 32.4176H100.615C108.166 32.4176 113.021 38.6813 113.021 49.4506C113.021 60.2198 108.166 66.4835 100.615 66.4835H99.7522Z", fill: color }),
                    React__default.createElement("path", { d: "M189.658 62.4176L180.273 21.978H165.279L156.541 62.7473L145.753 21.978H131.622L148.126 76.9231H163.876L172.83 38.4615L182.323 76.9231H198.073L213.499 21.978H199.906L189.658 62.4176Z", fill: color }),
                    React__default.createElement("path", { d: "M236.693 76.9231V46.3736C236.693 38.6813 241.871 32.4176 248.344 32.4176H249.207C254.601 32.4176 257.729 36.2637 257.729 43.4066V76.9231H271.753V41.7582C271.753 29.6703 265.927 20.8791 252.983 20.8791C245.971 20.8791 239.93 24.5055 236.693 30V21.978H222.67V76.9231H236.693Z", fill: color }),
                    React__default.createElement("path", { d: "M315.225 78.022C330.866 78.022 339.173 64.2857 339.173 49.4506C339.173 34.6154 330.866 20.8791 315.225 20.8791C307.673 20.8791 301.848 25.2747 299.691 29.1209V0H285.667V76.9231H299.691V69.7802C301.848 73.6264 307.673 78.022 315.225 78.022ZM311.988 66.4835C305.516 66.4835 299.691 59.8901 299.691 49.4506C299.691 39.011 305.516 32.4176 311.988 32.4176H312.851C319.863 32.4176 325.149 38.9011 325.149 49.3407C325.149 59.7802 319.863 66.4835 312.851 66.4835H311.988Z", fill: color }),
                    React__default.createElement("path", { d: "M373.109 78.022C386.593 78.022 394.899 70.3297 397.488 59.5604H383.573C382.602 63.2967 379.365 66.4835 374.08 66.4835H373.217C367.391 66.4835 361.566 61.5385 361.027 53.956H397.488C397.596 52.1978 397.704 50.4396 397.704 48.7912C397.704 32.8571 389.29 20.8791 373.109 20.8791C356.928 20.8791 347.435 32.967 347.435 49.4506C347.435 67.5824 359.624 78.022 373.109 78.022ZM361.027 42.967C361.35 36.3736 366.313 32.4176 372.138 32.4176H373.001C378.826 32.4176 383.788 36.3736 384.112 42.967H361.027Z", fill: color }),
                    React__default.createElement("path", { d: "M423.907 78.022C430.919 78.022 436.636 74.9451 439.872 70.2198C439.98 72.7473 440.196 75.2747 440.52 76.9231H453.68C453.141 73.0769 453.141 68.1319 453.141 64.8352V40.6593C453.141 27.8022 443.972 20.8791 430.487 20.8791C417.003 20.8791 408.373 28.6813 407.294 39.011H421.318C421.641 35.8242 424.77 32.4176 430.056 32.4176H430.919C436.205 32.4176 439.549 36.2637 439.549 41.2088V42.5275L425.956 43.7363C415.277 44.6154 406.215 50 406.215 61.8681C406.215 71.7582 414.198 78.022 423.907 78.022ZM426.712 66.4835C422.936 66.4835 420.023 64.2857 420.023 60.8791C420.023 56.3736 424.338 54.5055 427.898 54.1758L439.549 52.967V54.5055C439.549 61.6484 433.831 66.4835 427.575 66.4835H426.712Z", fill: color }),
                    React__default.createElement("path", { d: "M500.199 76.9231V64.8352H492.432C487.577 64.8352 486.499 63.7363 486.499 58.7912V33.5165H498.581V21.978H486.499V4.17582H472.475V21.978H461.364V33.5165H472.475V62.6374C472.475 71.978 477.329 76.9231 486.499 76.9231H500.199Z", fill: color }),
                    React__default.createElement("path", { d: "M602.271 76.9231L573.145 0H556.101L526.219 76.9231H541.538L548.334 58.7912H580.049L586.845 76.9231H602.271ZM564.191 16.4835L575.087 45.6044H553.296L564.191 16.4835Z", fill: color }),
                    React__default.createElement("path", { d: "M632.161 78.022C646.185 78.022 655.354 71.4286 656.433 57.6923H642.409C641.546 63.0769 638.418 66.4835 632.592 66.4835H631.729C623.747 66.4835 620.295 58.7912 620.295 49.4506C620.295 40.1099 623.747 32.4176 631.729 32.4176H632.592C638.418 32.4176 641.546 35.8242 642.409 41.2088H656.433C655.354 27.4725 646.185 20.8791 632.161 20.8791C617.598 20.8791 606.271 31.8681 606.271 49.4506C606.271 67.033 617.598 78.022 632.161 78.022Z", fill: color }),
                    React__default.createElement("path", { d: "M682.006 78.022C689.018 78.022 694.735 74.9451 697.971 70.2198C698.079 72.7473 698.295 75.2747 698.619 76.9231H711.779C711.24 73.0769 711.24 68.1319 711.24 64.8352V40.6593C711.24 27.8022 702.071 20.8791 688.586 20.8791C675.102 20.8791 666.472 28.6813 665.393 39.011H679.417C679.74 35.8242 682.869 32.4176 688.155 32.4176H689.018C694.304 32.4176 697.648 36.2637 697.648 41.2088V42.5275L684.056 43.7363C673.376 44.6154 664.314 50 664.314 61.8681C664.314 71.7582 672.297 78.022 682.006 78.022ZM684.811 66.4835C681.035 66.4835 678.122 64.2857 678.122 60.8791C678.122 56.3736 682.437 54.5055 685.997 54.1758L697.648 52.967V54.5055C697.648 61.6484 691.93 66.4835 685.674 66.4835H684.811Z", fill: color }),
                    React__default.createElement("path", { d: "M746.098 78.022C753.649 78.022 759.474 73.6264 761.632 69.7802V76.9231H775.656V0H761.632V29.1209C759.474 25.2747 753.649 20.8791 746.098 20.8791C730.456 20.8791 722.15 34.6154 722.15 49.4506C722.15 64.2857 730.456 78.022 746.098 78.022ZM748.471 66.4835C741.459 66.4835 736.173 59.7802 736.173 49.3407C736.173 38.9011 741.459 32.4176 748.471 32.4176H749.334C755.807 32.4176 761.632 39.011 761.632 49.4506C761.632 59.8901 755.807 66.4835 749.334 66.4835H748.471Z", fill: color }),
                    React__default.createElement("path", { d: "M812.72 78.022C826.204 78.022 834.511 70.3297 837.1 59.5604H823.184C822.213 63.2967 818.977 66.4835 813.691 66.4835H812.828C807.002 66.4835 801.177 61.5385 800.638 53.956H837.1C837.207 52.1978 837.315 50.4396 837.315 48.7912C837.315 32.8571 828.901 20.8791 812.72 20.8791C796.539 20.8791 787.046 32.967 787.046 49.4506C787.046 67.5824 799.236 78.022 812.72 78.022ZM800.638 42.967C800.961 36.3736 805.924 32.4176 811.749 32.4176H812.612C818.437 32.4176 823.399 36.3736 823.723 42.967H800.638Z", fill: color }),
                    React__default.createElement("path", { d: "M862.979 76.9231V46.3736C862.979 38.6813 868.049 32.967 874.521 32.967H875.384C881.209 32.967 883.798 36.8132 883.798 43.9561V76.9231H897.822V46.3736C897.822 38.6813 902.892 32.967 909.365 32.967H910.228C916.053 32.967 918.534 36.8132 918.534 43.9561V76.9231H932.558V42.3077C932.558 30.2198 927.38 20.8791 913.356 20.8791C906.56 20.8791 899.656 23.6264 895.557 30.3297C892.536 24.0659 886.603 20.8791 879.052 20.8791C873.011 20.8791 866.754 23.5165 862.979 29.7802V21.978H848.955V76.9231H862.979Z", fill: color }),
                    React__default.createElement("path", { d: "M983.542 21.978L969.519 55.3846L954.955 21.978H939.206L962.722 72.6374V80.7692C962.722 85.7143 961.644 86.8132 956.789 86.8132H942.442V99.1209H962.075C971.244 99.1209 976.099 94.1758 976.099 84.8352V72.0879L999.076 21.978H983.542Z", fill: color })));
            case 'lockup':
                return (React__default.createElement(SvgWrapper, { width: width, viewBox: "0 0 1244 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: {
                        '> *': {
                            fill: "".concat(color)
                        }
                    } },
                    React__default.createElement("path", { d: "M141.322 114.708C141.322 114.708 144.181 105.511 153.121 96.4344C160.249 89.1815 176.64 76.9044 176.64 76.9044C176.64 76.9044 176.64 122.447 176.64 122.407C176.64 165.276 142.127 200 99.5199 200C56.9127 200 22.4 165.235 22.4 122.407C22.4 80.1054 52.9258 54.0113 78.5385 48.0551C120.703 38.2496 118.729 97.812 118.729 97.812C114.259 94.3679 105.48 91.8152 99.7213 91.8152C83.0489 91.8152 69.5176 105.429 69.5176 122.204C69.5176 138.979 83.0489 152.593 99.7213 152.593C116.394 152.593 129.925 138.979 129.925 122.204V0C129.925 0.121556 179.982 12.1556 176.64 45.9887C174.948 63.0875 154.49 77.5122 146.557 91.5721C138.785 105.308 141.322 114.708 141.322 114.708Z", fill: color }),
                    React__default.createElement("path", { d: "M256.645 138.923C279.299 138.923 294.401 125.736 294.401 100.462C294.401 75.1868 278.759 62 256.106 62H230.216V138.923H256.645ZM244.779 75.1868H255.027C269.59 75.1868 279.838 81.2308 279.838 100.462C279.838 119.692 269.59 125.736 255.027 125.736H244.779V75.1868Z", fill: color }),
                    React__default.createElement("path", { d: "M330.184 140.022C346.365 140.022 357.152 127.934 357.152 111.451C357.152 94.967 346.365 82.8791 330.184 82.8791C314.002 82.8791 303.215 94.967 303.215 111.451C303.215 127.934 314.002 140.022 330.184 140.022ZM329.752 128.484C322.201 128.484 317.347 122.22 317.347 111.451C317.347 100.681 322.201 94.4176 329.752 94.4176H330.615C338.166 94.4176 343.021 100.681 343.021 111.451C343.021 122.22 338.166 128.484 330.615 128.484H329.752Z", fill: color }),
                    React__default.createElement("path", { d: "M419.658 124.418L410.273 83.978H395.279L386.541 124.747L375.753 83.978H361.622L378.126 138.923H393.876L402.83 100.462L412.323 138.923H428.073L443.499 83.978H429.906L419.658 124.418Z", fill: color }),
                    React__default.createElement("path", { d: "M466.693 138.923V108.374C466.693 100.681 471.871 94.4176 478.344 94.4176H479.207C484.601 94.4176 487.729 98.2637 487.729 105.407V138.923H501.753V103.758C501.753 91.6703 495.927 82.8791 482.983 82.8791C475.971 82.8791 469.93 86.5055 466.693 92V83.978H452.67V138.923H466.693Z", fill: color }),
                    React__default.createElement("path", { d: "M545.225 140.022C560.866 140.022 569.173 126.286 569.173 111.451C569.173 96.6154 560.866 82.8791 545.225 82.8791C537.673 82.8791 531.848 87.2747 529.691 91.1209V62H515.667V138.923H529.691V131.78C531.848 135.626 537.673 140.022 545.225 140.022ZM541.988 128.484C535.516 128.484 529.691 121.89 529.691 111.451C529.691 101.011 535.516 94.4176 541.988 94.4176H542.851C549.863 94.4176 555.149 100.901 555.149 111.341C555.149 121.78 549.863 128.484 542.851 128.484H541.988Z", fill: color }),
                    React__default.createElement("path", { d: "M603.109 140.022C616.593 140.022 624.899 132.33 627.488 121.56H613.573C612.602 125.297 609.365 128.484 604.08 128.484H603.217C597.391 128.484 591.566 123.538 591.027 115.956H627.488C627.596 114.198 627.704 112.44 627.704 110.791C627.704 94.8571 619.29 82.8791 603.109 82.8791C586.928 82.8791 577.435 94.967 577.435 111.451C577.435 129.582 589.624 140.022 603.109 140.022ZM591.027 104.967C591.35 98.3736 596.313 94.4176 602.138 94.4176H603.001C608.826 94.4176 613.788 98.3736 614.112 104.967H591.027Z", fill: color }),
                    React__default.createElement("path", { d: "M653.907 140.022C660.919 140.022 666.636 136.945 669.872 132.22C669.98 134.747 670.196 137.275 670.52 138.923H683.68C683.141 135.077 683.141 130.132 683.141 126.835V102.659C683.141 89.8022 673.972 82.8791 660.487 82.8791C647.003 82.8791 638.373 90.6813 637.294 101.011H651.318C651.641 97.8242 654.77 94.4176 660.056 94.4176H660.919C666.205 94.4176 669.549 98.2637 669.549 103.209V104.527L655.956 105.736C645.277 106.615 636.215 112 636.215 123.868C636.215 133.758 644.198 140.022 653.907 140.022ZM656.712 128.484C652.936 128.484 650.023 126.286 650.023 122.879C650.023 118.374 654.338 116.506 657.898 116.176L669.549 114.967V116.505C669.549 123.648 663.831 128.484 657.575 128.484H656.712Z", fill: color }),
                    React__default.createElement("path", { d: "M730.199 138.923V126.835H722.432C717.577 126.835 716.499 125.736 716.499 120.791V95.5165H728.581V83.978H716.499V66.1758H702.475V83.978H691.364V95.5165H702.475V124.637C702.475 133.978 707.329 138.923 716.499 138.923H730.199Z", fill: color }),
                    React__default.createElement("path", { d: "M832.271 138.923L803.145 62H786.101L756.219 138.923H771.538L778.334 120.791H810.049L816.845 138.923H832.271ZM794.191 78.4835L805.087 107.604H783.296L794.191 78.4835Z", fill: color }),
                    React__default.createElement("path", { d: "M862.161 140.022C876.185 140.022 885.354 133.429 886.433 119.692H872.409C871.546 125.077 868.418 128.484 862.592 128.484H861.729C853.747 128.484 850.295 120.791 850.295 111.451C850.295 102.11 853.747 94.4176 861.729 94.4176H862.592C868.418 94.4176 871.546 97.8242 872.409 103.209H886.433C885.354 89.4725 876.185 82.8791 862.161 82.8791C847.598 82.8791 836.271 93.8681 836.271 111.451C836.271 129.033 847.598 140.022 862.161 140.022Z", fill: color }),
                    React__default.createElement("path", { d: "M912.006 140.022C919.018 140.022 924.735 136.945 927.971 132.22C928.079 134.747 928.295 137.275 928.619 138.923H941.779C941.24 135.077 941.24 130.132 941.24 126.835V102.659C941.24 89.8022 932.071 82.8791 918.586 82.8791C905.102 82.8791 896.472 90.6813 895.393 101.011H909.417C909.74 97.8242 912.869 94.4176 918.155 94.4176H919.018C924.304 94.4176 927.648 98.2637 927.648 103.209V104.527L914.056 105.736C903.376 106.615 894.314 112 894.314 123.868C894.314 133.758 902.297 140.022 912.006 140.022ZM914.811 128.484C911.035 128.484 908.122 126.286 908.122 122.879C908.122 118.374 912.437 116.506 915.997 116.176L927.648 114.967V116.505C927.648 123.648 921.93 128.484 915.674 128.484H914.811Z", fill: color }),
                    React__default.createElement("path", { d: "M976.098 140.022C983.649 140.022 989.474 135.626 991.632 131.78V138.923H1005.66V62H991.632V91.1209C989.474 87.2747 983.649 82.8791 976.098 82.8791C960.456 82.8791 952.15 96.6154 952.15 111.451C952.15 126.286 960.456 140.022 976.098 140.022ZM978.471 128.484C971.459 128.484 966.173 121.78 966.173 111.341C966.173 100.901 971.459 94.4176 978.471 94.4176H979.334C985.807 94.4176 991.632 101.011 991.632 111.451C991.632 121.89 985.807 128.484 979.334 128.484H978.471Z", fill: color }),
                    React__default.createElement("path", { d: "M1042.72 140.022C1056.2 140.022 1064.51 132.33 1067.1 121.56H1053.18C1052.21 125.297 1048.98 128.484 1043.69 128.484H1042.83C1037 128.484 1031.18 123.538 1030.64 115.956H1067.1C1067.21 114.198 1067.32 112.44 1067.32 110.791C1067.32 94.8571 1058.9 82.8791 1042.72 82.8791C1026.54 82.8791 1017.05 94.967 1017.05 111.451C1017.05 129.582 1029.24 140.022 1042.72 140.022ZM1030.64 104.967C1030.96 98.3736 1035.92 94.4176 1041.75 94.4176H1042.61C1048.44 94.4176 1053.4 98.3736 1053.72 104.967H1030.64Z", fill: color }),
                    React__default.createElement("path", { d: "M1092.98 138.923V108.374C1092.98 100.681 1098.05 94.967 1104.52 94.967H1105.38C1111.21 94.967 1113.8 98.8132 1113.8 105.956V138.923H1127.82V108.374C1127.82 100.681 1132.89 94.967 1139.36 94.967H1140.23C1146.05 94.967 1148.53 98.8132 1148.53 105.956V138.923H1162.56V104.308C1162.56 92.2198 1157.38 82.8791 1143.36 82.8791C1136.56 82.8791 1129.66 85.6264 1125.56 92.3297C1122.54 86.0659 1116.6 82.8791 1109.05 82.8791C1103.01 82.8791 1096.75 85.5165 1092.98 91.7802V83.978H1078.95V138.923H1092.98Z", fill: color }),
                    React__default.createElement("path", { d: "M1213.54 83.978L1199.52 117.385L1184.96 83.978H1169.21L1192.72 134.637V142.769C1192.72 147.714 1191.64 148.813 1186.79 148.813H1172.44V161.121H1192.08C1201.24 161.121 1206.1 156.176 1206.1 146.835V134.088L1229.08 83.978H1213.54Z", fill: color })));
        }
    }
    return (React__default.createElement(React__default.Fragment, null, logoRender(type)));
};

var Divider = styled('hr', {
    border: '0',
    backgroundColor: '$grayscale300',
    variants: {
        width: {
            1: {
                height: '1px',
            },
            2: {
                height: '2px',
            },
            4: {
                height: '4px',
            }
        }
    },
    defaultVariants: {
        width: 1,
    }
});

var Input = styled('input', {
    backgroundColor: '$grayscale100',
    border: '1px solid $grayscale400',
    fontFamily: '$interfaceBody',
    lineHeight: '$interfaceBody',
    color: '$blackberry1000',
    transition: '$1',
    width: '100%',
    boxSizing: 'border-box',
    '&:placeholder': {
        color: '$grayscale600',
    },
    '&:hover': {
        borderColor: '$grayscale600',
    },
    '&:focus': {
        borderColor: '$grayscale800',
        outline: 'none',
    },
    '&:disabled': {
        ponterEvents: 'none',
        cursor: 'not-allowed',
        backgroundColor: '$grayscale100',
        '&:hover': {
            borderColor: '$grayscale400',
        },
        '&::placeholder': {
            color: '$blackberry900',
        }
    },
    '&:read-only': {
        backgroundColor: '$grayscale100',
        '&::placeholder': {
            color: '$blackberry900',
        }
    },
    variants: {
        size: {
            small: {},
            default: {
                fontSize: '$interfaceBase',
                padding: '$3 $4',
            },
            large: {},
        },
    },
    defaultVariants: {
        size: 'default'
    }
});

var Label = styled(LabelPrimitive.Root, {
    fontFamily: '$interfaceBody',
    fontWeight: '800',
    color: '$blackberry1000',
    variants: {
        size: {
            small: {},
            default: {
                fontSize: '$interfaceSmall',
            },
            large: {},
        }
    },
    defaultVariants: {
        size: 'default',
    }
});

var HelperText = styled('p', {
    fontFamily: '$interfaceBody',
    margin: '0',
    variants: {
        size: {
            small: {},
            default: {
                fontSize: '$interfaceSmall',
                lineHeight: '$interfaceBody',
            },
            large: {},
        },
        state: {
            default: {
                color: '$blackberry500',
            },
            warning: {},
            error: {},
            success: {}
        }
    },
    defaultVariants: {
        size: 'default',
        state: 'default',
    }
});

var TextArea = styled('textarea', {
    appearance: 'none',
    backgroundColor: '$grayscale100',
    border: '1px solid $grayscale400',
    fontFamily: '$interfaceBody',
    lineHeight: '$interfaceBody',
    color: '$blackberry1000',
    transition: '$1',
    width: '100%',
    boxSizing: 'border-box',
    '&:focus': {
        borderColor: '$grayscale800',
        outline: 'none',
    },
    '&:disabled': {
        ponterEvents: 'none',
        cursor: 'not-allowed',
        backgroundColor: '$grayscale100',
        '&:hover': {
            borderColor: '$grayscale400',
        },
        '&::placeholder': {
            color: '$blackberry900',
        }
    },
    '&:read-only': {
        backgroundColor: '$grayscale100',
        '&::placeholder': {
            color: '$blackberry900',
        }
    },
    variants: {
        size: {
            small: {},
            default: {
                fontSize: '$interfaceBase',
                padding: '$3 $4',
            },
            large: {},
        }
    },
    defaultVariants: {
        size: 'default',
    }
});

var Form = styled('form', {
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',
    width: '100%',
    boxSizing: 'border-box',
});

var Badge = styled('span', {
    fontFamily: '$interfaceBody',
    fontWeight: 'bold',
    lineHeight: '$interfaceBody',
    display: 'inline-flex',
    flexDirection: 'row',
    flexGrow: '0',
    flexShrink: '0',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
    borderRadius: '$2',
    boxSizing: 'border-box',
    textDecoration: 'none',
    variants: {
        type: {
            neutral: {},
            informational: {},
            positive: {},
            warning: {},
            critical: {}
        },
        style: {
            fill: {
                background: 'inherit',
                color: 'inherit',
            },
            outline: {
                background: 'none',
                border: '1px solid',
            }
        },
        size: {
            small: {
                fontSize: '$interfaceExtraSmall',
                padding: '1px 8px',
                height: '20px',
                '& svg': {
                    transform: 'scale(0.5)',
                }
            },
            default: {
                fontSize: '$interfaceSmall',
                padding: '1px 8px',
                height: '24px',
                '& svg': {
                    transform: 'scale(0.66)'
                }
            },
            large: {
                fontSize: '$interfaceBase',
                padding: '2px 8px',
                height: '30px',
                '& svg': {
                    transform: 'scale(0.83)'
                }
            },
        },
    },
    compoundVariants: [
        {
            type: 'neutral',
            style: 'fill',
            css: {
                background: '$grayscale200',
                color: '$grayscale800',
            }
        },
        {
            type: 'informational',
            style: 'fill',
            css: {
                background: '$blueberry200',
                color: '$blueberry800',
            }
        },
        {
            type: 'positive',
            style: 'fill',
            css: {
                background: '$kale200',
                color: '$kale800',
            }
        },
        {
            type: 'warning',
            style: 'fill',
            css: {
                background: '$pineapple200',
                color: '$pineapple800',
            }
        },
        {
            type: 'critical',
            style: 'fill',
            css: {
                background: '$pomegranate200',
                color: '$pomegranate800',
            }
        },
        {
            type: 'neutral',
            style: 'outline',
            css: {
                color: '$grayscale800',
                border: '1px solid $grayscale800',
            }
        },
        {
            type: 'informational',
            style: 'outline',
            css: {
                color: '$blueberry600',
                border: '1px solid $blueberry600',
            }
        },
        {
            type: 'positive',
            style: 'outline',
            css: {
                color: '$kale800',
                border: '1px solid $kale800',
            }
        },
        {
            type: 'warning',
            style: 'outline',
            css: {
                color: '$pineapple700',
                border: '1px solid $colors$pineapple700',
            }
        },
        {
            type: 'critical',
            style: 'outline',
            css: {
                color: '$pomegranate500',
                border: '1px solid $pomegranate500',
            }
        }
    ],
    defaultVariants: {
        type: 'neutral',
        style: 'fill',
        size: 'default'
    }
});

var Avatar = function (_a) {
    var size = _a.size, name = _a.name, children = _a.children;
    return (React__default.createElement(AvatarWrapper, { size: size }, !children ?
        React__default.createElement(BoringAvatar
        // size={size}
        , { 
            // size={size}
            variant: 'marble', name: name, square: true, colors: [
                '#5665EF',
                '#47B0C5',
                '#F24866',
                '#F8DC6E',
                '#43A2FF',
            ] }) :
        React__default.createElement(React__default.Fragment, null, children)));
};
var AvatarWrapper = styled('div', {
    borderRadius: '50%',
    '& > *': {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    variants: {
        size: {
            small: {
                height: '$space$8',
                width: '$space$8',
            },
            default: {
                height: '$space$9',
                width: '$space$9',
            },
            large: {
                height: '$space$10',
                width: '$space$10',
            },
        }
    },
    defaultVariants: {
        size: 'default'
    }
});

export { Arrow, Avatar, Award, Badge, Blockquote, Book, BookAlt, Button, Calendar, CalendarCheck, CalendarEdit, CalendarEvent, CalendarExclamation, CalendarHeart, CalendarMinus, CalendarPlus, CalendarStar, CalendarWeek, CalendarX, CheckCircle, Close, DefinitionList, Divider, Error, ExternalLink, Facebook, Flex, Form, Google, Grid, H1, H2, H3, H4, H5, H6, HelperText, Info, Input, Instagram, Label, LinkedIn, Logo, Medium, Mega, Megaphone, OrderedList, Paragraph, Soundcloud, Spotify, TextArea, TikTok, Twitter, UnorderedList, Warning, YouTube, config, createTheme, css, getCssText, globalCss, keyframes, styled, theme };
