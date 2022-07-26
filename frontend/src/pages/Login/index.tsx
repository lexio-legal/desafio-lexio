import { Link, useNavigate } from 'react-router-dom'

import AuthImg from 'assets/images/auth.png'
import Logo from 'assets/images/logo.png'

import * as S from './styles'
import Heading from 'components/Heading'
import InputField from 'components/TextField'
import Button from 'components/Button'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/dashboard')
  }

  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.ImageBg src={AuthImg} />

        <S.BannerContent>
          <Link to="/">
            <img src={Logo} alt="Logo Lexio" />
          </Link>

          <Heading>
            Criação e gestão de contratos de forma eficiente e descomplicada!
          </Heading>
        </S.BannerContent>
      </S.BannerBlock>

      <S.FormWrapper>
        <S.FormContent>
          <Heading color="gray700">Bem vindo(a)!</Heading>

          <S.FormSubtitle>
            Crie, assine e gerencie contratos como nunca antes{' '}
            <strong>Comece agora!</strong>
          </S.FormSubtitle>
        </S.FormContent>

        <S.Form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            placeholder="exemple@email.com"
          />
          <InputField type="password" name="password" placeholder="Senha" />

          <Button type="submit">Login</Button>
        </S.Form>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default Login
