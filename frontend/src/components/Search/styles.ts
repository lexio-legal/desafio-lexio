import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  width: 75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    display: block;
    height: 5.6rem;
    width: 100%;
    padding: 2rem;
    border: none;
    border-radius: ${theme.border.radiusX8};
    background-color: ${theme.colors.gray500};
    color: ${theme.colors.label};
    outline: none;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.gray600};
    }
  `}
`

export const SearchButton = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  margin-right: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`
