import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    createStyles,
    withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const styles = (theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

class Nav extends React.Component {

    render() {
        const classes = this.props.classes;
        // className={classes.menuButton}
        // className={classes.title}
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cute Pictures of Animals
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Nav);