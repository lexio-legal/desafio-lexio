import { ThreeDotsVertical } from '@styled-icons/bootstrap'

import * as S from './styles'

export type ContractProps = {
  id?: number
  title?: string
  tag?: string
  part?: string
  sub_title?: string
  status?: string
  object?: string
  parties?: []
}

const Contract = ({
  id,
  title,
  sub_title,
  status,
  object,
  parties
}: ContractProps) => (
  <S.Wrapper>
    <S.Name>
      <h2>2021_08_31 Acordo de Confidencialidade</h2>
      <p>Acordo de Confidencialidade</p>
    </S.Name>
    <S.Status>
      <span>&#x2022;</span>
      <p>agurd. assinatura</p>
    </S.Status>
    <S.Object>
      <strong>Objeto:</strong>Lorem ispsum dolem lorem ipsum dolem lorem ipsum
      lorem...
    </S.Object>
    <S.ListPart>
      <p>Partes do contrato</p>
      <ul>
        <li>JS</li>
        <li>MS</li>
        <li>GS</li>
        <li>CL</li>
        <li>CL</li>
      </ul>
    </S.ListPart>
    <S.Button>
      <ThreeDotsVertical size={25} />
    </S.Button>
  </S.Wrapper>
)

export default Contract
