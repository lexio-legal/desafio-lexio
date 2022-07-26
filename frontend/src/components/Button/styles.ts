import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { ButtonProps } from '.'

const Modifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 6rem;
  `,

  large: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} 8rem;
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size, color, fullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[color!]};
    color: ${theme.colors.gray800};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.radiusX8};
    border: 0;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s;

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.yellow200};
    }

    &:hover {
      background: ${theme.colors.gray600};
      color: ${theme.colors.white};
    }

    ${!!size && Modifiers[size](theme)}
    ${!!fullWidth && Modifiers.fullWidth()}
  `}
`
