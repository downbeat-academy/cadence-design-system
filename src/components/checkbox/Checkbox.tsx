import { styled } from '@/stitches.config'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
    border: '1px solid $grayscale700',
    borderRadius: '$2',
    background: '$background',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
        borderColor: '$borderInteractiveHover',
    },

    '&:active': {
        borderColor: '$borderInteractiveActive',
    },

    '&[aria-checked="true"]': {
        background: '$backgroundInteractive',
        border: 'none',

        '&:hover': {
            background: '$backgroundInteractiveHover',
        },

        '&:active': {
            background: '$backgroundInteractiveActive',
        }
    },

    variants: {
        size: {
            small: {
                width: '16px',
                height: '16px',
            },
            default: {
                width: '20px',
                height: '20px',
            },
            large: {
                width: '24px',
                height: '24px',
            },
            extraLarge: {
                width: '32px',
                height: '32px',
            }
        },
    },

    defaultVariants: {
        size: 'default',
    }
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
    color: '$textInverse',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'inherit',
    height: 'inherit',
})

export const Checkbox = StyledCheckbox
export const Indicator = StyledIndicator