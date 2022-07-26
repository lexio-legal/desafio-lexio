import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  color?: 'yellow200' | 'yellow100'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  color = 'yellow200',
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper color={color} size={size} fullWidth={fullWidth} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
