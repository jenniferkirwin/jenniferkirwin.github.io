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
import Cards from './components/Cards';
import About from './pages/About';

// Importing header data for props



function App() {

  // const testBanner = {
  //   page: "test page",
  //   title: "test title",
  //   content: "test content",
  //   fullScreen: true
  // }

  const test = "test";

  return (
      <Router>

        <ThemeProvider theme={theme}>

          <CssBaseline />

          <Navbar></Navbar>

          <Switch>
            <Route exact path={['/']}>
              <Banner mycontent={test}></Banner>
              <Cards></Cards>
            </Route>
            <Route exact path={['/about']}>
              <About></About>
            </Route>
          </Switch>

          <Footer></Footer>

        </ThemeProvider>

      </Router>   
 
  );
}

export default App;
