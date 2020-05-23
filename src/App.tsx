import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// MaterialUI Theming
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

// importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// importing pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

function App() {
  // Try this for route mapping: https://alligator.io/react/react-router-map-to-routes/
  return (
      <Router>

        <ThemeProvider theme={theme}>

          <CssBaseline />

          <Navbar></Navbar>

          <Switch>
            <Route
              exact path={'/'}
              render={() => <Home/>}
            />
            <Route
              path='/about'
              render={() => <About/>}
            />
            <Route
              path='/portfolio'
              render={() => <Portfolio />}
            />
            <Route
              path='/contact'
              render={() => <Contact />}
            />
            <Route
              render={() => <NoMatch />}
            />
          </Switch>

          <Footer></Footer>

        </ThemeProvider>

      </Router>   
 
  );
}

export default App;
