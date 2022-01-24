import { Flex } from 'components/layout'
import { HelperText, Label, Input, TextArea } from 'components/form'

interface Props {
    label?: string,
    placeholder?: string,
    type?: string,
    name: string,
    helperText?: string,
    disabled?: boolean,
    inputType: 'input' | 'textarea',
    messageRows?: string,
}

export const InputField = ({
    label,
    placeholder,
    type,
    name,
    helperText,
    inputType,
    messageRows = 5,
}: Props) => {
    return (
        <Flex direction='column' gap='2'>
            {label && <Label>{label}</Label>}
            {inputType === 'input' ?             
                <Input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                /> :
            inputType === 'textarea' ?
                <TextArea
                    placeholder={placeholder}
                    name={name}
                    rows={messageRows}
                /> :
            <Input
                placeholder={placeholder}
                type={type}
                name={name}
            />}
            {helperText && <HelperText>{helperText}</HelperText>}
        </Flex>
    )
}