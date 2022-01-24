import { styled } from '../../stitches.config'

interface Props {
    placeholder?: string,
    type: 'email' | 'text' | 'number' | 'tel' | 'url' | 'password',
    name: string,
}

export const Input = ({
    placeholder = 'Default placeholder',
    type = 'text',
    name = 'name',
}) => {
    return (
        <>
            <InputWrapper 
                placeholder={placeholder}
                type={type}
                name={name}
            />
        </>
    )
}

const InputWrapper = styled('input', {
    backgroundColor: '$grayscale000',
    border: '1px solid $grayscale400',
    fontFamily: '$interfaceBody',
    lineHeight: '$interfaceBody',
    color: '$blackberry1000',

    '&:placeholder': {
        color: '$grayscale600',
    },

    '&:hover': {
        borderColor: '$grayscale600',
    },

    '&:focus': {
        borderColor: '$grayscale800',
        outline: 'none',
    },

    '&:disabled': {
        ponterEvents: 'none',
        cursor: 'not-allowed',
    },

    variants: {
        size: {
            small: {},
            default: {
                fontSize: '$interfaceBase',
                padding: '$3 $4',
            },
            large: {},
        },
        
    },

    defaultVariants: {
        size: 'default'
    }
})