import { styled } from '../../stitches.config'

export const IconWrapper = styled('svg', {
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
})