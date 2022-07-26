import { Link } from 'react-router-dom'
import { Logout } from '@styled-icons/material-outlined'

import Logo from 'assets/images/logo.png'

import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <S.Container>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <S.MenuNav>
        <S.MenuItem href="/login">
          Sair <Logout size={25} />
        </S.MenuItem>
      </S.MenuNav>
    </S.Container>
  </S.Wrapper>
)

export default Navbar
