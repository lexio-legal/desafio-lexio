import { Search as SearchIcon } from '@styled-icons/ionicons-solid'
import * as S from './styles'

const Search = () => (
  <S.Wrapper>
    <S.SearchInput type="text" placeholder="Buscar documento" />
    <S.SearchButton>
      <SearchIcon size={25} />
    </S.SearchButton>
  </S.Wrapper>
)

export default Search
