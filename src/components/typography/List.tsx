import { styled } from '../../stitches.config'

export const OrderedList = styled('ol', {
    color: '$blackberry900',
    display: 'flex',
    flexDirection: 'column',

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
})

export const UnorderedList = styled('ul', {
    color: '$blackberry900',

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
})

export const DefinitionList = styled('dl', {
    color: '$blackberry900',

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
})