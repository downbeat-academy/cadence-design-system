import React from 'react'
import { styled } from '../../stitches.config'

export const Badge = styled('span', {
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

    variants: {
        type: {
            neutral: {
                background: '$grayscale200',
                color: '$grayscale800',
            },
            informational: {
                background: '$blueberry200',
                color: '$blackberry800'
            },
            positive: {
                background: '$kale200',
                color: '$kale800',
            },
            warning: {
                background: '$pineapple200',
                color: '$pineapple800',
            },
            critical: {
                background: '$pomegranate200',
                color: '$pomegranate800',
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

    defaultVariants: {
        type: 'neutral',
        size: 'default'
    }
})

