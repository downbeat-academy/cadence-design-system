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

    $$neutralSurface: '$colors$grayscale200',
    $$neutralOnSurface: '$colors$grayscale800',
    $$positiveSurface: '$colors$kale200',
    $$positiveOnSurface: '$colors$kale800',
    $$informationalSurface: '$colors$blueberry200',
    $$informationalOnSurface: '$colors$blueberry800',
    $$warningSurface: '$colors$pineapple200',
    $$warningOnSurfce: '$colors$pineapple800',
    $$criticalSurface: '$colors$pomegranate200',
    $$criticalOnSurface: '$colors$pomegranate800',

    variants: {
        type: {
            neutral: {
                background: '$$neutralSurface',
                color: '$$neutralOnSurface',
            },
            informational: {
                background: '$$informationalSurface',
                color: '$$informationalOnSurface'
            },
            positive: {
                background: '$$positiveSurface',
                color: '$$positiveOnSurface',
            },
            warning: {
                background: '$$warningSurface',
                color: '$$warningOnSurface',
            },
            critical: {
                background: '$$criticalSurface',
                color: '$$criticalOnSurface',
            }
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

    // compoundVariants: [
    //     {
    //         type: 'positive',
    //         borderColor: '$$positiveOnSurface',
    //     }
    // ],

    defaultVariants: {
        type: 'neutral',
        size: 'default'
    }
})

