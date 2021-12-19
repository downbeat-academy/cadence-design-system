import * as React from 'react'
import { IconProps } from './types'
import { IconWrapper } from './IconWrapper'

export const CalendarMinus = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size, ...props }, forwardedRef) => {
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
                <path d="M5.33325 8.66666H10.6666V10H5.33325V8.66666Z" fill={color} />
                <path d="M12.6667 2.66667H11.3333V1.33334H10V2.66667H6V1.33334H4.66667V2.66667H3.33333C2.598 2.66667 2 3.26467 2 4V13.3333C2 14.0687 2.598 14.6667 3.33333 14.6667H12.6667C13.402 14.6667 14 14.0687 14 13.3333V4C14 3.26467 13.402 2.66667 12.6667 2.66667ZM12.668 13.3333H3.33333V5.33334H12.6667L12.668 13.3333Z" fill={color} />
            </IconWrapper>
        );
    }
)