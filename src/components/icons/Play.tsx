import * as React from 'react'
import { IconProps } from './types'
import { IconWrapper } from './IconWrapper'

export const Play = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size, style, ...props }, forwardedRef) => {
        function iconRender(style: any) {
            switch (style) {
                case 'default': return (
                    <path 
                        d="M5.33334 4.66667H7.33334V11.3333H5.33334V4.66667ZM8.66668 4.66667H10.6667V11.3333H8.66668V4.66667Z" 
                        fill={color}
                    />
                )
                case 'filled': return (
                    <path d="M1.33331 8.00001C1.33331 4.32401 4.32398 1.33334 7.99998 1.33334C11.676 1.33334 14.6666 4.32401 14.6666 8.00001C14.6666 11.676 11.676 14.6667 7.99998 14.6667C4.32398 14.6667 1.33331 11.676 1.33331 8.00001ZM11 5H9V11H11V5ZM7 5H5V11H7V5Z" fill={color} />
                )
                case 'outlined': return (
                    <>
                        <path d="M8.00001 1.33334C4.32401 1.33334 1.33334 4.32401 1.33334 8.00001C1.33334 11.676 4.32401 14.6667 8.00001 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8.00001C14.6667 4.32401 11.676 1.33334 8.00001 1.33334ZM8.00001 13.3333C5.05934 13.3333 2.66668 10.9407 2.66668 8.00001C2.66668 5.05934 5.05934 2.66668 8.00001 2.66668C10.9407 2.66668 13.3333 5.05934 13.3333 8.00001C13.3333 10.9407 10.9407 13.3333 8.00001 13.3333Z" fill={color} />
                        <path d="M8.66667 6H10V10H8.66667V6ZM6 6H7.33333V10H6V6Z" fill={color} />
                    </>
                )
                default: return (
                    <path 
                        d="M5.33334 4.66667H7.33334V11.3333H5.33334V4.66667ZM8.66668 4.66667H10.6667V11.3333H8.66668V4.66667Z" 
                        fill={color}
                    />
                )
            }
        }

        return (
            <IconWrapper
                size={size}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={color}
                css={{
                    '> *': {
                        fill: `${color}`,
                    },
                }}
                {...props}
                ref={forwardedRef}
            >
                {iconRender(style)}
            </IconWrapper>
        )
    }
)