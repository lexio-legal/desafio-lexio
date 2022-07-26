import { InputHTMLAttributes } from 'react'
import { useState } from 'react'
import * as S from './styles'

export type InputFieldProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ({
  type = 'text',
  name,
  onInputChange,
  initialValue,
  ...props
}: InputFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.Wrapper>
  )
}
export default InputField
