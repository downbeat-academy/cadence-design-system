import { styled } from '../../stitches.config'

export const Input = styled('input', {
    backgroundColor: '$grayscale000',
    border: '1px solid $grayscale400',
    fontFamily: '$interfaceBody',
    lineHeight: '$interfaceBody',
    color: '$blackberry1000',
    transition: '$1',

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
})