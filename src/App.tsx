import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// MaterialUI Theming
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

// importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';

// importing pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';

// Importing header data for props
import headers from './data/headers'
import BannerProps from './interfaces/BannerProps';

function App() {
  // Try this for route mapping: https://alligator.io/react/react-router-map-to-routes/
  return (
      <Router>

        <ThemeProvider theme={theme}>

          <CssBaseline />

          <Navbar></Navbar>

          <Switch>
            <Route exact path={'/'}>
              <Banner {...headers[0]}></Banner>
            </Route>
            <Route
              path='/about'
              render={() => <About/>}
            />
            <Route
              path='/portfolio'
              render={(props) => <Portfolio {...headers[1]} />}
            />
            <Route>
              <NoMatch />
            </Route>
          </Switch>

          <Footer></Footer>

        </ThemeProvider>

      </Router>   
 
  );
}

export default App;
