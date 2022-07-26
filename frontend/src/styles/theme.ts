export default {
  grid: {
    container: '112rem',
    gutter: '3.2rem'
  },
  border: {
    radiusX4: '0.4rem',
    radiusX8: '0.8rem',
    radiusX16: '0.16rem'
  },
  font: {
    family:
      "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    blue: '#3598DC',
    cyan: '#0ECDD9',
    orange: '#F5650C',
    yellow100: '#F1C40F',
    yellow200: '#FEAD00',
    gray100: '#FCFCFC',
    gray200: '#F5F5F5',
    gray300: '#EEEEEE',
    gray400: '#F0F0F0',
    gray500: '#E2E4E9',
    gray600: '#414858',
    gray700: '#28303B',
    gray800: '#2B303B',
    gray900: '#1D1929',
    label: '#6C7892',
    text: '#828282',
    white: '#FFFFFF',
    black: '#000000'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
