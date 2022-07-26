import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  padding: 4rem;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('medium')`
    padding: 1rem;
  `}
`

export const BannerBlock = styled.div`
  position: relative;

  ${media.lessThan('medium')`
    display: none;
  `}
`
export const ImageBg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 10rem;

    
  `}

  h2 {
    margin-top: 4rem;
    text-align: center;
  }
`

export const FormWrapper = styled.div`
  padding: 6.4rem;

  ${media.lessThan('medium')`
    padding: 1rem;
  `}
`

export const FormSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    margin: ${theme.spacings.medium} auto;
    font-size: ${theme.font.sizes.large};
  `}
`

export const FormContent = styled.div`
  margin-bottom: 8rem;
  > h2 {
    font-size: 3.6rem;
  }
`

export const Form = styled.form`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: end;

  > button {
    width: fit-content;
    align-self: flex-end;
  }
`
