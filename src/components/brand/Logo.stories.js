import React from 'react'
import { Logo } from './index'

export default {
    title: 'Foundations/Logo',
    argTypes: {
        width: 'width',
        color: 'color',
        type: 'type'
    }
}

export const Symbol = (args) => <Logo {...args} />
export const Text = (args) => <Logo {...args} />
export const Lockup = (args) => <Logo {...args} />

Symbol.args = { 
    color: '$passionFruit500',
    width: '250',
    type: 'symbol'
}

Text.args = { 
    color: '$passionFruit500',
    width: '250',
    type: 'text'
}
Lockup.args = { 
    color: '$passionFruit500',
    width: '250',
    type: 'lockup'
}