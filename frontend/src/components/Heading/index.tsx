import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
  color?: 'white' | 'gray700'
}

const Heading = ({
  children,
  size = 'medium',
  color = 'white'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
