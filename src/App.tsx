import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// MaterialUI Theming
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

// importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './pages/About';

function App() {
  return (
      <Router>

        <ThemeProvider theme={theme}>

          <CssBaseline />

          <Navbar></Navbar>

          <Switch>
            <Route exact path={['/']}>
              <Header></Header>
              <Cards></Cards>
            </Route>
            <Route exact path={['/about']}>
              <Header></Header>
              <About></About>
            </Route>
          </Switch>
          
          <Footer></Footer>

        </ThemeProvider>

      </Router>   
 
  );
}

export default App;
