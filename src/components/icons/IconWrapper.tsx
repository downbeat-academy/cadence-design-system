import { styled } from '../../stitches.config'
// import type * as Stitches from '@stitches/react'

export const IconWrapper = styled('svg', {
    fill: 'none',

    variants: {
        size: {
            small: {
                width: '1rem',
                height: '1rem',
            },
            medium: {
                width: '2rem',
                height: '2rem',
            },
            large: {
                width: '2.5rem',
                height: '2.5rem',
            }
        },
        direction: {
            up: { transform: 'rotate(180deg)', },
            right: { transform: 'rotate(-90deg)', },
            left: { transform: 'rotate(90deg)', },
            down: { transform: 'rotate(0deg)', },
        }
    }
})