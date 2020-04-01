import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({
        menuButton: { marginRight: theme.spacing(2) },
        link: { color: "white" },
    })
);

export const Layout = (props) => {

    const classes = useStyles();

    return <Fragment>
        <Container maxWidth="md">
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" color="inherit">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcon fontSize="large" color="inherit" />
                        </IconButton>
                    </Link>
                    <Typography className={classes.link}>
                        <Link href="/tickets" color="inherit">
                            Tickets
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            {props.children}
        </Container>
    </Fragment>

}