/* eslint-disable @typescript-eslint/ban-types */
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
      url('../fonts/open-sans-v29-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('../fonts/open-sans-v29-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
      url('../fonts/open-sans-v29-latin-500.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('../fonts/open-sans-v29-latin-600.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
      url('../fonts/open-sans-v29-latin-700.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
      url('../fonts/open-sans-v29-latin-800.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
export default GlobalStyles
