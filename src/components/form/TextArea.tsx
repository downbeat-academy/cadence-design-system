import { styled } from 'stitches.config'

export const TextArea = styled('textarea', {
    backgroundColor: '$grayscale000',
    border: '1px solid $grayscale400',
    fontFamily: '$interfaceBody',
    lineHeight: '$interfaceBody',
    color: '$blackberry1000',

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
})