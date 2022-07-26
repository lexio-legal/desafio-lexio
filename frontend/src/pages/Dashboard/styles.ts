import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  padding: 1rem;
`

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    background-color: ${theme.colors.gray700};
    color: ${theme.colors.white};
    border-radius: 1rem;
    padding: 2rem;
  `}
`
export const EventDetails = styled.div`
  display: flex;
  align-items: inherit;
  gap: 1rem;

  > h3 {
    font-size: 4rem;
  }
  
  > p {
    font-weight: bold;
    max-width: 9rem;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 1.4rem;
  padding: 1rem 0;
`
