import React from 'react'
import { styled } from '../../stitches.config'
import { Icon } from '../icons'

export const Badge = styled('span', {
    fontFamily: '$interfaceBody',
    fontSize: '$interfaceExtraSmall',
    lineHeight: '$interfaceBody',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '0',
    flexShrink: '0',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2',
    padding: '$1 $3',
    borderRadius: '1rem',

    variants: {
        type: {
            neutral: {
                background: '$grayscale100',
                color: '$grayscale800',
            },
            info: {
                background: '$blueberry000',
                color: '$blackberry600'
            },
            success: {
                background: '$kale100',
                color: '$kale800',
            },
            warning: {
                background: '$pineapple200',
                color: '$pineapple800',
            },
            error: {
                background: '$pomegranate100',
                color: '$pomegranate700',
            }
        }
    },

    defaultVariants: {
        type: 'neutral',
    }
})

