import { styled } from 'stitches.config'

export const Link = styled('a', {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
    textDecoration: 'underline',
    textDecorationColor: '$passionFruit500',
    textDecorationThickness: '$space$2',
    textUnderlineOffset: '$space$1',
    transition: '$1',

    '&:hover': {
        cursor: 'pointer',
        background: '$passionFruit100',
        textDecorationColor: '$passionFruit100',
        padding: '$2 0',
    }
})