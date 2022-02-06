import * as React from 'react'
import { IconProps } from './types'
import { IconWrapper } from './IconWrapper'

export const QuoteLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2.46066 4.19467C3.39599 3.18067 4.81132 2.66667 6.66666 2.66667H7.33332V4.546L6.79732 4.65334C5.88399 4.836 5.24866 5.19534 4.90866 5.72267C4.73125 6.00676 4.63064 6.33203 4.61666 6.66667H6.66666C6.84347 6.66667 7.01304 6.73691 7.13806 6.86193C7.26309 6.98696 7.33332 7.15653 7.33332 7.33334V12C7.33332 12.7353 6.73532 13.3333 5.99999 13.3333H1.99999C1.82318 13.3333 1.65361 13.2631 1.52859 13.1381C1.40356 13.0131 1.33332 12.8435 1.33332 12.6667V9.33334L1.33532 7.38734C1.32932 7.31334 1.20266 5.56 2.46066 4.19467ZM13.3333 13.3333H9.33332C9.15651 13.3333 8.98694 13.2631 8.86192 13.1381C8.7369 13.0131 8.66666 12.8435 8.66666 12.6667V9.33334L8.66866 7.38734C8.66266 7.31334 8.53599 5.56 9.79399 4.19467C10.7293 3.18067 12.1447 2.66667 14 2.66667H14.6667V4.546L14.1307 4.65334C13.2173 4.836 12.582 5.19534 12.242 5.72267C12.0646 6.00676 11.964 6.33203 11.95 6.66667H14C14.1768 6.66667 14.3464 6.73691 14.4714 6.86193C14.5964 6.98696 14.6667 7.15653 14.6667 7.33334V12C14.6667 12.7353 14.0687 13.3333 13.3333 13.3333Z" fill={color} />
            </IconWrapper>
        );
    }
)

export const QuoteRight = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.5393 11.8053C14.7973 10.44 14.6707 8.68667 14.6667 8.66667V3.33334C14.6667 3.15653 14.5964 2.98696 14.4714 2.86193C14.3464 2.73691 14.1768 2.66667 14 2.66667H10C9.26467 2.66667 8.66667 3.26467 8.66667 4.00001V8.66667C8.66667 8.84348 8.73691 9.01305 8.86194 9.13808C8.98696 9.2631 9.15653 9.33334 9.33334 9.33334H11.3853C11.3713 9.66293 11.2728 9.98338 11.0993 10.264C10.7607 10.798 10.1227 11.1627 9.20201 11.3467L8.66667 11.4533V13.3333H9.33334C11.1887 13.3333 12.604 12.8193 13.5393 11.8053ZM6.20134 11.8053C7.46001 10.44 7.33267 8.68667 7.32867 8.66667V3.33334C7.32867 3.15653 7.25844 2.98696 7.13341 2.86193C7.00839 2.73691 6.83882 2.66667 6.66201 2.66667H2.66201C1.92667 2.66667 1.32867 3.26467 1.32867 4.00001V8.66667C1.32867 8.84348 1.39891 9.01305 1.52394 9.13808C1.64896 9.2631 1.81853 9.33334 1.99534 9.33334H4.04734C4.03326 9.66293 3.93478 9.98338 3.76134 10.264C3.42267 10.798 2.78467 11.1627 1.86401 11.3467L1.32867 11.4533V13.3333H1.99534C3.85067 13.3333 5.26601 12.8193 6.20134 11.8053V11.8053Z" fill={color} />
            </IconWrapper>
        );
    }
)
