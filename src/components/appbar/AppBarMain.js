import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { handleDrawerToggle } from '../../actions'
import AppBarDrawer from './AppBarDrawer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class AppBarMain extends Component {
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    // state = {
    //     mobileOpen: false,
    // };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }

    render(){
        const { classes, theme } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      // onClick={this.handleDrawerToggle}
                      onClick={this.props.handleDrawerToggle}
                      className={classes.menuButton}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to={'/'} style={{textDecoration : 'none',color: 'white' }}>Opty</Link>
                        <Link to={'/management'} style={{textDecoration : 'none',color: 'white',marginLeft: '10px' }}>管理画面へ</Link>
                        {/* <button onClick={this.togglePopup.bind(this)}>記録する</button> */}
                    </Typography>
                  </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

AppBarMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
// export default withStyles(styles, { withTheme: true })(AppBarMain);

const mapDispatchToProps = ({ handleDrawerToggle })
const mapStateToProps = (state) => {    
  // const length = Object.keys(state.firebase).length
  // const current_mobile_open = state.firebase[length-1].mobileOpen
  return { redux_mobileOpen: state.firebase.mobileOpen }
}

export default compose(
  withStyles(styles,{ withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(AppBarMain)