import React from 'react'
import { styled } from '../../stitches.config'
import { Paragraph } from './Body'
import { QuoteLeft } from '../icons'

type Props = {
    children: React.ReactNode,
    attribution?: string,
    source?: string,
}

export const Blockquote = ({ children, attribution, source }: Props) => {
    return (
        <Wrapper>
            <div className='quote-symbol'>
                <QuoteLeft color='$grayscale100' size='small' />
            </div>
            <Quote>
                "{children}"
            </Quote>
            <div className='attribution-wrapper'>
                {attribution && <Paragraph size='small'>— <em>{attribution}</em></Paragraph>}
                {source && <Paragraph size='extraSmall'><a href={source} target='blank'><em>{source}</em></a></Paragraph>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled('section', {
    padding: '$8',
    margin: '$8 $6',
    background: '$blackberry100',
    color: '$blackberry900',
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
    border: '1px solid $passionFruit600',
    position: 'relative',

    '@md': {
        margin: '$6 0',
        padding: '$6',
    },

    [`${Paragraph}`]: {
        margin: '0',
    },

    '.quote-symbol': {
        position: 'absolute',
        top: '-24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        background: '$passionFruit600',
        borderRadius: '40px',
    },

    '.attribution-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',

        'a': {
            color: '$passionFruit600',
        }
    }
})

const Quote = styled('blockquote', {
    fontFamily: '$displayBody',
    fontSize: '$displayLarge',
    lineHeight: '$displayBody',
    margin: '0',
    padding: '0',
})