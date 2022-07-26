import { CalendarNumber } from '@styled-icons/ionicons-outline'

import { Container } from 'components/Container'
import Contract from 'components/Contract'
import Navbar from 'components/Navbar'
import * as S from './styles'

const Dashboard = () => (
  <>
    <Navbar />
    <Container>
      <S.Wrapper>
        <S.Banner>
          <h2>Eventos</h2>
          <S.EventDetails>
            <CalendarNumber size={40} />
            <h3>24</h3>
            <p>Eventos da semana</p>
          </S.EventDetails>
        </S.Banner>
        <S.Content>
          <Contract />
          <Contract />
        </S.Content>
      </S.Wrapper>
    </Container>
  </>
)

export default Dashboard
