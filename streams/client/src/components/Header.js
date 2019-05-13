import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GoogleAuth from './GoogleAuth';

const styles = {
  root: {
    flexGrow: 1,
  },
  head: {
    flex: "100 100 150px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    flex: "2 2 130px"
  },
  signGoogle: {
    flex: "2 2 130px"
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.head}>
            Streamy
          </Typography>
          <Button className={classes.menuButton} color="inherit" href="/">
            <i className="large list icon"></i>
            Streams
          </Button>
          <GoogleAuth className={classes.signGoogle}/>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);