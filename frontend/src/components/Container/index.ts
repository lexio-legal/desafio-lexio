import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;

    ${media.lessThan('large')`
      padding: 0 calc(${theme.grid.gutter} / 2)
    `}
  `}
`
