import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${theme.colors.gray400};
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
    border: 0.2rem solid;
    border-radius: 0.8rem;
    border-color: ${theme.colors.gray400};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.yellow200};
    }

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.gray400} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`
