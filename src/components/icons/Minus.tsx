import * as React from 'react'
import { IconProps } from './types'
import { IconWrapper } from './IconWrapper'

export const Minus = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size, ...props }, forwardedRef ) => {
        return (
            <IconWrapper
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                size={size}
                color={color}
                css={{
                    '> *': {
                        fill: `${color}`,
                    },
                }}
                {...props}
                ref={forwardedRef}
            >
                <path d="M3 8H12.3333" stroke={color} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </IconWrapper>
        )
    }
)