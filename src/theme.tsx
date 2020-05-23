import { createMuiTheme }  from '@material-ui/core/styles'

const $headerFont: string = "'Bebas Neue', cursive";
const $bodyFont: string = "'Lato', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2A2B2A' },
    secondary: { main: '#FF206E' },
    text: {
      primary: '#2A2B2A',
    },
  },

  typography: {
    h1: {
      fontFamily: $headerFont,
      fontWeight: 400,
    },
    h2: {
      fontFamily: $headerFont,
      fontWeight: 400,
      position: 'relative',
      '&:after': {
        content: '" "',
        display: 'block',
        backgroundColor: '#2A2B2A',
        height: '5px',
        width: '25px',
        position: 'absolute',
        bottom: '-15px',
      },
    },
    h3: {
      fontFamily: $headerFont,
      fontWeight: 400,
      marginBottom: '25px',
      position: 'relative',
      '&:after': {
        content: '" "',
        display: 'block',
        backgroundColor: '#FF206E',
        height: '5px',
        width: '25px',
        position: 'absolute',
        bottom: '-15px',
      },
    },
    h4: {
      fontFamily: $headerFont,
      fontWeight: 400,
    },
    h5: {
      fontFamily: $headerFont,
      fontWeight: 400,
    },
    h6: {
      fontFamily: $bodyFont,
      fontWeight: 700,
      lineHeight: '1.25',
    },
    body1: {
      fontFamily: $bodyFont,
      fontWeight: 400,
      marginBottom: '25px',
    },
  }
});

export default theme