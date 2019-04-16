import React, { Component } from 'react';
import AppBarDrawer from './AppBarDrawer'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

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

class InNav extends Component {
    
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
    }
    state = {
        mobileOpen: false,
    };
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
                <Hidden smUp implementation="css">
                    <Drawer
                    container={this.props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    >
                    <AppBarDrawer />
                    </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    >
                    <AppBarDrawer />
                    </Drawer>
                </Hidden>
            </React.Fragment>
        )
    }
}

// export default InNav;
export default withStyles(styles, { withTheme: true })(InNav);