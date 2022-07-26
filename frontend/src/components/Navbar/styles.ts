import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    padding: 1.4rem 6.4rem;
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;

  a > img {
    height: 3.8rem;
    width: 10rem;
  }
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
  `}
`

export const MenuItem = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;
  `}
`
