import { styled } from 'stitches.config'
import { Icon } from '../icons'

const LinkWrapper = styled('a', {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
    textDecoration: 'underline',
    textDecorationColor: '$passionFruit500',
    textDecorationThickness: '$space$2',
    textUnderlineOffset: '$space$1',
    transition: '$1',
    padding: '$1 0',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2',

    '&:hover': {
        cursor: 'pointer',
        background: '$passionFruit100',
        textDecorationColor: '$passionFruit100',
    }
})

interface Props {
    type?: 'internal' | 'external',
    children: React.ReactNode,
    href?: string,
}

export const Link = ({ type = 'internal', children, href }: Props) => {
    return (
        <>
            {type === 'internal' ?
                (
                    <LinkWrapper>{children}</LinkWrapper>
                ) : type === 'external' ?
                (
                    <LinkWrapper
                        href={href}
                        target='blank'
                    >{children}<Icon icon='externalLink' size='extraSmall' /></LinkWrapper>
                ) : null
            }
        </>
    )
}