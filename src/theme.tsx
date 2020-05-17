import { createMuiTheme }  from '@material-ui/core/styles'
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
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Bebas Neue', cursive",
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
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "'Bebas Neue', cursive",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      lineHeight: '1.25',
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
    },
  }
})
export default theme