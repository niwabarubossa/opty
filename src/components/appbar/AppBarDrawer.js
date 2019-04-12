import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

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
class AppBarDrawer extends Component {

    render(){
        const { classes, theme } = this.props;
        return(
            <div>
              <div className={classes.toolbar} />
              <Divider />
              <List>
                    <Link to={'/'} style={{textDecoration : 'none',color: 'white' }} >
                        <ListItem button key={'aaa'}>
                        <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        <ListItemText primary={'トップページ'} />
                        </ListItem>
                    </Link>
                    <Link to={'/management'} style={{textDecoration : 'none',color: 'white' }} >
                        <ListItem button key={'aaa'}>
                        <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        <ListItemText primary={'管理画面へ'} />
                        </ListItem>
                    </Link>
              </List>
              <Divider />
              <List>
                {['目標１', '目標２', '目標３'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          );

    }
}

// export default AppBarDrawer;
export default withStyles(styles, { withTheme: true })(AppBarDrawer);