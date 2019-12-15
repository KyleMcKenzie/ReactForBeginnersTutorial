import React from 'react';
import Nav from './components/appbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Gallery from './components/gallery';
import './App.css';
import { createStyles, withStyles } from '@material-ui/core';

const styles = (theme) => createStyles({
  container: {
    margin: '0 auto',
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <CssBaseline />
        <Container>
          {/* <Typography align="center" component="div">Hello World</Typography> */}
          <Gallery />
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
